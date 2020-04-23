---
tags: 
  - docs
  - linux
author: ccwuyu 
---

# About Linux

Linux是一个 类Unix操作系统。它是给予POSIX\UNIX的多用户、多任务、支出多线程和多CPU的操作系统。
Linux能运行主要的UNIX工具软件、应用程序和网络协议。支持32/64。

Linux继承了Unix以网络为核心的设计思想，是一个性能稳定的多用户网络操作系统。

## Linux 的用途
- 服务器系统：LAMP [ 其中"L" 为 Linux ]。
- 桌面系统：红旗
- 嵌入式系统：机顶盒、移动电话 及移动设备
- 电子政务：安全性好。

## Linux 的安装
1. 下载虚拟机 ` Virtualbox  ||  VMWARE `
   1. 选择系统 ` Lnuix/red hat 6 `
   2. 配置虚拟硬盘 ` 虚拟硬盘8G `
   3. 选择模式 ` VDI `
   4. 挂载虚拟光盘 ` centOS7 `
2. centos7 配置
   1. 下载地址  ` http://mirrors.163.com/centos/7/isos/x86_64/ ` 
   2. 语言选择 ` English `
   3. 选择安装位置
   4. 选择安装模式 ` 最小安装 `
   5. 设置root密码  ` root密码 `

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



