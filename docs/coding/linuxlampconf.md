---
tags: 
  - docs
  - linux
author: ccwuyu 
---

# Linux  LAMP配置

## APACHE

### 安装

1.  安装
    ``` shell
    yum install httpd
    ```
2. 启动
    ``` shell
    service httpd start
    ```
3. 检查服务状态
    ``` shell
    service httpd status
    ```
4. 关闭/重启
    ``` shell
    service httpd stop/restart
    ```

### 设置

一般conf文件存放地址为 ` /etc/httpd/conf/httpd.conf `


- 配置服务器
  ``` shell
  <Directory "/var/www">
      AllowOverride None
      # Allow open access:
      Require all granted
  </Directory>
  ```
- 配置虚拟主机 - 基于域名
  ``` shell
  <VirtualHost *:80>
    ServerName www.example.com
    DocumentRoot "/www/domain"
    <Directory "/var/www">
        AllowOverride None
        # Allow open access:
        Require all granted
    </Directory>
  </VirtualHost>
  ```
- 配置虚拟主机 - 基于IP
  ``` shell
  待续
  ```

### 遇到的问题

::: tip 问题描述 ：配置后无法访问
  ```
  You don't have permission to access /index.html on this server
  ```

  解决方案：
  ``` shell
  1. 防火墙端口
  2. apache设置
  3. Linux 宽松模式
  ```
:::


## PHP
### 安装配置

1.  安装
    ``` shell
    yum install epel-release

    rpm -Uvh https://mirror.webtatic.com/yum/el7/webtatic-release.rpm

    yum install php56w-fpm
    ```

2. 安装扩展
    ``` shell
    yum install  -y   php56w-cli  php56w-common  php56w-gd  php56w-mcrypt  php56w-nbstring  php56w-sql
    ```

3. 开启服务状态
    ``` shell
    service php-fpm start
    ```


### 关于PHP的 Apache 设置

  ``` shell
  # httpd.conf
  <FilesMatch .php$>
      setHandler "proxy:fcgi://127.0.0.1:9000"
  </FilesMatch>
  ```

### 安装遇到问题

::: tip 问题描述 ：提示版本冲突
  ``` shell
  您可以尝试添加 --skip-broken 选项来解决该问题
  您可以尝试执行：rpm -Va --nofiles --nodigest
  ```

  解决方案：
  ``` shell
  # 删除冲突文件
  yum remove php-common

  # 清除缓存
  yum clean all

  # 重新安装，每个都带版本号 [56w]
  yum install  -y   php56w-cli  php56w-common  php56w-gd  php56w-mcrypt  php56w-nbstring  php56w-sql
  ```
:::


## MYSQL
### 安装

1. 从官网获取压缩包
    ``` shell
    wget https://dev.mysql.com/get/mysql80-community-release-el7-1.noarch.rpm
    rpm -ivh mysql80-community-release-el7-1.noarch.rpm
    ```
2. 查询maria是否存在，如果存在，移除它
    ``` shell
    yum list installed | grep maria
    yum remove mariadb*****
    ```
3. 安装MySQL服务
    ``` shell
    yum install mysql-community-server
    ```
4. 常用指令
    ``` shell
    systemctl start mysqld.service
    systemctl stop mysqld.service
    systemctl restart mysqld.service
    ```

### 配置
配置文件 ` /etc/my.cnf mysql `

- 查找临时密码
  ``` shell
  cat /var/log/mysqld.log | grep password
  ```
- 修改密码
  ``` shell
  # mysql8.0以上密码策略限制必须要大小写加数字特殊符号
  # “;”  句尾分号不能少！！！！！
  alter user 'root'@'localhost' identified by 'Xiao@058';
  ```




