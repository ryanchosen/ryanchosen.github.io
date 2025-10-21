import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,f as i,o as e}from"./app-C-UrHOVr.js";const p="/assets/PixPin_2025-06-06_11-41-51-Cm7iEwX9.png",l="/assets/PixPin_2025-06-06_11-50-06-Bs13dHVp.png",r={};function c(d,s){return e(),a("div",null,s[0]||(s[0]=[i('<h1 id="nginx优化" tabindex="-1"><a class="header-anchor" href="#nginx优化"><span>Nginx优化</span></a></h1><h2 id="启用reuseport" tabindex="-1"><a class="header-anchor" href="#启用reuseport"><span>启用reuseport</span></a></h2><p>在TCP三次握手的时候，Linux内核会维护两个队列，分别是：</p><p>1、半连接队列，也称SYN队列。</p><p>2、全连接队列，也称 accepet队列。</p><p>服务端收到客户端发起的SYN请求后，内核会把该连接存储到半连接队列，并向客户端响应SYN+ACK，接着客户端会返回ACK，服务端收到第三次握<br> 手的ACK 后，内核会把连接从半连接队列移除，然后创建新的完全的连接，并将其添加到 accept队列，等待进程调用accept 函数时把连接取出来。</p><p><img src="'+p+'" alt="alt text" loading="lazy"><br> 半连接队列和全连接队列都有最大长度限制，超过限制时，请求会被去弃，并返回RST<br><img src="'+l+`" alt="alt text" loading="lazy"><br> TCP全连接队列的最大值取决于min（somaxconn，backlog)。</p><p>TCP半连接队列最大值取决于max_syn_backlog、somaxconn、backlog</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>somaxconn tcp_max_syn_backlog 是 Linux 内核的参数，默认值都是 128</span></span>
<span class="line"><span>sysctl -w net.core.somaxconn=65530  # 设置全连接池大小</span></span>
<span class="line"><span>sysctl -w net.ipv4.tcp_max_syn_backlog=10240 # 设置半链接池大小</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> </span></span>
<span class="line"><span>backlog 是 listen(int sockfd, int backlog) 函数中的 backlog 大小，Nginx 默认值是 511。</span></span>
<span class="line"><span>可以通过nginx.conf配置文件设置其长度，需重启nginx生效。</span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>  listen 80 default backlog=10240;</span></span>
<span class="line"><span>  servarname localhost;</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nginx的两种工作模式" tabindex="-1"><a class="header-anchor" href="#nginx的两种工作模式"><span>Nginx的两种工作模式</span></a></h3><p>第一种：1个master主进程+多个worker子进程（worker进程禁用reuseport模式，默认）</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 1、工作模式介绍（共享监听，共享一个全连接队列）</span></span>
<span class="line"><span>在这种方式下</span></span>
<span class="line"><span>（1）、主进程执行 bind() + listen() 后，创建多个子进程；</span></span>
<span class="line"><span>（2）、然后，在每个子进程中，都通过 accept() 或 epoll_wait() ，来处理相同的套接字。此时所有子进程/线程共享一个全连接队列</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> </span></span>
<span class="line"><span>2、特点：所有worker进程共享一个listener全连接队列</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>3、优点：因为全连接队列是共享的，所以当某个worker进程繁忙的情况下，它去全连接队列里accpet的能力会降低，但其他空闲的worker进程则</span></span>
<span class="line"><span>不受影响，这会平衡所有worker进程的压力</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>4、缺点：多个worker进程争抢会带来额外的损耗</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二种：1个master主进程+多个worker子进程(worker进程启用reuseport模式）</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>1、工作模式介绍（单独监听，独享自己的全连接队列）</span></span>
<span class="line"><span>在这种方式下，需要开启 SO_REUSEPORT 选项，所有的worker进程会都监听相同的接口。</span></span>
<span class="line"><span>然后由内核负责将请求负载均衡到这些监听进程中去，相当于每个进程/线程独享自己的那一个 listener 的全链接队列，</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> </span></span>
<span class="line"><span>2、特点：每个worker进程都独享自己的listener全连接队列</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>3、优点：</span></span>
<span class="line"><span>不需要多个进程/线程竞争某个公共资源，减少竞争的资源消耗，处理效率自然提高了。</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>4、缺点：</span></span>
<span class="line"><span>独享可以减少竞争，但会造成分配不均衡，因为每个worker自己listener管理的全连接队列无法分享给别的worker进程，你就无法做到</span></span>
<span class="line"><span>在你自己的worker繁忙的情况下，让其他空闲的worker进程来accpet()访问你的全连接队列从而分摊你的压力，这会导致单个链接的请求的延迟增大，cpu分配不均匀</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改参数如下，只需要在listen 端口后面加上reuseport即可：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>server {</span></span>
<span class="line"><span>        listen 80 reuseport;</span></span>
<span class="line"><span>        listen 443 ssl http2 reuseport;</span></span>
<span class="line"><span>        server_name   xxx.xxx.com;</span></span>
<span class="line"><span>        charset utf-8;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cpu亲和" tabindex="-1"><a class="header-anchor" href="#cpu亲和"><span>CPU亲和</span></a></h2><h3 id="worker-cpu-affinity的指令介绍" tabindex="-1"><a class="header-anchor" href="#worker-cpu-affinity的指令介绍"><span>worker_cpu_affinity的指令介绍</span></a></h3><p>Nginx提供了一种名为worker_cpu_affinity的指令，可以让你指定Nginxworker进程与特定CPU核心之间的亲和性，也就是把某个或某些worker进程<br> 绑定到具体的CPU 核心上运行。通过设置CPU亲和性，你可I以提高Nginx的性能，因为当进程始终在同一个CPU 核心上执行时，可I以利用CPU的缓存，<br> 从而减少内存访问延迟。<br> 下面是一些用法示例：</p><p>1、绑定每一个 worker进程到一个具体的 CPU 核心:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 示例1、如果有个4核</span></span>
<span class="line"><span>worker_processes  4;</span></span>
<span class="line"><span>worker_cpu_affinity 0001 0010 0100 1000; # 4个核心，就用4位bit，哪一位为1则代表用第几颗</span></span>
<span class="line"><span>===</span></span>
<span class="line"><span># 示例2、如果有16核</span></span>
<span class="line"><span>worker_processes    16;</span></span>
<span class="line"><span>worker_cpu_affinity 0000000000000001 0000000000000010 0000000000000100 0000000000001000 ...;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述示例1中，worker_processes表示总共有4个worker进程，每行的worker_cpu_affinity分别对应一个二进制数，用来表示该worker进程应被<br> 绑定到哪个CPU核心上。这种配置方式在你精确知道服务器有多少CPU核心，并且希望将进程直接绑定到特定核心上时非常有用。</p><p>2、自动分配worker进程到所有可用的CPU核心：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>worker_processes  auto;</span></span>
<span class="line"><span>worker_cpu_affinity auto;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>以上配置将会自动检测你的机器有多少个CPU核心，并尝试将每个worker进程绑定到一个独立的CPU核心上。这种配置方式在你不确定服务器具体<br> 有多少CPU核心，或者不希望手动指定进程绑定的核心时非常有用。<br> 设置 CPU 亲和性后，worker 进程在运行时将始终在同一个 CPU 核心上执行，从而更有效地利用 CPU 的缓存，减少内存访问延迟，提高整体性能。<br> 但也需要注意，如果服务器同时运行着其他CPU密集型任务，设置CPU亲和性可能并不能产生显著的性能提升，甚至可能会降低性能，因为这可能导<br> 致 CPU 核心的过度使用。<br> 在实际应用中，你可能需要根据你的服务器的特定情况进行调整和优化。</p><h3 id="案例" tabindex="-1"><a class="header-anchor" href="#案例"><span>案例</span></a></h3><p>查看当没有指定cpu的时候，每个worker进程都跑在哪些cpu上</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[root@lb ~]# cat /etc/nginx/nginx.conf |grep -i work</span></span>
<span class="line"><span>worker_processes 2;</span></span>
<span class="line"><span>[root@lb ~]#  ps -eo pid,args,psr | grep [n]ginx</span></span>
<span class="line"><span>   6989 nginx: master process /usr/   1</span></span>
<span class="line"><span>   6990 nginx: worker process         0 # 第一颗</span></span>
<span class="line"><span>   6991 nginx: worker process         1 # 第二颗</span></span>
<span class="line"><span>补充说明：命令ps -eo pid,args,psr 是用来显示进程ID（pid）、命令行参数（args）以及进程运行的处理器ID（psr）。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx通用优化文件" tabindex="-1"><a class="header-anchor" href="#nginx通用优化文件"><span>Nginx通用优化文件</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[root@nginx ~]# cat nginx.conf</span></span>
<span class="line"><span>user www;                                   #nginx启动用户</span></span>
<span class="line"><span>worker_processes auto;                       #nginx工作进程数</span></span>
<span class="line"><span>worker_cpu_affinity auto;                     #开启CPU亲和</span></span>
<span class="line"><span>error_log /var/log/nginx/error.log warn;      #错误日志，存放路径，记录日志的级别</span></span>
<span class="line"><span>pid /run/nginx.pid;                         #指定pid文件位置</span></span>
<span class="line"><span>worker_rlimit_nofile 35535;                  #指定nginx服务的最大打开文件数</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>events {</span></span>
<span class="line"><span>    use epoll;                              #使用epoll网络模型</span></span>
<span class="line"><span>    worker_connections 10240;                #worker工作进程的最大连接数</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>http {</span></span>
<span class="line"><span>    include             mime.types;                #nginx能识别的文件类型</span></span>
<span class="line"><span>    default_type        application/octet-stream;   #nginx不识别的文件类型默认下载</span></span>
<span class="line"><span>    charset utf-8;                               #指定字符集</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span>                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span>                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;           #配置日志格式</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>    access_log  /var/log/nginx/access.log  main     #指定访问日志路径，调用日志的格式</span></span>
<span class="line"><span>    server_tokens off;                            #隐藏版本号</span></span>
<span class="line"><span>    client_max_body_size 200m;                     #上传文件大小限制</span></span>
<span class="line"><span>    sendfile            on;                        #高效读取</span></span>
<span class="line"><span>    tcp_nopush          on;                         #高效传输</span></span>
<span class="line"><span>    #tcp_nodelay         on;                        #实时传输</span></span>
<span class="line"><span>    keepalive_timeout   65;                         #开启长连接</span></span>
<span class="line"><span>    gzip on;                                      #开启压缩</span></span>
<span class="line"><span>    gzip_disable &quot;MSIE [1-6]\\.&quot;;                  #指定不压缩的浏览器</span></span>
<span class="line"><span>    gzip_http_version 1.1;                          #压缩后传输的协议</span></span>
<span class="line"><span>    gzip_comp_level 4;                              #压缩的级别</span></span>
<span class="line"><span>    gzip_buffers 16 8k;                             #压缩缓存</span></span>
<span class="line"><span>    gzip_min_length 1024;                           #开启压缩的最小值</span></span>
<span class="line"><span>    gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript image/jpeg;       #压缩的文件类型</span></span>
<span class="line"><span>    include /etc/nginx/conf.d/*.conf;               #包含的配置文件</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx优化总结" tabindex="-1"><a class="header-anchor" href="#nginx优化总结"><span>nginx优化总结</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>1、CPU亲和、worker进程数、调整nginx进程打开的文件句柄数</span></span>
<span class="line"><span>2、使用Epool网络模型、调整每个worker进程的最大连接数</span></span>
<span class="line"><span>3、文件的高效读取sendfile、nopush</span></span>
<span class="line"><span>4、文件的传输实时性、nodealy</span></span>
<span class="line"><span>5、开启tcp长连接，以及长连接超时时间keepalive_timeout</span></span>
<span class="line"><span>6、开启文件传输压缩gzip</span></span>
<span class="line"><span>7、开启静态文件expires缓存</span></span>
<span class="line"><span>8、隐藏nginx版本号</span></span>
<span class="line"><span>9、禁止通过ip地址访问，禁止恶意域名解析，只允许域名访问</span></span>
<span class="line"><span>10、配置防盗链、以及跨域访问</span></span>
<span class="line"><span>11、防DDOS、cc攻击，限制单IP并发连接，以及http请求</span></span>
<span class="line"><span>12、优雅显示nginx错误页面</span></span>
<span class="line"><span>13、nginx加密传输https优化</span></span>
<span class="line"><span>14、nginx proxy_cache、fastcgi_cache、uwsgi_cache 代理缓存，第三方工具（squid、varnish）</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32)]))}const v=n(r,[["render",c]]),u=JSON.parse('{"path":"/docs/optimization/nginx.html","title":"Nginx优化","lang":"zh-CN","frontmatter":{"date":"2020-07-05T00:00:00.000Z","category":["优化手段"],"description":"Nginx优化 启用reuseport 在TCP三次握手的时候，Linux内核会维护两个队列，分别是： 1、半连接队列，也称SYN队列。 2、全连接队列，也称 accepet队列。 服务端收到客户端发起的SYN请求后，内核会把该连接存储到半连接队列，并向客户端响应SYN+ACK，接着客户端会返回ACK，服务端收到第三次握 手的ACK 后，内核会把连接从...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Nginx优化\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-07-05T00:00:00.000Z\\",\\"dateModified\\":\\"2025-06-06T03:55:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan Su\\"}]}"],["meta",{"property":"og:url","content":"https://mister-hope.github.io/docs/optimization/nginx.html"}],["meta",{"property":"og:site_name","content":"Blog"}],["meta",{"property":"og:title","content":"Nginx优化"}],["meta",{"property":"og:description","content":"Nginx优化 启用reuseport 在TCP三次握手的时候，Linux内核会维护两个队列，分别是： 1、半连接队列，也称SYN队列。 2、全连接队列，也称 accepet队列。 服务端收到客户端发起的SYN请求后，内核会把该连接存储到半连接队列，并向客户端响应SYN+ACK，接着客户端会返回ACK，服务端收到第三次握 手的ACK 后，内核会把连接从..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-06-06T03:55:20.000Z"}],["meta",{"property":"article:published_time","content":"2020-07-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-06-06T03:55:20.000Z"}]]},"git":{"createdTime":1749125641000,"updatedTime":1749182120000,"contributors":[{"name":"苏雨鸿","username":"","email":"563607356@qq.com","commits":2}]},"readingTime":{"minutes":6.8,"words":2040},"filePathRelative":"docs/optimization/nginx.md","excerpt":"\\n<h2>启用reuseport</h2>\\n<p>在TCP三次握手的时候，Linux内核会维护两个队列，分别是：</p>\\n<p>1、半连接队列，也称SYN队列。</p>\\n<p>2、全连接队列，也称 accepet队列。</p>\\n<p>服务端收到客户端发起的SYN请求后，内核会把该连接存储到半连接队列，并向客户端响应SYN+ACK，接着客户端会返回ACK，服务端收到第三次握<br>\\n手的ACK 后，内核会把连接从半连接队列移除，然后创建新的完全的连接，并将其添加到 accept队列，等待进程调用accept 函数时把连接取出来。</p>\\n<p><br>\\n半连接队列和全连接队列都有最大长度限制，超过限制时，请求会被去弃，并返回RST<br>\\n<br>\\nTCP全连接队列的最大值取决于min（somaxconn，backlog)。</p>","autoDesc":true}');export{v as comp,u as data};
