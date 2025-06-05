---
# icon: pen-to-square
date: 2020-07-05
category:
  - 优化手段
---

# Nginx优化


## CPU亲和
### worker_cpu_affinity的指令介绍

Nginx提供了一种名为worker_cpu_affinity的指令，可以让你指定Nginxworker进程与特定CPU核心之间的亲和性，也就是把某个或某些worker进程
绑定到具体的CPU 核心上运行。通过设置CPU亲和性，你可I以提高Nginx的性能，因为当进程始终在同一个CPU 核心上执行时，可I以利用CPU的缓存，
从而减少内存访问延迟。
下面是一些用法示例：

1、绑定每一个 worker进程到一个具体的 CPU 核心:
```
# 示例1、如果有个4核
worker_processes  4;
worker_cpu_affinity 0001 0010 0100 1000; # 4个核心，就用4位bit，哪一位为1则代表用第几颗
===
# 示例2、如果有16核
worker_processes    16;
worker_cpu_affinity 0000000000000001 0000000000000010 0000000000000100 0000000000001000 ...;
```
上述示例1中，worker_processes表示总共有4个worker进程，每行的worker_cpu_affinity分别对应一个二进制数，用来表示该worker进程应被
绑定到哪个CPU核心上。这种配置方式在你精确知道服务器有多少CPU核心，并且希望将进程直接绑定到特定核心上时非常有用。

2、自动分配worker进程到所有可用的CPU核心：
```
worker_processes  auto;
worker_cpu_affinity auto;
```
以上配置将会自动检测你的机器有多少个CPU核心，并尝试将每个worker进程绑定到一个独立的CPU核心上。这种配置方式在你不确定服务器具体
有多少CPU核心，或者不希望手动指定进程绑定的核心时非常有用。
设置 CPU 亲和性后，worker 进程在运行时将始终在同一个 CPU 核心上执行，从而更有效地利用 CPU 的缓存，减少内存访问延迟，提高整体性能。
但也需要注意，如果服务器同时运行着其他CPU密集型任务，设置CPU亲和性可能并不能产生显著的性能提升，甚至可能会降低性能，因为这可能导
致 CPU 核心的过度使用。
在实际应用中，你可能需要根据你的服务器的特定情况进行调整和优化。
### 案例
查看当没有指定cpu的时候，每个worker进程都跑在哪些cpu上
```
[root@lb ~]# cat /etc/nginx/nginx.conf |grep -i work
worker_processes 2;
[root@lb ~]#  ps -eo pid,args,psr | grep [n]ginx
   6989 nginx: master process /usr/   1
   6990 nginx: worker process         0 # 第一颗
   6991 nginx: worker process         1 # 第二颗
补充说明：命令ps -eo pid,args,psr 是用来显示进程ID（pid）、命令行参数（args）以及进程运行的处理器ID（psr）。
```
## Nginx通用优化文件
```
[root@nginx ~]# cat nginx.conf
user www;                                   #nginx启动用户
worker_processes auto;                       #nginx工作进程数
worker_cpu_affinity auto;                     #开启CPU亲和
error_log /var/log/nginx/error.log warn;      #错误日志，存放路径，记录日志的级别
pid /run/nginx.pid;                         #指定pid文件位置
worker_rlimit_nofile 35535;                  #指定nginx服务的最大打开文件数
 
events {
    use epoll;                              #使用epoll网络模型
    worker_connections 10240;                #worker工作进程的最大连接数
}
 
http {
    include             mime.types;                #nginx能识别的文件类型
    default_type        application/octet-stream;   #nginx不识别的文件类型默认下载
    charset utf-8;                               #指定字符集
 
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';           #配置日志格式
 
    access_log  /var/log/nginx/access.log  main     #指定访问日志路径，调用日志的格式
    server_tokens off;                            #隐藏版本号
    client_max_body_size 200m;                     #上传文件大小限制
    sendfile            on;                        #高效读取
    tcp_nopush          on;                         #高效传输
    #tcp_nodelay         on;                        #实时传输
    keepalive_timeout   65;                         #开启长连接
    gzip on;                                      #开启压缩
    gzip_disable "MSIE [1-6]\.";                  #指定不压缩的浏览器
    gzip_http_version 1.1;                          #压缩后传输的协议
    gzip_comp_level 4;                              #压缩的级别
    gzip_buffers 16 8k;                             #压缩缓存
    gzip_min_length 1024;                           #开启压缩的最小值
    gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript image/jpeg;       #压缩的文件类型
    include /etc/nginx/conf.d/*.conf;               #包含的配置文件
}
```

## nginx优化总结
```
1、CPU亲和、worker进程数、调整nginx进程打开的文件句柄数
2、使用Epool网络模型、调整每个worker进程的最大连接数
3、文件的高效读取sendfile、nopush
4、文件的传输实时性、nodealy
5、开启tcp长连接，以及长连接超时时间keepalive_timeout
6、开启文件传输压缩gzip
7、开启静态文件expires缓存
8、隐藏nginx版本号
9、禁止通过ip地址访问，禁止恶意域名解析，只允许域名访问
10、配置防盗链、以及跨域访问
11、防DDOS、cc攻击，限制单IP并发连接，以及http请求
12、优雅显示nginx错误页面
13、nginx加密传输https优化
14、nginx proxy_cache、fastcgi_cache、uwsgi_cache 代理缓存，第三方工具（squid、varnish）
```

