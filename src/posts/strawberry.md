---
icon: pen-to-square
date: 2022-01-11
cover: /assets/images/ae842bd9fd9b7acf5ad47d736ec039f8.png
# category:
#   - 水果
#   - 草莓
tag:
  - 红
  - 小
---

# 在k8s当中部署mysql的主从复制

## 1.环境准备

### 准备3台主机，安装k8s环境，docker作为容器运行时

MySQL 社区为了支持“黑人的命也是命”（Black Lives Matter, BLM）运动，从 8.0 版本起，在其文档和术语中不再使用可能带有种族歧视色彩的词汇。具体来说，Master 将被 Source 替代，而 Slave 将改为 Replica。

### 部署完成需要的yaml文件
<!-- more -->
## 2.配置nfs作为数据源存储
```Shell
echo "/data/nfs *(rw,sync,no_subtree_check,no_root_squash)" | sudo tee -a /etc/exports
systemctl restart nfs-server
exportfs -arv
showmount -e 192.168.20.90
```