---
# icon: pen-to-square
date: 2019-05-04
category:
  - 软件安装
---

# Mysql多种裸部署方式


## Linux
### 1.1 源码安装
**下载源码包**
```
[root@db01 ~]# wget https://downloads.mysql.com/archives/get/p/23/file/mysql-5.6.46.tar.gz
```
**安装依赖**
```
[root@db01 ~]# yum install -y ncurses-devel libaio-devel gcc gcc-c++ glibc cmake autoconf openssl openssl-devel
```
**解压**
```
[root@db01 ~]# tar xf mysql-5.6.46.tar.gz
```
**创建目录**
```
[root@db01 ~]# mkdir /service
```
**生成cmake**
```
[root@db01 ~]# cd mysql-5.6.46/
[root@db01 ~]# cmake . -DCMAKE_INSTALL_PREFIX=/service/mysql-5.6.46 \
-DMYSQL_DATADIR=/service/mysql-5.6.46/data \
-DMYSQL_UNIX_ADDR=/service/mysql-5.6.46/tmp/mysql.sock \
-DDEFAULT_CHARSET=utf8 \
-DDEFAULT_COLLATION=utf8_general_ci \
-DWITH_EXTRA_CHARSETS=all \
-DWITH_INNOBASE_STORAGE_ENGINE=1 \
-DWITH_FEDERATED_STORAGE_ENGINE=1 \
-DWITH_BLACKHOLE_STORAGE_ENGINE=1 \
-DWITHOUT_EXAMPLE_STORAGE_ENGINE=1 \
-DWITH_ZLIB=bundled \
-DWITH_SSL=system \
-DENABLED_LOCAL_INFILE=1 \
-DWITH_EMBEDDED_SERVER=1 \
-DENABLE_DOWNLOADS=1 \
-DWITH_DEBUG=0
 
#程序存放位置
cmake . -DCMAKE_INSTALL_PREFIX=/service/mysql-5.6.46 \
#数据存放位置
-DMYSQL_DATADIR=/service/mysql-5.6.46/data \
#socket文件存放位置
-DMYSQL_UNIX_ADDR=/service/mysql-5.6.46/tmp/mysql.sock \
#使用utf8字符集
-DDEFAULT_CHARSET=utf8 \
#校验规则
-DDEFAULT_COLLATION=utf8_general_ci \
#使用其他额外的字符集
-DWITH_EXTRA_CHARSETS=all \
#支持的存储引擎
-DWITH_INNOBASE_STORAGE_ENGINE=1 \
-DWITH_FEDERATED_STORAGE_ENGINE=1 \
-DWITH_BLACKHOLE_STORAGE_ENGINE=1 \
#禁用的存储引擎
-DWITHOUT_EXAMPLE_STORAGE_ENGINE=1 \
#启用zlib库支持（zib、gzib相关）
-DWITH_ZLIB=bundled \
#启用SSL库支持（安全套接层）
-DWITH_SSL=bundled \
#启用本地数据导入支持
-DENABLED_LOCAL_INFILE=1 \
#编译嵌入式服务器支持
-DWITH_EMBEDDED_SERVER=1 \
# mysql5.6支持了google的c++mock框架了，允许下载，否则会安装报错。
-DENABLE_DOWNLOADS=1 \
#禁用debug（默认为禁用）
-DWITH_DEBUG=0
#编译
```
**编译make**
```
[root@db01 mysql-5.6.46]# make
```
**安装make install**
```
[root@db01 mysql-5.6.46]# make install
```
**做软连接**
```
[root@db01 ~]# ln -s /service/mysql-5.6.46 /service/mysql
```
**创建数据库用户**
```
[root@db01 ~]# useradd mysql -s /sbin/nologin -M
```
**拷贝配置文件和启动文件**
```
#1.进入配置文件和脚本的目录
[root@db01 ~]# cd /service/mysql/support-files/
 
#2.拷贝配置文件
[root@db01 support-files]# cp my-default.cnf /etc/my.cnf
```
**配置system管理MySOL服务**
```
#1.配置system管理MySQL
[root@db01 ~]# vim /usr/lib/systemd/system/mysql.service
[Unit]
Description=MySQL Server
Documentation=man:mysqld(8)
Documentation=https://dev.mysql.com/doc/refman/en/using-systemd.html
After=network.target
After=syslog.target
[Install]
WantedBy=multi-user.target
[Service]
User=mysql
Group=mysql
ExecStart=/service/mysql/bin/mysqld --defaults-file=/etc/my.cnf
LimitNOFILE = 5000
 
#2.重新加载启动文件列表
[root@db01 ~]# systemctl daemon-reload
```
**初始化数据库**
```
#1.进入初始化目录
[root@db01 support-files]# cd /service/mysql/scripts/
 
#2.执行初始化命令
[root@db01 scripts]# ./mysql_install_db --user=mysql --basedir=/service/mysql --datadir=/service/mysql/data
```
**创建socket文件自录（二进制安装没有）**
```
#先创建tmp目录
[root@db01 ~]# mkdir /service/mysql/tmp
```
**授权数据库目录**
```
[root@db01 ~]# chown -R mysql.mysql /service/mysql
[root@db01 ~]# chown -R mysql.mysql /service/mysql-5.6.46
```
**system管理启动Mysql**
```
[root@db01 ~]# systemctl start mysql
[root@db01 ~]# ps -ef | grep [m]ysql
mysql     23509      1  3 22:36 ?        00:00:01 /usr/local/mysql/bin/mysqld --defaults-file=/etc/my.cnf
[root@db01 ~]# netstat -lntp | grep 3306
tcp6       0      0 :::3306                 :::*                    LISTEN      23509/mysqld

```
**配置环境变量直接使用mysql**
```
[root@db01 ~]# vim /etc/profile.d/mysql.sh 
export PATH=/service/mysql/bin:$PATH
[root@db01 ~]# source /etc/profile
```
**修改root用户密码**
```
[root@db01 ~]# mysql -u root -p         #默认root用户密码为空，有多种方式重置root密码
第一种：
MySQL > SET PASSWORD=PASSWORD('123456');
Query OK, 0 rows affected (0.00 sec)
 
第二种：
MySQL > grant all privileges on *.* to root@'%' identified by 'ryansu';
Query OK, 0 rows affected (0.00 sec)
 
mysql> flush privileges;
Query OK, 0 rows affected (0.00 sec)
 
注意：两种重置密码方式有区别。
```
### 1.2 二进制安装
**下载二进制包**
```
[root@db01 ~]# wget https://downloads.mysql.com/archives/get/p/23/file/mysql-5.6.46-linux-glibc2.12-x86_64.tar.gz
```
**安装依赖**
```
[root@db01 ~]# yum install -y ncurses-devel libaio-devel gcc gcc-c++ glibc cmake autoconf
```
**解压安装包**
```
[root@db01 ~]# tar xf mysql-5.6.46-linux-glibc2.12-x86_64.tar.gz
```
**创建自定义目录**
```
[root@db01 ~]# mkdir /service
```
**移动目录并改名**
```
[root@db01 ~]# mv mysql-5.6.46-linux-glibc2.12-x86_64 /service/mysql-5.6.46
```
**做软连接**
```
[root@db01 ~]# ln -s /service/mysql-5.6.46 /service/mysql
```
**创建数据库用户**
```
[root@db01 ~]# useradd mysql -s /sbin/nologin -M
```
**拷贝配置文件和启动文件**
```
#1.进入配置文件和脚本的目录
[root@db01 ~]# cd /service/mysql/support-files/
 
#2.拷贝配置文件
[root@db01 support-files]# cp my-default.cnf /etc/my.cnf
cp: overwrite ‘/etc/my.cnf’? y
 
#3.拷贝启动脚本
[root@db01 support-files]# cp mysql.server /etc/init.d/mysqld
```
**初始化数据库**
```
#1.进入初始化目录
[root@db01 support-files]# cd /service/mysql/scripts/
 
#2.执行初始化命令
[root@db01 scripts]# ./mysql_install_db --user=mysql --basedir=/service/mysql --datadir=/service/mysql/data
```
**如果是二进制安装到自定义自录下需要修改脚本自录**
本例中就安装到了/service目录下，所以需要修改脚本中的默认路径
```
[root@db01 scripts]# sed -i 's#/usr/local#/service#g' /etc/init.d/mysqld /service/mysql/bin/mysqld_safe
```
**授权数据库目录**
```
[root@db01 ~]# chown -R mysql.mysql /service/mysql
[root@db01 ~]# chown -R mysql.mysql /service/mysql-5.6.46
```
**再次启动**
```
[root@db01 scripts]# /etc/init.d/mysqld start
Starting MySQL.Logging to '/service/mysql/data/db04.err'.
 SUCCESS! 
[root@db01 scripts]#
```
**检查进程和端口**
```
[root@db01 scripts]# ps -ef | grep [m]ysql
root      23083      1  0 20:36 pts/0    00:00:00 /bin/sh /usr/local/mysql/bin/mysqld_safe --datadir=/usr/local/mysql/data --pid-file=/usr/local/mysql/data/db02.pid
mysql     23191  23083  0 20:36 pts/0    00:00:00 /usr/local/mysql/bin/mysqld --basedir=/usr/local/mysql --datadir=/usr/local/mysql/data --plugin-dir=/usr/local/mysql/lib/plugin --user=mysql --log-error=db02.err --pid-file=/usr/local/mysql/data/db02.pid
[root@db01 scripts]# netstat -lntp | grep 3306
tcp6       0      0 :::3306                 :::*                    LISTEN      23191/mysqld        
[root@db01 scripts]# 
```
**配置system管理Mysql服务**
```
#1.配置system管理MySQL
[root@db01 ~]# vim /usr/lib/systemd/system/mysql.service
[Unit]
Description=MySQL Server
Documentation=man:mysqld(8)
Documentation=https://dev.mysql.com/doc/refman/en/using-systemd.html
After=network.target
After=syslog.target
[Install]
WantedBy=multi-user.target
[Service]
User=mysql
Group=mysql
ExecStart=/service/mysql/bin/mysqld --defaults-file=/etc/my.cnf
LimitNOFILE = 5000
 
#2.重新加载启动文件列表
[root@db01 ~]# systemctl daemon-reload
```
**查看Mysql配置文件检索顺序**
```
[root@db01 mysql]# /service/mysql/bin/mysql --help|grep 'my.cnf'
                      order of preference, my.cnf, $MYSQL_TCP_PORT,
/etc/my.cnf /etc/mysql/my.cnf /usr/local/mysql/etc/my.cnf ~/.my.cnf 
```
**配置my.cnf**
```
#1.配置指定数据库安装目录与数据目录
[root@db01 scripts]# vim /etc/my.cnf
[mysqld]
basedir=/service/mysql
datadir=/service/mysql/data
 
#2.启动
[root@db01 scripts]# systemctl start mysql
```
**配置环境变量直接使用mysql**
```
[root@db01 ~]# vim /etc/profile.d/mysql.sh 
export PATH=/service/mysql/bin:$PATH
[root@db01 ~]# source /etc/profile
```
### 1.3 YUM安装
**配置MySQL的yum源**
```
[root@db01 ~]# cat /etc/yum.repos.d/mysql-community.repo
# Enable to use MySQL 5.6
[mysql56-community]
name=MySQL 5.6 Community Server
baseurl=http://repo.mysql.com/yum/mysql-5.6-community/el/7/$basearch/
enabled=1
gpgcheck=0
```
**检查存储库是否正确配置**
```
[root@db01 ~]#  yum repolist enabled | grep mysql
```
**禁用默认的MySQL模块**
```
[root@db01 ~]# sudo yum module disable mysql
```
**安装MySQL**
```
[root@db01 ~]# sudo yum install mysql-community-server
```
**启动MySQL**
```
[root@db01 ~]#  sudo service mysqld start
Starting mysqld (via systemctl):                           [  OK  ]
```
**检查MySQL运行状态**
```
[root@db01 ~]# sudo service mysqld status
```
**保护运行MySQL**
```
[root@db01 ~]# mysql_secure_installation
```
### 1.4 Mysql5.6与5.7安装时的区别
**cmake的时候加入了bostorg**
建议使用二进制的包安装，已经过了cmake阶段，已经把bostorg装好了
```
[root@db02 mysql-5.7.20]# yum install -y gcc gcc-c++ automake autoconf
[root@db02 mysql-5.7.20]# yum install make cmake bison-devel ncurses-devel libaio-devel
[root@db02 mysql-5.7.20]#
wget httpss://dl.bintray.com/boostorg/release/1.65.1/source/boost_1_59_0.tar.gz
#登录boost.org下载也可以
[root@db02 mysql-5.7.20]# tar xf boost_1_59_0.tar.gz -C /usr/local/
[root@db02 mysql-5.7.20]#
cmake . -DCMAKE_INSTALL_PREFIX=/application/mysql-5.7.20 \
-DMYSQL_DATADIR=/application/mysql-5.7.20/data \
-DMYSQL_UNIX_ADDR=/application/mysql-5.7.20/tmp/mysql.sock \
#安装bostorg
-DDOWNLOAD_BOOST=1 \
#安装的目录
-DWITH_BOOST=/usr/local/boost_1_59_0 \
-DDEFAULT_CHARSET=utf8 \
-DDEFAULT_COLLATION=utf8_general_ci \
-DWITH_EXTRA_CHARSETS=all \
-DWITH_INNOBASE_STORAGE_ENGINE=1 \
-DWITH_FEDERATED_STORAGE_ENGINE=1 \
-DWITH_BLACKHOLE_STORAGE_ENGINE=1 \
-DWITHOUT_EXAMPLE_STORAGE_ENGINE=1 \
-DWITH_ZLIB=bundled \
-DWITH_SSL=bundled \
-DENABLED_LOCAL_INFILE=1 \
-DWITH_EMBEDDED_SERVER=1 \
-DENABLE_DOWNLOADS=1 \
-DWITH_DEBUG=0 
```
**初始化时使用的命令不一样了**
```
#5.6初始化命令
/service/mysql/scripts/mysql_install_db --user= --basedir= --datadir=
 
#5.7初始化命令
/usr/local/mysql/bin/mysqld --initialize --user= --basedir= --datadir=
#初始--initialize会生成一个临时的随机密码，他会告诉你位置，你自己去找使用密码登录，而且修改密码也需要一个很复杂的密码，大小写数字特殊符号
 
#想不让他生成密码的话，还可以用另外一个参数--initialize-insecure
```
**mysql5.7初始密码**
```
# yum安装完毕mysql5.7，首次初始启动msyql会生成root的随机密码
# 可以通过下述命令查看
grep "temporary password" /var/log/mysqld.log
 
# 查看到随机密码后，登录，注意密码用单引号引起来，因为随机密码中可能有特殊字符
mysql -uroot -p '随机密码'
 
# 设置密码，密码已经不能再用弱密码了，弱密码会报错
set password=password("Ryan@123");
```
## Windows
### 2.1 安装
```
#1、下载：MySQL Community Server 5.7.16
http://dev.mysql.com/downloads/mysql/
 
#2、解压
如果想要让MySQL安装在指定目录，那么就将解压后的文件夹移动到指定目录，如：C:\mysql-5.7.16-winx64
 
#3、添加环境变量
【右键计算机】--》【属性】--》【高级系统设置】--》【高级】--》【环境变量】--》【在第二个内容框中找到 变量名为Path 的一行，双击】 --> 【将MySQL的bin目录路径追加到变值值中，用 ； 分割】
 
#4、初始化
mysqld --initialize-insecure
 
#5、启动MySQL服务
mysqld # 启动MySQL服务
 
#6、启动MySQL客户端并连接MySQL服务
mysql -u root -p # 连接MySQL服务器
```
### 2.2 将Mysql服务制作成windows系统服务
```
上一步解决了一些问题，但不够彻底，因为在执行【mysqd】启动MySQL服务器时，当前终端会被hang住，那么做一下设置即可解决此问题：
 
注意：--install前，必须用mysql启动命令的绝对路径
# 制作MySQL的Windows服务，在终端执行此命令：
"c:\mysql-5.7.16-winx64\bin\mysqld" --install
 
# 移除MySQL的Windows服务，在终端执行此命令：
"c:\mysql-5.7.16-winx64\bin\mysqld" --remove
 
注册成服务之后，以后再启动和关闭MySQL服务时，仅需执行如下命令：
# 启动MySQL服务
net start mysql
 
# 关闭MySQL服务
net stop mysql
```
