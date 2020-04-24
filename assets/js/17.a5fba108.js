(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{291:function(s,a,t){"use strict";t.r(a);var e=t(17),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"linux-lamp配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-lamp配置"}},[s._v("#")]),s._v(" Linux  LAMP配置")]),s._v(" "),t("h2",{attrs:{id:"apache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apache"}},[s._v("#")]),s._v(" APACHE")]),s._v(" "),t("h3",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("ol",[t("li",[s._v("安装"),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" httpd\n")])])])]),s._v(" "),t("li",[s._v("启动"),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" httpd start\n")])])])]),s._v(" "),t("li",[s._v("检查服务状态"),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" httpd status\n")])])])]),s._v(" "),t("li",[s._v("关闭/重启"),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" httpd stop/restart\n")])])])])]),s._v(" "),t("h3",{attrs:{id:"设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置"}},[s._v("#")]),s._v(" 设置")]),s._v(" "),t("p",[s._v("一般conf文件存放地址为 "),t("code",[s._v("/etc/httpd/conf/httpd.conf")])]),s._v(" "),t("ul",[t("li",[s._v("配置服务器"),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Directory "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/var/www"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    AllowOverride None\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Allow open access:")]),s._v("\n    Require all granted\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/Directory"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])])]),s._v(" "),t("li",[s._v("配置虚拟主机 - 基于域名"),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("VirtualHost *:8"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v(">")]),s._v("\n  ServerName www.example.com\n  DocumentRoot "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/www/domain"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Directory "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/var/www"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n      AllowOverride None\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Allow open access:")]),s._v("\n      Require all granted\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/Directory"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/VirtualHost"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])])]),s._v(" "),t("li",[s._v("配置虚拟主机 - 基于IP"),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("待续\n")])])])])]),s._v(" "),t("h3",{attrs:{id:"遇到的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#遇到的问题"}},[s._v("#")]),s._v(" 遇到的问题")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("问题描述 ：配置后无法访问")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("You don't have permission to access /index.html on this server\n")])])]),t("p",[s._v("解决方案：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(". 防火墙端口\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(". apache设置\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(". Linux 宽松模式\n")])])])]),s._v(" "),t("h2",{attrs:{id:"php"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#php"}},[s._v("#")]),s._v(" PHP")]),s._v(" "),t("h3",{attrs:{id:"安装配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装配置"}},[s._v("#")]),s._v(" 安装配置")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("安装")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" epel-release\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -Uvh https://mirror.webtatic.com/yum/el7/webtatic-release.rpm\n\nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" php56w-fpm\n")])])])]),s._v(" "),t("li",[t("p",[s._v("安装扩展")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("  -y   php56w-cli  php56w-common  php56w-gd  php56w-mcrypt  php56w-nbstring  php56w-sql\n")])])])]),s._v(" "),t("li",[t("p",[s._v("开启服务状态")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" php-fpm start\n")])])])])]),s._v(" "),t("h3",{attrs:{id:"关于php的-apache-设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于php的-apache-设置"}},[s._v("#")]),s._v(" 关于PHP的 Apache 设置")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# httpd.conf")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("FilesMatch .php$"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    setHandler "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"proxy:fcgi://127.0.0.1:9000"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/FilesMatch"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("h3",{attrs:{id:"安装遇到问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装遇到问题"}},[s._v("#")]),s._v(" 安装遇到问题")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("问题描述 ：提示版本冲突")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("您可以尝试添加 --skip-broken 选项来解决该问题\n您可以尝试执行：rpm -Va --nofiles --nodigest\n")])])]),t("p",[s._v("解决方案：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除冲突文件")]),s._v("\nyum remove php-common\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清除缓存")]),s._v("\nyum clean all\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新安装，每个都带版本号 [56w]")]),s._v("\nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("  -y   php56w-cli  php56w-common  php56w-gd  php56w-mcrypt  php56w-nbstring  php56w-sql\n")])])])]),s._v(" "),t("h2",{attrs:{id:"mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[s._v("#")]),s._v(" MYSQL")]),s._v(" "),t("h3",{attrs:{id:"安装-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-2"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("ol",[t("li",[s._v("从官网获取压缩包"),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://dev.mysql.com/get/mysql80-community-release-el7-1.noarch.rpm\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -ivh mysql80-community-release-el7-1.noarch.rpm\n")])])])]),s._v(" "),t("li",[s._v("查询maria是否存在，如果存在，移除它"),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("yum list installed "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" maria\nyum remove mariadb*****\n")])])])]),s._v(" "),t("li",[s._v("安装MySQL服务"),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mysql-community-server\n")])])])]),s._v(" "),t("li",[s._v("常用指令"),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("systemctl start mysqld.service\nsystemctl stop mysqld.service\nsystemctl restart mysqld.service\n")])])])])]),s._v(" "),t("h3",{attrs:{id:"配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),t("p",[s._v("配置文件 "),t("code",[s._v("/etc/my.cnf mysql")])]),s._v(" "),t("ul",[t("li",[s._v("查找临时密码"),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /var/log/mysqld.log "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" password\n")])])])]),s._v(" "),t("li",[s._v("修改密码"),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mysql8.0以上密码策略限制必须要大小写加数字特殊符号")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# “;”  句尾分号不能少！！！！！")]),s._v("\nalter user "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost'")]),s._v(" identified by "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Xiao@058'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);