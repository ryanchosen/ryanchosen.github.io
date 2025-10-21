import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,f as i,o as e}from"./app-C-UrHOVr.js";const l={};function p(d,s){return e(),a("div",null,s[0]||(s[0]=[i(`<h1 id="shell速查" tabindex="-1"><a class="header-anchor" href="#shell速查"><span>Shell速查</span></a></h1><h2 id="常用快捷键" tabindex="-1"><a class="header-anchor" href="#常用快捷键"><span>常用快捷键</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>CTRL+A              # 移动到行首，同 &lt;Home&gt;</span></span>
<span class="line"><span>CTRL+B              # 向后移动，同 &lt;Left&gt;</span></span>
<span class="line"><span>CTRL+C              # 结束当前命令</span></span>
<span class="line"><span>CTRL+D              # 删除光标前的字符，同 &lt;Delete&gt; ，或者没有内容时，退出会话</span></span>
<span class="line"><span>CTRL+E              # 移动到行末，同 &lt;End&gt;</span></span>
<span class="line"><span>CTRL+F              # 向前移动，同 &lt;Right&gt;</span></span>
<span class="line"><span>CTRL+G              # 退出当前编辑（比如正在 CTRL+R 搜索历史时）</span></span>
<span class="line"><span>CTRL+H              # 删除光标左边的字符，同 &lt;Backspace&gt;</span></span>
<span class="line"><span>CTRL+K              # 删除光标位置到行末的内容</span></span>
<span class="line"><span>CTRL+L              # 清屏并重新显示</span></span>
<span class="line"><span>CTRL+N              # 移动到命令历史的下一行，同 &lt;Down&gt;</span></span>
<span class="line"><span>CTRL+O              # 类似回车，但是会显示下一行历史</span></span>
<span class="line"><span>CTRL+P              # 移动到命令历史的上一行，同 &lt;Up&gt;</span></span>
<span class="line"><span>CTRL+R              # 历史命令反向搜索，使用 CTRL+G 退出搜索</span></span>
<span class="line"><span>CTRL+S              # 历史命令正向搜索，使用 CTRL+G 退出搜索</span></span>
<span class="line"><span>CTRL+T              # 交换前后两个字符</span></span>
<span class="line"><span>CTRL+U              # 删除字符到行首</span></span>
<span class="line"><span>CTRL+V              # 输入字符字面量，先按 CTRL+V 再按任意键</span></span>
<span class="line"><span>CTRL+W              # 删除光标左边的一个单词</span></span>
<span class="line"><span>CTRL+X              # 列出可能的补全</span></span>
<span class="line"><span>CTRL+Y              # 粘贴前面 CTRL+u/k/w 删除过的内容</span></span>
<span class="line"><span>CTRL+Z              # 暂停前台进程返回 bash，需要时可用 fg 将其切换回前台</span></span>
<span class="line"><span>CTRL+_              # 撤销（undo），有的终端将 CTRL+_ 映射为 CTRL+/ 或 CTRL+7</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ALT+b               # 向后（左边）移动一个单词</span></span>
<span class="line"><span>ALT+d               # 删除光标后（右边）一个单词</span></span>
<span class="line"><span>ALT+f               # 向前（右边）移动一个单词</span></span>
<span class="line"><span>ALT+t               # 交换字符</span></span>
<span class="line"><span>ALT+BACKSPACE       # 删除光标前面一个单词，类似 CTRL+W，但不影响剪贴板</span></span>
<span class="line"><span></span></span>
<span class="line"><span>CTRL+X CTRL+X       # 连续按两次 CTRL+X，光标在当前位置和行首来回跳转 </span></span>
<span class="line"><span>CTRL+X CTRL+E       # 用你指定的编辑器，编辑当前命令</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bash基本操作" tabindex="-1"><a class="header-anchor" href="#bash基本操作"><span>BASH基本操作</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>exit                # 退出当前登录</span></span>
<span class="line"><span>env                 # 显示环境变量</span></span>
<span class="line"><span>echo $SHELL         # 显示你在使用什么 SHELL</span></span>
<span class="line"><span></span></span>
<span class="line"><span>bash                # 使用 bash，用 exit 返回</span></span>
<span class="line"><span>which bash          # 搜索 $PATH，查找哪个程序对应命令 bash</span></span>
<span class="line"><span>whereis bash        # 搜索可执行，头文件和帮助信息的位置，使用系统内建数据库</span></span>
<span class="line"><span>whatis bash         # 查看某个命令的解释，一句话告诉你这是干什么的</span></span>
<span class="line"><span></span></span>
<span class="line"><span>clear               # 清初屏幕内容</span></span>
<span class="line"><span>reset               # 重置终端（当你不小心 cat 了一个二进制，终端状态乱掉时使用）</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="目录操作" tabindex="-1"><a class="header-anchor" href="#目录操作"><span>目录操作</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>cd                  # 返回自己 $HOME 目录</span></span>
<span class="line"><span>cd {dirname}        # 进入目录</span></span>
<span class="line"><span>pwd                 # 显示当前所在目录</span></span>
<span class="line"><span>mkdir {dirname}     # 创建目录</span></span>
<span class="line"><span>mkdir -p {dirname}  # 递归创建目录</span></span>
<span class="line"><span>pushd {dirname}     # 目录压栈并进入新目录</span></span>
<span class="line"><span>popd                # 弹出并进入栈顶的目录</span></span>
<span class="line"><span>dirs -v             # 列出当前目录栈</span></span>
<span class="line"><span>cd -                # 回到之前的目录</span></span>
<span class="line"><span>cd -{N}             # 切换到目录栈中的第 N个目录，比如 cd -2 将切换到第二个</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件操作" tabindex="-1"><a class="header-anchor" href="#文件操作"><span>文件操作</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ls                  # 显示当前目录内容，后面可接目录名：ls {dir} 显示指定目录</span></span>
<span class="line"><span>ls -l               # 列表方式显示目录内容，包括文件日期，大小，权限等信息</span></span>
<span class="line"><span>ls -1               # 列表方式显示目录内容，只显示文件名称，减号后面是数字 1</span></span>
<span class="line"><span>ls -a               # 显示所有文件和目录，包括隐藏文件（.开头的文件/目录名）</span></span>
<span class="line"><span>ln -s {fn} {link}   # 给指定文件创建一个软链接</span></span>
<span class="line"><span>cp {src} {dest}     # 拷贝文件，cp -r dir1 dir2 可以递归拷贝（目录）</span></span>
<span class="line"><span>rm {fn}             # 删除文件，rm -r 递归删除目录，rm -f 强制删除</span></span>
<span class="line"><span>mv {src} {dest}     # 移动文件，如果 dest 是目录，则移动，是文件名则覆盖</span></span>
<span class="line"><span>touch {fn}          # 创建或者更新一下制定文件</span></span>
<span class="line"><span>cat {fn}            # 输出文件原始内容</span></span>
<span class="line"><span>any_cmd &gt; {fn}      # 执行任意命令并将标准输出重定向到指定文件</span></span>
<span class="line"><span>more {fn}           # 逐屏显示某文件内容，空格翻页，q 退出</span></span>
<span class="line"><span>less {fn}           # 更高级点的 more，更多操作，q 退出</span></span>
<span class="line"><span>head {fn}           # 显示文件头部数行，可用 head -3 abc.txt 显示头三行</span></span>
<span class="line"><span>tail {fn}           # 显示文件尾部数行，可用 tail -3 abc.txt 显示尾部三行</span></span>
<span class="line"><span>tail -f {fn}        # 持续显示文件尾部数据，可用于监控日志</span></span>
<span class="line"><span>nano {fn}           # 使用 nano 编辑器编辑文件</span></span>
<span class="line"><span>vim {fn}            # 使用 vim 编辑文件</span></span>
<span class="line"><span>diff {f1} {f2}      # 比较两个文件的内容</span></span>
<span class="line"><span>wc {fn}             # 统计文件有多少行，多少个单词</span></span>
<span class="line"><span>chmod 644 {fn}      # 修改文件权限为 644，可以接 -R 对目录循环改权限</span></span>
<span class="line"><span>chgrp group {fn}    # 修改文件所属的用户组</span></span>
<span class="line"><span>chown user1 {fn}    # 修改文件所有人为 user1, chown user1:group1 fn 可以修改组</span></span>
<span class="line"><span>file {fn}           # 检测文件的类型和编码</span></span>
<span class="line"><span>basename {fn}       # 查看文件的名字（不包括路径）</span></span>
<span class="line"><span>dirname {fn}        # 查看文件的路径（不包括名字）</span></span>
<span class="line"><span>grep {pat} {fn}     # 在文件中查找出现过 pat 的内容</span></span>
<span class="line"><span>grep -r {pat} .     # 在当前目录下递归查找所有出现过 pat 的文件内容</span></span>
<span class="line"><span>stat {fn}           # 显示文件的详细信息</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="用户管理" tabindex="-1"><a class="header-anchor" href="#用户管理"><span>用户管理</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>whoami              # 显示我的用户名</span></span>
<span class="line"><span>who                 # 显示已登录用户信息，w / who / users 内容略有不同</span></span>
<span class="line"><span>w                   # 显示已登录用户信息，w / who / users 内容略有不同</span></span>
<span class="line"><span>users               # 显示已登录用户信息，w / who / users 内容略有不同</span></span>
<span class="line"><span>passwd              # 修改密码，passwd {user} 可以用于 root 修改别人密码</span></span>
<span class="line"><span>finger {user}       # 显示某用户信息，包括 id, 名字, 登录状态等</span></span>
<span class="line"><span>adduser {user}      # 添加用户</span></span>
<span class="line"><span>deluser {user}      # 删除用户</span></span>
<span class="line"><span>w                   # 查看谁在线</span></span>
<span class="line"><span>su                  # 切换到 root 用户</span></span>
<span class="line"><span>su -                # 切换到 root 用户并登录（执行登录脚本）</span></span>
<span class="line"><span>su {user}           # 切换到某用户</span></span>
<span class="line"><span>su -{user}          # 切换到某用户并登录（执行登录脚本）</span></span>
<span class="line"><span>id {user}           # 查看用户的 uid，gid 以及所属其他用户组</span></span>
<span class="line"><span>id -u {user}        # 打印用户 uid</span></span>
<span class="line"><span>id -g {user}        # 打印用户 gid</span></span>
<span class="line"><span>write {user}        # 向某用户发送一句消息</span></span>
<span class="line"><span>last                # 显示最近用户登录列表</span></span>
<span class="line"><span>last {user}         # 显示登录记录</span></span>
<span class="line"><span>lastb               # 显示失败登录记录</span></span>
<span class="line"><span>lastlog             # 显示所有用户的最近登录记录</span></span>
<span class="line"><span>sudo {command}      # 以 root 权限执行某命令</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="进程管理" tabindex="-1"><a class="header-anchor" href="#进程管理"><span>进程管理</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ps                        # 查看当前会话进程</span></span>
<span class="line"><span>ps ax                     # 查看所有进程，类似 ps -e</span></span>
<span class="line"><span>ps aux                    # 查看所有进程详细信息，类似 ps -ef</span></span>
<span class="line"><span>ps auxww                  # 查看所有进程，并且显示进程的完整启动命令</span></span>
<span class="line"><span>ps -u {user}              # 查看某用户进程</span></span>
<span class="line"><span>ps axjf                   # 列出进程树</span></span>
<span class="line"><span>ps xjf -u {user}          # 列出某用户的进程树</span></span>
<span class="line"><span>ps -eo pid,user,command   # 按用户指定的格式查看进程</span></span>
<span class="line"><span>ps aux | grep httpd       # 查看名为 httpd 的所有进程</span></span>
<span class="line"><span>ps --ppid {pid}           # 查看父进程为 pid 的所有进程</span></span>
<span class="line"><span>pstree                    # 树形列出所有进程，pstree 默认一般不带，需安装</span></span>
<span class="line"><span>pstree {user}             # 进程树列出某用户的进程</span></span>
<span class="line"><span>pstree -u                 # 树形列出所有进程以及所属用户</span></span>
<span class="line"><span>pgrep {procname}          # 搜索名字匹配的进程的 pid，比如 pgrep apache2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>kill {pid}                # 结束进程</span></span>
<span class="line"><span>kill -9 {pid}             # 强制结束进程，9/SIGKILL 是强制不可捕获结束信号</span></span>
<span class="line"><span>kill -KILL {pid}          # 强制执行进程，kill -9 的另外一种写法</span></span>
<span class="line"><span>kill -l                   # 查看所有信号</span></span>
<span class="line"><span>kill -l TERM              # 查看 TERM 信号的编号</span></span>
<span class="line"><span>killall {procname}        # 按名称结束所有进程</span></span>
<span class="line"><span>pkill {procname}          # 按名称结束进程，除名称外还可以有其他参数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>top                       # 查看最活跃的进程</span></span>
<span class="line"><span>top -u {user}             # 查看某用户最活跃的进程</span></span>
<span class="line"><span></span></span>
<span class="line"><span>any_command &amp;             # 在后台运行某命令，也可用 CTRL+Z 将当前进程挂到后台</span></span>
<span class="line"><span>jobs                      # 查看所有后台进程（jobs）</span></span>
<span class="line"><span>bg                        # 查看后台进程，并切换过去</span></span>
<span class="line"><span>fg                        # 切换后台进程到前台</span></span>
<span class="line"><span>fg {job}                  # 切换特定后台进程到前台</span></span>
<span class="line"><span></span></span>
<span class="line"><span>trap cmd sig1 sig2        # 在脚本中设置信号处理命令</span></span>
<span class="line"><span>trap &quot;&quot; sig1 sig2         # 在脚本中屏蔽某信号</span></span>
<span class="line"><span>trap - sig1 sig2          # 恢复默认信号处理行为</span></span>
<span class="line"><span></span></span>
<span class="line"><span>nohup {command}           # 长期运行某程序，在你退出登录都保持它运行</span></span>
<span class="line"><span>nohup {command} &amp;         # 在后台长期运行某程序</span></span>
<span class="line"><span>disown {PID|JID}          # 将进程从后台任务列表（jobs）移除</span></span>
<span class="line"><span></span></span>
<span class="line"><span>wait                      # 等待所有后台进程任务结束</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用命令-ssh-系统信息-网络" tabindex="-1"><a class="header-anchor" href="#常用命令-ssh-系统信息-网络"><span>常用命令：SSH / 系统信息 / 网络</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ssh user@host             # 以用户 user 登录到远程主机 host</span></span>
<span class="line"><span>ssh -p {port} user@host   # 指定端口登录主机</span></span>
<span class="line"><span>ssh-copy-id user@host     # 拷贝你的 ssh key 到远程主机，避免重复输入密码</span></span>
<span class="line"><span>scp {fn} user@host:path   # 拷贝文件到远程主机</span></span>
<span class="line"><span>scp user@host:path dest   # 从远程主机拷贝文件回来</span></span>
<span class="line"><span>scp -P {port} ...         # 指定端口远程拷贝文件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>uname -a                  # 查看内核版本等信息</span></span>
<span class="line"><span>man {help}                # 查看帮助</span></span>
<span class="line"><span>man -k {keyword}          # 查看哪些帮助文档里包含了该关键字</span></span>
<span class="line"><span>info {help}               # 查看 info pages，比 man 更强的帮助系统</span></span>
<span class="line"><span>uptime                    # 查看系统启动时间</span></span>
<span class="line"><span>date                      # 显示日期</span></span>
<span class="line"><span>cal                       # 显示日历</span></span>
<span class="line"><span>vmstat                    # 显示内存和 CPU 使用情况</span></span>
<span class="line"><span>vmstat 10                 # 每 10 秒打印一行内存和 CPU情况，CTRL+C 退出</span></span>
<span class="line"><span>free                      # 显示内存和交换区使用情况</span></span>
<span class="line"><span>df                        # 显示磁盘使用情况</span></span>
<span class="line"><span>du                        # 显示当前目录占用，du . --max-depth=2 可以指定深度</span></span>
<span class="line"><span>du -h                     # 显示当前目录占用，-h 以方便阅读的格式输出 (K/M/G)</span></span>
<span class="line"><span>uname                     # 显示系统版本号</span></span>
<span class="line"><span>hostname                  # 显示主机名称</span></span>
<span class="line"><span>showkey -a                # 查看终端发送的按键编码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ping {host}               # ping 远程主机并显示结果，CTRL+C 退出</span></span>
<span class="line"><span>ping -c N {host}          # ping 远程主机 N 次</span></span>
<span class="line"><span>traceroute {host}         # 侦测路由连通情况</span></span>
<span class="line"><span>mtr {host}                # 高级版本 traceroute</span></span>
<span class="line"><span>host {domain}             # DNS 查询，{domain} 前面可加 -a 查看详细信息</span></span>
<span class="line"><span>whois {domain}            # 取得域名 whois 信息</span></span>
<span class="line"><span>dig {domain}              # 取得域名 dns 信息</span></span>
<span class="line"><span>route -n                  # 查看路由表</span></span>
<span class="line"><span>netstat -a                # 列出所有端口</span></span>
<span class="line"><span>netstat -an               # 查看所有连接信息，不解析域名</span></span>
<span class="line"><span>netstat -anp              # 查看所有连接信息，包含进程信息（需要 sudo）</span></span>
<span class="line"><span>netstat -l                # 查看所有监听的端口</span></span>
<span class="line"><span>netstat -t                # 查看所有 TCP 链接</span></span>
<span class="line"><span>netstat -lntu             # 显示所有正在监听的 TCP 和 UDP 信息</span></span>
<span class="line"><span>netstat -lntup            # 显示所有正在监听的 socket 及进程信息</span></span>
<span class="line"><span>netstat -i                # 显示网卡信息</span></span>
<span class="line"><span>netstat -rn               # 显示当前系统路由表，同 route -n</span></span>
<span class="line"><span>ss -an                    # 比 netstat -an 更快速更详细</span></span>
<span class="line"><span>ss -s                     # 统计 TCP 的 established, wait 等</span></span>
<span class="line"><span></span></span>
<span class="line"><span>wget {url}                # 下载文件，可加 --no-check-certificate 忽略 ssl 验证</span></span>
<span class="line"><span>wget -qO- {url}           # 下载文件并输出到标准输出（不保存）</span></span>
<span class="line"><span>curl -sL {url}            # 同 wget -qO- {url} 没有 wget 的时候使用</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sz {file}                 # 发送文件到终端，zmodem 协议</span></span>
<span class="line"><span>rz                        # 接收终端发送过来的文件</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="变量操作" tabindex="-1"><a class="header-anchor" href="#变量操作"><span>变量操作</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>varname=value             # 定义变量</span></span>
<span class="line"><span>varname=value command     # 定义子进程变量并执行子进程</span></span>
<span class="line"><span>echo &quot;$varname&quot;           # 查看变量内容</span></span>
<span class="line"><span>echo $$                   # 查看当前 shell 的进程号</span></span>
<span class="line"><span>echo $!                   # 查看最近调用的后台任务进程号</span></span>
<span class="line"><span>echo $?                   # 查看最近一条命令的返回码</span></span>
<span class="line"><span>export VARNAME=value      # 设置环境变量（将会影响到子进程）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>array[0]=valA             # 定义数组</span></span>
<span class="line"><span>array[1]=valB</span></span>
<span class="line"><span>array[2]=valC</span></span>
<span class="line"><span>array=([0]=valA [1]=valB [2]=valC)   # 另一种方式</span></span>
<span class="line"><span>array=(valA valB valC)               # 另一种方式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\${array[i]}               # 取得数组中的元素</span></span>
<span class="line"><span>\${#array[@]}              # 取得数组的长度</span></span>
<span class="line"><span>\${#array[i]}              # 取得数组中某个变量的长度</span></span>
<span class="line"><span></span></span>
<span class="line"><span>declare -a                # 查看所有数组</span></span>
<span class="line"><span>declare -f                # 查看所有函数</span></span>
<span class="line"><span>declare -F                # 查看所有函数，仅显示函数名</span></span>
<span class="line"><span>declare -i                # 查看所有整数</span></span>
<span class="line"><span>declare -r                # 查看所有只读变量</span></span>
<span class="line"><span>declare -x                # 查看所有被导出成环境变量的东西</span></span>
<span class="line"><span>declare -p varname        # 输出变量是怎么定义的（类型+值）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\${varname:-word}          # 如果变量不为空则返回变量，否则返回 word</span></span>
<span class="line"><span>\${varname:=word}          # 如果变量不为空则返回变量，否则赋值成 word 并返回</span></span>
<span class="line"><span>\${varname:?message}       # 如果变量不为空则返回变量，否则打印错误信息并退出</span></span>
<span class="line"><span>\${varname:+word}          # 如果变量不为空则返回 word，否则返回 null</span></span>
<span class="line"><span>\${varname:offset:len}     # 取得字符串的子字符串</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\${variable#pattern}       # 如果变量头部匹配 pattern，则删除最小匹配部分返回剩下的</span></span>
<span class="line"><span>\${variable##pattern}      # 如果变量头部匹配 pattern，则删除最大匹配部分返回剩下的</span></span>
<span class="line"><span>\${variable%pattern}       # 如果变量尾部匹配 pattern，则删除最小匹配部分返回剩下的</span></span>
<span class="line"><span>\${variable%%pattern}      # 如果变量尾部匹配 pattern，则删除最大匹配部分返回剩下的</span></span>
<span class="line"><span>\${variable/pattern/str}   # 将变量中第一个匹配 pattern 的替换成 str，并返回</span></span>
<span class="line"><span>\${variable//pattern/str}  # 将变量中所有匹配 pattern 的地方替换成 str 并返回</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\${#varname}               # 返回字符串长度</span></span>
<span class="line"><span></span></span>
<span class="line"><span>*(patternlist)            # 零次或者多次匹配</span></span>
<span class="line"><span>+(patternlist)            # 一次或者多次匹配</span></span>
<span class="line"><span>?(patternlist)            # 零次或者一次匹配</span></span>
<span class="line"><span>@(patternlist)            # 单词匹配</span></span>
<span class="line"><span>!(patternlist)            # 不匹配</span></span>
<span class="line"><span></span></span>
<span class="line"><span>array=($text)             # 按空格分隔 text 成数组，并赋值给变量</span></span>
<span class="line"><span>IFS=&quot;/&quot; array=($text)     # 按斜杆分隔字符串 text 成数组，并赋值给变量</span></span>
<span class="line"><span>text=&quot;\${array[*]}&quot;        # 用空格链接数组并赋值给变量</span></span>
<span class="line"><span>text=$(IFS=/; echo &quot;\${array[*]}&quot;)  # 用斜杠链接数组并赋值给变量</span></span>
<span class="line"><span></span></span>
<span class="line"><span>A=( foo bar &quot;a  b c&quot; 42 ) # 数组定义</span></span>
<span class="line"><span>B=(&quot;\${A[@]:1:2}&quot;)         # 数组切片：B=( bar &quot;a  b c&quot; )</span></span>
<span class="line"><span>C=(&quot;\${A[@]:1}&quot;)           # 数组切片：C=( bar &quot;a  b c&quot; 42 )</span></span>
<span class="line"><span>echo &quot;\${B[@]}&quot;            # bar a  b c</span></span>
<span class="line"><span>echo &quot;\${B[1]}&quot;            # a  b c</span></span>
<span class="line"><span>echo &quot;\${C[@]}&quot;            # bar a  b c 42</span></span>
<span class="line"><span>echo &quot;\${C[@]: -2:2}&quot;      # a  b c 42  减号前的空格是必须的</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$(UNIX command)           # 在 subshell 中运行命令 (不会改变当前 shell 的环境)，并将标准输出内容捕获并返回</span></span>
<span class="line"><span>varname=$(id -u user)     # 将用户名为 user 的 uid 赋值给 varname 变量</span></span>
<span class="line"><span></span></span>
<span class="line"><span>num=$(expr 1 + 2)         # 兼容 posix sh 的计算，使用 expr 命令计算结果</span></span>
<span class="line"><span>num=$(expr $num + 1)      # 数字自增</span></span>
<span class="line"><span>expr 2 \\* \\( 2 + 3 \\)     # 兼容 posix sh 的复杂计算，输出 10</span></span>
<span class="line"><span></span></span>
<span class="line"><span>num=$[1 + 2]              # 计算 1+2 赋值给 num，使用 bash 独有的 $[..] 计算</span></span>
<span class="line"><span>num=$((1 + 2))            # 同上, 但该语法由 POSIX shell 指定</span></span>
<span class="line"><span>num=$(($num + 1))         # 变量递增</span></span>
<span class="line"><span>num=$((num + 1))          # 变量递增，双括号内的 $ 可以省略</span></span>
<span class="line"><span>num=$((1 + (2 + 3) * 2))  # 复杂计算</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事件指示符-仅在交互式-shell-生效" tabindex="-1"><a class="header-anchor" href="#事件指示符-仅在交互式-shell-生效"><span>事件指示符 (仅在交互式 shell 生效)</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>!!                  # 上一条命令</span></span>
<span class="line"><span>!^                  # 上一条命令的第一个单词</span></span>
<span class="line"><span>!:n                 # 上一条命令的第n个单词</span></span>
<span class="line"><span>!:n-$               # 上一条命令的第n个单词到最后一个单词</span></span>
<span class="line"><span>!$                  # 上一条命令的最后一个单词</span></span>
<span class="line"><span>!-n:$               # 上n条命令的最后一个单词</span></span>
<span class="line"><span>!string             # 最近一条包含string的命令</span></span>
<span class="line"><span>!^string1^string2   # 最近一条包含string1的命令, 快速替换string1为string2</span></span>
<span class="line"><span>!#                  # 本条命令之前所有的输入内容</span></span>
<span class="line"><span>!#:n                # 本条命令之前的第n个单词, 快速备份cp /etc/passwd !#:1.bak</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数"><span>函数</span></a></h2><h3 id="定义一个新函数" tabindex="-1"><a class="header-anchor" href="#定义一个新函数"><span>定义一个新函数</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>function myfunc() {</span></span>
<span class="line"><span>    # $1 代表第一个参数，$N 代表第 N 个参数</span></span>
<span class="line"><span>    # $# 代表参数个数</span></span>
<span class="line"><span>    # $0 代表被调用者自身的名字</span></span>
<span class="line"><span>    # $@ 代表所有参数，类型是个数组，想传递所有参数给其他命令用 cmd &quot;$@&quot; </span></span>
<span class="line"><span>    # $* 空格链接起来的所有参数，类型是字符串</span></span>
<span class="line"><span>    {shell commands ...}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>myfunc                    # 调用函数 myfunc </span></span>
<span class="line"><span>myfunc arg1 arg2 arg3     # 带参数的函数调用</span></span>
<span class="line"><span>myfunc &quot;$@&quot;               # 将所有参数传递给函数</span></span>
<span class="line"><span>myfunc &quot;\${array[@]}&quot;      # 将一个数组当作多个参数传递给函数</span></span>
<span class="line"><span>shift                     # 参数左移</span></span>
<span class="line"><span></span></span>
<span class="line"><span>unset -f myfunc           # 删除函数</span></span>
<span class="line"><span>declare -f                # 列出函数定义</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分支控制-if-和经典-test-兼容-posix-sh-的条件判断语句" tabindex="-1"><a class="header-anchor" href="#分支控制-if-和经典-test-兼容-posix-sh-的条件判断语句"><span>分支控制：if 和经典 test，兼容 posix sh 的条件判断语句</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>test {expression}         # 判断条件为真的话 test 程序返回0 否则非零</span></span>
<span class="line"><span>[ expression ]            # 判断条件为真的话返回0 否则非零</span></span>
<span class="line"><span></span></span>
<span class="line"><span>test &quot;abc&quot; = &quot;def&quot;        # 查看返回值 echo $? 显示 1，因为条件为假</span></span>
<span class="line"><span>test &quot;abc&quot; != &quot;def&quot;       # 查看返回值 echo $? 显示 0，因为条件为真</span></span>
<span class="line"><span></span></span>
<span class="line"><span>test -a /tmp; echo $?     # 调用 test 判断 /tmp 是否存在，并打印 test 的返回值</span></span>
<span class="line"><span>[ -a /tmp ]; echo $?      # 和上面完全等价，/tmp 肯定是存在的，所以输出是 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>test cond &amp;&amp; cmd1         # 判断条件为真时执行 cmd1</span></span>
<span class="line"><span>[ cond ] &amp;&amp; cmd1          # 和上面完全等价</span></span>
<span class="line"><span>[ cond ] &amp;&amp; cmd1 || cmd2  # 条件为真执行 cmd1 否则执行 cmd2</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 判断 /etc/passwd 文件是否存在</span></span>
<span class="line"><span># 经典的 if 语句就是判断后面的命令返回值为0的话，认为条件为真，否则为假</span></span>
<span class="line"><span>if test -e /etc/passwd; then</span></span>
<span class="line"><span>    echo &quot;alright it exists ... &quot;</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>    echo &quot;it doesn&#39;t exist ... &quot;</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 和上面完全等价，[ 是个和 test 一样的可执行程序，但最后一个参数必须为 ]</span></span>
<span class="line"><span># 这个名字为 &quot;[&quot; 的可执行程序一般就在 /bin 或 /usr/bin 下面，比 test 优雅些</span></span>
<span class="line"><span>if [ -e /etc/passwd ]; then   </span></span>
<span class="line"><span>    echo &quot;alright it exists ... &quot;</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>    echo &quot;it doesn&#39;t exist ... &quot;</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 和上面两个完全等价，其实到 bash 时代 [ 已经是内部命令了，用 enable 可以看到</span></span>
<span class="line"><span>[ -e /etc/passwd ] &amp;&amp; echo &quot;alright it exists&quot; || echo &quot;it doesn&#39;t exist&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 判断变量的值</span></span>
<span class="line"><span>if [ &quot;$varname&quot; = &quot;foo&quot; ]; then</span></span>
<span class="line"><span>    echo &quot;this is foo&quot;</span></span>
<span class="line"><span>elif [ &quot;$varname&quot; = &quot;bar&quot; ]; then</span></span>
<span class="line"><span>    echo &quot;this is bar&quot;</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>    echo &quot;neither&quot;</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 复杂条件判断，注意 || 和 &amp;&amp; 是完全兼容 POSIX 的推荐写法</span></span>
<span class="line"><span>if [ $x -gt 10 ] &amp;&amp; [ $x -lt 20 ]; then</span></span>
<span class="line"><span>    echo &quot;yes, between 10 and 20&quot;</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 可以用 &amp;&amp; 命令连接符来做和上面完全等价的事情</span></span>
<span class="line"><span>[ $x -gt 10 ] &amp;&amp; [ $x -lt 20 ] &amp;&amp; echo &quot;yes, between 10 and 20&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 小括号和 -a -o 是 POSIX XSI 扩展写法，小括号是字面量，输入时前面要加反斜杆</span></span>
<span class="line"><span>if [ \\( $x -gt 10 \\) -a \\( $x -lt 20 \\) ]; then</span></span>
<span class="line"><span>    echo &quot;yes, between 10 and 20&quot;</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 同样可以用 &amp;&amp; 命令连接符来做和上面完全等价的事情</span></span>
<span class="line"><span>[ \\( $x -gt 10 \\) -a \\( $x -lt 20 \\) ] &amp;&amp; echo &quot;yes, between 10 and 20&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># 判断程序存在的话就执行</span></span>
<span class="line"><span>[ -x /bin/ls ] &amp;&amp; /bin/ls -l</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 如果不考虑兼容 posix sh 和 dash 这些的话，可用 bash 独有的 ((..)) 和 [[..]]:</span></span>
<span class="line"><span>https://www.ibm.com/developerworks/library/l-bash-test/index.html</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="流程控制-while-for-case-until" tabindex="-1"><a class="header-anchor" href="#流程控制-while-for-case-until"><span>流程控制：while / for / case / until</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># while 循环</span></span>
<span class="line"><span>while condition; do</span></span>
<span class="line"><span>    statements</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span>i=1</span></span>
<span class="line"><span>while [ $i -le 10 ]; do</span></span>
<span class="line"><span>    echo $i; </span></span>
<span class="line"><span>    i=$(expr $i + 1)</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span># for 循环：上面的 while 语句等价</span></span>
<span class="line"><span>for i in {1..10}; do</span></span>
<span class="line"><span>    echo $i</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for name [in list]; do</span></span>
<span class="line"><span>    statements</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span># for 列举某目录下面的所有文件</span></span>
<span class="line"><span>for f in /home/*; do </span></span>
<span class="line"><span>    echo $f</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span># bash 独有的 (( .. )) 语句，更接近 C 语言，但是不兼容 posix sh</span></span>
<span class="line"><span>for (( initialisation ; ending condition ; update )); do</span></span>
<span class="line"><span>    statements</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 和上面的写法等价</span></span>
<span class="line"><span>for ((i = 0; i &lt; 10; i++)); do echo $i; done</span></span>
<span class="line"><span></span></span>
<span class="line"><span># case 判断</span></span>
<span class="line"><span>case expression in </span></span>
<span class="line"><span>    pattern1a | pattern1b | ... )</span></span>
<span class="line"><span>        statements ;;</span></span>
<span class="line"><span>    pattern2 )</span></span>
<span class="line"><span>        statements ;;</span></span>
<span class="line"><span>    * )</span></span>
<span class="line"><span>        otherwise ;;</span></span>
<span class="line"><span>esac</span></span>
<span class="line"><span></span></span>
<span class="line"><span># until 语句</span></span>
<span class="line"><span>until condition; do</span></span>
<span class="line"><span>    statements</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span># select 语句</span></span>
<span class="line"><span>select name [in list]; do</span></span>
<span class="line"><span>  statements that can use $name</span></span>
<span class="line"><span>done</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="命令处理" tabindex="-1"><a class="header-anchor" href="#命令处理"><span>命令处理</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>command ls                         # 忽略 alias 直接执行程序或者内建命令 ls</span></span>
<span class="line"><span>builtin cd                         # 忽略 alias 直接运行内建的 cd 命令</span></span>
<span class="line"><span>enable                             # 列出所有 bash 内置命令，或禁止某命令</span></span>
<span class="line"><span>help {builtin_command}             # 查看内置命令的帮助（仅限 bash 内置命令）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>eval $script                       # 对 script 变量中的字符串求值（执行）</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="输出-输入-重定向" tabindex="-1"><a class="header-anchor" href="#输出-输入-重定向"><span>输出/输入 重定向</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>cmd1 | cmd2                        # 管道，cmd1 的标准输出接到 cmd2 的标准输入</span></span>
<span class="line"><span>&lt; file                             # 将文件内容重定向为命令的标准输入</span></span>
<span class="line"><span>&gt; file                             # 将命令的标准输出重定向到文件，会覆盖文件</span></span>
<span class="line"><span>&gt;&gt; file                            # 将命令的标准输出重定向到文件，追加不覆盖</span></span>
<span class="line"><span>&gt;| file                            # 强制输出到文件，即便设置过：set -o noclobber</span></span>
<span class="line"><span>n&gt;| file                           # 强制将文件描述符 n的输出重定向到文件</span></span>
<span class="line"><span>&lt;&gt; file                            # 同时使用该文件作为标准输入和标准输出</span></span>
<span class="line"><span>n&lt;&gt; file                           # 同时使用文件作为文件描述符 n 的输出和输入</span></span>
<span class="line"><span>n&gt; file                            # 重定向文件描述符 n 的输出到文件</span></span>
<span class="line"><span>n&lt; file                            # 重定向文件描述符 n 的输入为文件内容</span></span>
<span class="line"><span>n&gt;&amp;                                # 将标准输出 dup/合并 到文件描述符 n</span></span>
<span class="line"><span>n&lt;&amp;                                # 将标准输入 dump/合并 定向为描述符 n</span></span>
<span class="line"><span>n&gt;&amp;m                               # 文件描述符 n 被作为描述符 m 的副本，输出用</span></span>
<span class="line"><span>n&lt;&amp;m                               # 文件描述符 n 被作为描述符 m 的副本，输入用</span></span>
<span class="line"><span>&amp;&gt;file                             # 将标准输出和标准错误重定向到文件</span></span>
<span class="line"><span>&lt;&amp;-                                # 关闭标准输入</span></span>
<span class="line"><span>&gt;&amp;-                                # 关闭标准输出</span></span>
<span class="line"><span>n&gt;&amp;-                               # 关闭作为输出的文件描述符 n</span></span>
<span class="line"><span>n&lt;&amp;-                               # 关闭作为输入的文件描述符 n</span></span>
<span class="line"><span>diff &lt;(cmd1) &lt;(cmd2)               # 比较两个命令的输出</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文本处理" tabindex="-1"><a class="header-anchor" href="#文本处理"><span>文本处理</span></a></h2><h3 id="cut" tabindex="-1"><a class="header-anchor" href="#cut"><span>cut</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>cut -c 1-16                        # 截取每行头16个字符</span></span>
<span class="line"><span>cut -c 1-16 file                   # 截取指定文件中每行头 16个字符</span></span>
<span class="line"><span>cut -c3-                           # 截取每行从第三个字符开始到行末的内容</span></span>
<span class="line"><span>cut -d&#39;:&#39; -f5                      # 截取用冒号分隔的第五列内容</span></span>
<span class="line"><span>cut -d&#39;;&#39; -f2,10                   # 截取用分号分隔的第二和第十列内容</span></span>
<span class="line"><span>cut -d&#39; &#39; -f3-7                    # 截取空格分隔的三到七列</span></span>
<span class="line"><span>echo &quot;hello&quot; | cut -c1-3           # 显示 hel</span></span>
<span class="line"><span>echo &quot;hello sir&quot; | cut -d&#39; &#39; -f2   # 显示 sir</span></span>
<span class="line"><span>ps | tr -s &quot; &quot; | cut -d &quot; &quot; -f 2,3,4  # cut 搭配 tr 压缩字符</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="awk-sed" tabindex="-1"><a class="header-anchor" href="#awk-sed"><span>awk / sed</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>awk &#39;{print $5}&#39; file              # 打印文件中以空格分隔的第五列</span></span>
<span class="line"><span>awk -F &#39;,&#39; &#39;{print $5}&#39; file       # 打印文件中以逗号分隔的第五列</span></span>
<span class="line"><span>awk &#39;/str/ {print $2}&#39; file        # 打印文件中包含 str 的所有行的第二列</span></span>
<span class="line"><span>awk -F &#39;,&#39; &#39;{print $NF}&#39; file      # 打印逗号分隔的文件中的每行最后一列 </span></span>
<span class="line"><span>awk &#39;{s+=$1} END {print s}&#39; file   # 计算所有第一列的合</span></span>
<span class="line"><span>awk &#39;NR%3==1&#39; file                 # 从第一行开始，每隔三行打印一行</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sed &#39;s/find/replace/&#39; file         # 替换文件中首次出现的字符串并输出结果 </span></span>
<span class="line"><span>sed &#39;10s/find/replace/&#39; file       # 替换文件第 10 行内容</span></span>
<span class="line"><span>sed &#39;10,20s/find/replace/&#39; file    # 替换文件中 10-20 行内容</span></span>
<span class="line"><span>sed -r &#39;s/regex/replace/g&#39; file    # 替换文件中所有出现的字符串</span></span>
<span class="line"><span>sed -i &#39;s/find/replace/g&#39; file     # 替换文件中所有出现的字符并且覆盖文件</span></span>
<span class="line"><span>sed -i &#39;/find/i\\newline&#39; file      # 在文件的匹配文本前插入行</span></span>
<span class="line"><span>sed -i &#39;/find/a\\newline&#39; file      # 在文件的匹配文本后插入行</span></span>
<span class="line"><span>sed &#39;/line/s/find/replace/&#39; file   # 先搜索行特征再执行替换</span></span>
<span class="line"><span>sed -e &#39;s/f/r/&#39; -e &#39;s/f/r&#39; file    # 执行多次替换</span></span>
<span class="line"><span>sed &#39;s#find#replace#&#39; file         # 使用 # 替换 / 来避免 pattern 中有斜杆</span></span>
<span class="line"><span>sed -i -r &#39;s/^\\s+//g&#39; file         # 删除文件每行头部空格</span></span>
<span class="line"><span>sed &#39;/^$/d&#39; file                   # 删除文件空行并打印</span></span>
<span class="line"><span>sed -i &#39;s/\\s\\+$//&#39; file            # 删除文件每行末尾多余空格</span></span>
<span class="line"><span>sed -n &#39;2p&#39; file                   # 打印文件第二行</span></span>
<span class="line"><span>sed -n &#39;2,5p&#39; file                 # 打印文件第二到第五行</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sort" tabindex="-1"><a class="header-anchor" href="#sort"><span>sort</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>sort file                          # 排序文件</span></span>
<span class="line"><span>sort -r file                       # 反向排序（降序）</span></span>
<span class="line"><span>sort -n file                       # 使用数字而不是字符串进行比较</span></span>
<span class="line"><span>sort -t: -k 3n /etc/passwd         # 按 passwd 文件的第三列进行排序</span></span>
<span class="line"><span>sort -u file                       # 去重排序</span></span>
<span class="line"><span>sort -h file                       # 支持 K/M/G 等量级符号，可与 du 结合使用</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="键盘绑定" tabindex="-1"><a class="header-anchor" href="#键盘绑定"><span>键盘绑定</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>bind &#39;&quot;\\eh&quot;:&quot;\\C-b&quot;&#39;                # 绑定 ALT+h 为光标左移，同 CTRL+b / &lt;Left&gt;</span></span>
<span class="line"><span>bind &#39;&quot;\\el&quot;:&quot;\\C-f&quot;&#39;                # 绑定 ALT+l 为光标右移，同 CTRL+f / &lt;Right&gt;</span></span>
<span class="line"><span>bind &#39;&quot;\\ej&quot;:&quot;\\C-n&quot;&#39;                # 绑定 ALT+j 为下条历史，同 CTRL+n / &lt;Down&gt;</span></span>
<span class="line"><span>bind &#39;&quot;\\ek&quot;:&quot;\\C-p&quot;&#39;                # 绑定 ALT+k 为上条历史，同 CTRL+p / &lt;Up&gt;</span></span>
<span class="line"><span>bind &#39;&quot;\\eH&quot;:&quot;\\eb&quot;&#39;                 # 绑定 ALT+H 为光标左移一个单词，同 ALT-b </span></span>
<span class="line"><span>bind &#39;&quot;\\eL&quot;:&quot;\\ef&quot;&#39;                 # 绑定 ALT+L 为光标右移一个单词，同 ALT-f </span></span>
<span class="line"><span>bind &#39;&quot;\\eJ&quot;:&quot;\\C-a&quot;&#39;                # 绑定 ALT+J 为移动到行首，同 CTRL+a / &lt;Home&gt;</span></span>
<span class="line"><span>bind &#39;&quot;\\eK&quot;:&quot;\\C-e&quot;&#39;                # 绑定 ALT+K 为移动到行末，同 CTRL+e / &lt;End&gt;</span></span>
<span class="line"><span>bind &#39;&quot;\\e;&quot;:&quot;ls -l\\n&quot;&#39;             # 绑定 ALT+; 为执行 ls -l 命令</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="网络管理-ip-ifconfig-nmap" tabindex="-1"><a class="header-anchor" href="#网络管理-ip-ifconfig-nmap"><span>网络管理：ip / ifconfig / nmap ...</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ip a                               # 显示所有网络地址，同 ip address</span></span>
<span class="line"><span>ip a show eth1                     # 显示网卡 IP 地址</span></span>
<span class="line"><span>ip a add 172.16.1.23/24 dev eth1   # 添加网卡 IP 地址</span></span>
<span class="line"><span>ip a del 172.16.1.23/24 dev eth1   # 删除网卡 IP 地址</span></span>
<span class="line"><span>ip link show dev eth0              # 显示网卡设备属性</span></span>
<span class="line"><span>ip link set eth1 up                # 激活网卡</span></span>
<span class="line"><span>ip link set eth1 down              # 关闭网卡</span></span>
<span class="line"><span>ip link set eth1 address {mac}     # 修改 MAC 地址</span></span>
<span class="line"><span>ip neighbour                       # 查看 ARP 缓存</span></span>
<span class="line"><span>ip route                           # 查看路由表</span></span>
<span class="line"><span>ip route add 10.1.0.0/24 via 10.0.0.253 dev eth0    # 添加静态路由</span></span>
<span class="line"><span>ip route del 10.1.0.0/24           # 删除静态路由</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ifconfig                           # 显示所有网卡和接口信息</span></span>
<span class="line"><span>ifconfig -a                        # 显示所有网卡（包括开机没启动的）信息</span></span>
<span class="line"><span>ifconfig eth0                      # 指定设备显示信息</span></span>
<span class="line"><span>ifconfig eth0 up                   # 激活网卡</span></span>
<span class="line"><span>ifconfig eth0 down                 # 关闭网卡</span></span>
<span class="line"><span>ifconfig eth0 192.168.120.56       # 给网卡配置 IP 地址</span></span>
<span class="line"><span>ifconfig eth0 10.0.0.8 netmask 255.255.255.0 up     # 配置 IP 并启动</span></span>
<span class="line"><span>ifconfig eth0 hw ether 00:aa:bb:cc:dd:ee            # 修改 MAC 地址</span></span>
<span class="line"><span></span></span>
<span class="line"><span>nmap 10.0.0.12                     # 扫描主机 1-1000 端口</span></span>
<span class="line"><span>nmap -p 1024-65535 10.0.0.12       # 扫描给定端口</span></span>
<span class="line"><span>nmap 10.0.0.0/24                   # 给定网段扫描局域网内所有主机</span></span>
<span class="line"><span>nmap -O -sV 10.0.0.12              # 探测主机服务和操作系统版本</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用技巧" tabindex="-1"><a class="header-anchor" href="#常用技巧"><span>常用技巧</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 列出最常使用的命令</span></span>
<span class="line"><span>history | awk &#39;{a[$2]++}END{for(i in a){print a[i] &quot; &quot; i}}&#39; | sort -rn | head</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 列出所有网络状态：ESTABLISHED / TIME_WAIT / FIN_WAIT1 / FIN_WAIT2 </span></span>
<span class="line"><span>netstat -n | awk &#39;/^tcp/ {++tt[$NF]} END {for (a in tt) print a, tt[a]}&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 通过 SSH 来 mount 文件系统</span></span>
<span class="line"><span>sshfs name@server:/path/to/folder /path/to/mount/point</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 显示前十个运行的进程并按内存使用量排序</span></span>
<span class="line"><span>ps aux | sort -nk +4 | tail</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 在右上角显示时钟</span></span>
<span class="line"><span>while sleep 1;do tput sc;tput cup 0 $(($(tput cols)-29));date;tput rc;done&amp;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 从网络上的压缩文件中解出一个文件来，并避免保存中间文件</span></span>
<span class="line"><span>wget -qO - &quot;http://www.tarball.com/tarball.gz&quot; | tar zxvf -</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 性能测试：测试处理器性能</span></span>
<span class="line"><span>python -c &quot;import test.pystone;print(test.pystone.pystones())&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 性能测试：测试内存带宽</span></span>
<span class="line"><span>dd if=/dev/zero of=/dev/null bs=1M count=32768</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Linux 下挂载一个 iso 文件</span></span>
<span class="line"><span>mount /path/to/file.iso /mnt/cdrom -oloop</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 通过主机 A 直接 ssh 到主机 B</span></span>
<span class="line"><span>ssh -t hostA ssh hostB</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 下载一个网站的所有图片</span></span>
<span class="line"><span>wget -r -l1 --no-parent -nH -nd -P/tmp -A&quot;.gif,.jpg&quot; http://example.com/images</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 快速创建项目目录</span></span>
<span class="line"><span>mkdir -p work/{project1,project2}/{src,bin,bak}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 按日期范围查找文件</span></span>
<span class="line"><span>find . -type f -newermt &quot;2010-01-01&quot; ! -newermt &quot;2010-06-01&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 显示当前正在使用网络的进程</span></span>
<span class="line"><span>lsof -P -i -n | cut -f 1 -d &quot; &quot;| uniq | tail -n +2</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Vim 中保存一个没有权限的文件</span></span>
<span class="line"><span>:w !sudo tee &gt; /dev/null %</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 在 .bashrc / .bash_profile 中加载另外一个文件（比如你保存在 github 上的配置）</span></span>
<span class="line"><span>source ~/github/profiles/my_bash_init.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 反向代理：将外网主机（202.115.8.1）端口（8443）转发到内网主机 192.168.1.2:443</span></span>
<span class="line"><span>ssh -CqTnN -R 0.0.0.0:8443:192.168.1.2:443  user@202.115.8.1</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 正向代理：将本地主机的 8443 端口，通过 192.168.1.3 转发到 192.168.1.2:443 </span></span>
<span class="line"><span>ssh -CqTnN -L 0.0.0.0:8443:192.168.1.2:443  user@192.168.1.3</span></span>
<span class="line"><span></span></span>
<span class="line"><span># socks5 代理：把本地 1080 端口的 socks5 的代理请求通过远程主机转发出去</span></span>
<span class="line"><span>ssh -CqTnN -D localhost:1080  user@202.115.8.1</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 终端下正确设置 ALT 键和 BackSpace 键</span></span>
<span class="line"><span>http://www.skywind.me/blog/archives/2021</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43)]))}const r=n(l,[["render",p]]),t=JSON.parse('{"path":"/docs/cheet-sheet/shell.html","title":"Shell速查","lang":"zh-CN","frontmatter":{"date":"2020-09-04T00:00:00.000Z","category":["命令速查"],"description":"Shell速查 常用快捷键 BASH基本操作 目录操作 文件操作 用户管理 进程管理 常用命令：SSH / 系统信息 / 网络 变量操作 事件指示符 (仅在交互式 shell 生效) 函数 定义一个新函数 分支控制：if 和经典 test，兼容 posix sh 的条件判断语句 流程控制：while / for / case / until 命令处理 ...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Shell速查\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-09-04T00:00:00.000Z\\",\\"dateModified\\":\\"2025-09-22T13:56:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan Su\\"}]}"],["meta",{"property":"og:url","content":"https://mister-hope.github.io/docs/cheet-sheet/shell.html"}],["meta",{"property":"og:site_name","content":"Blog"}],["meta",{"property":"og:title","content":"Shell速查"}],["meta",{"property":"og:description","content":"Shell速查 常用快捷键 BASH基本操作 目录操作 文件操作 用户管理 进程管理 常用命令：SSH / 系统信息 / 网络 变量操作 事件指示符 (仅在交互式 shell 生效) 函数 定义一个新函数 分支控制：if 和经典 test，兼容 posix sh 的条件判断语句 流程控制：while / for / case / until 命令处理 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-09-22T13:56:07.000Z"}],["meta",{"property":"article:published_time","content":"2020-09-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-09-22T13:56:07.000Z"}]]},"git":{"createdTime":1749090762000,"updatedTime":1758549367000,"contributors":[{"name":"苏雨鸿","username":"","email":"563607356@qq.com","commits":2},{"name":"ryanchosen","username":"ryanchosen","email":"syhchosen@google.com","commits":1,"url":"https://github.com/ryanchosen"}]},"readingTime":{"minutes":21.16,"words":6347},"filePathRelative":"docs/cheet-sheet/shell.md","excerpt":"\\n<h2>常用快捷键</h2>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>CTRL+A              # 移动到行首，同 &lt;Home&gt;</span></span>\\n<span class=\\"line\\"><span>CTRL+B              # 向后移动，同 &lt;Left&gt;</span></span>\\n<span class=\\"line\\"><span>CTRL+C              # 结束当前命令</span></span>\\n<span class=\\"line\\"><span>CTRL+D              # 删除光标前的字符，同 &lt;Delete&gt; ，或者没有内容时，退出会话</span></span>\\n<span class=\\"line\\"><span>CTRL+E              # 移动到行末，同 &lt;End&gt;</span></span>\\n<span class=\\"line\\"><span>CTRL+F              # 向前移动，同 &lt;Right&gt;</span></span>\\n<span class=\\"line\\"><span>CTRL+G              # 退出当前编辑（比如正在 CTRL+R 搜索历史时）</span></span>\\n<span class=\\"line\\"><span>CTRL+H              # 删除光标左边的字符，同 &lt;Backspace&gt;</span></span>\\n<span class=\\"line\\"><span>CTRL+K              # 删除光标位置到行末的内容</span></span>\\n<span class=\\"line\\"><span>CTRL+L              # 清屏并重新显示</span></span>\\n<span class=\\"line\\"><span>CTRL+N              # 移动到命令历史的下一行，同 &lt;Down&gt;</span></span>\\n<span class=\\"line\\"><span>CTRL+O              # 类似回车，但是会显示下一行历史</span></span>\\n<span class=\\"line\\"><span>CTRL+P              # 移动到命令历史的上一行，同 &lt;Up&gt;</span></span>\\n<span class=\\"line\\"><span>CTRL+R              # 历史命令反向搜索，使用 CTRL+G 退出搜索</span></span>\\n<span class=\\"line\\"><span>CTRL+S              # 历史命令正向搜索，使用 CTRL+G 退出搜索</span></span>\\n<span class=\\"line\\"><span>CTRL+T              # 交换前后两个字符</span></span>\\n<span class=\\"line\\"><span>CTRL+U              # 删除字符到行首</span></span>\\n<span class=\\"line\\"><span>CTRL+V              # 输入字符字面量，先按 CTRL+V 再按任意键</span></span>\\n<span class=\\"line\\"><span>CTRL+W              # 删除光标左边的一个单词</span></span>\\n<span class=\\"line\\"><span>CTRL+X              # 列出可能的补全</span></span>\\n<span class=\\"line\\"><span>CTRL+Y              # 粘贴前面 CTRL+u/k/w 删除过的内容</span></span>\\n<span class=\\"line\\"><span>CTRL+Z              # 暂停前台进程返回 bash，需要时可用 fg 将其切换回前台</span></span>\\n<span class=\\"line\\"><span>CTRL+_              # 撤销（undo），有的终端将 CTRL+_ 映射为 CTRL+/ 或 CTRL+7</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>ALT+b               # 向后（左边）移动一个单词</span></span>\\n<span class=\\"line\\"><span>ALT+d               # 删除光标后（右边）一个单词</span></span>\\n<span class=\\"line\\"><span>ALT+f               # 向前（右边）移动一个单词</span></span>\\n<span class=\\"line\\"><span>ALT+t               # 交换字符</span></span>\\n<span class=\\"line\\"><span>ALT+BACKSPACE       # 删除光标前面一个单词，类似 CTRL+W，但不影响剪贴板</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>CTRL+X CTRL+X       # 连续按两次 CTRL+X，光标在当前位置和行首来回跳转 </span></span>\\n<span class=\\"line\\"><span>CTRL+X CTRL+E       # 用你指定的编辑器，编辑当前命令</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{r as comp,t as data};
