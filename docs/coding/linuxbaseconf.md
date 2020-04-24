---
tags: 
  - docs
  - linux
author: ccwuyu 
---

# Linux  基础配置

## Linux 的基本配置 - 更换YUM源
yum资源站点在国外，为了插件包能快速下载，所以最好更换YUM源[就像NPM -> CNPM]。

1.  备份原始源
    ``` shell
      mv  /etc/yum.repos.d/CentOS-Base.repo  /etc/yum.repos.d/CentOS-Base.repo.backup
    ```
2. 选择镜像源
  1. 网易镜像安装   ` http://mirrors.163.com/.help/centos.html `
  2. 阿里云镜像安装   ` https://developer.aliyun.com/mirror/centos `


## Linux 的基本配置 - 防火墙配置
1. 安装
    ``` shell
      yum  install  firewalld
    ```
2. 启动及常用命令
    ``` shell
      # 设置开机自启动
      systemctl enable firewalld

      # 启动
      systemctl start firewalld  ||  service  firewalld  start

      # 检杳服务状态
      service  firewalld  status    ||    systemctl status firewalld    ||    firewall-cmd --state

      # 关闭/禁用
      service  firewalld  stop/disabled    ||    systemctl stop/disable firewalld

      # 重启防火墙
      service firewalld restart    ||    firewall-cmd --reload
    ```
3. 防火墙设置
    ``` shell
      # 杳询服务
      firewaIl-cmd  --list-services

      # 查询开放端口
      firewaIl-cmd  --list-ports

      # 查询端口
      firewaIl-cmd --query-port=80/tcp

      # 添加开放端口
      firewaIl-cmd  --add-port=3306/tcp

      # 批量添加区间端口
      firewall-cmd --remove-port=80/tcp

      # 永久添加端口  ` --permanent `
      firewall-cmd --add-port=80/tcp --permanent
    ```



