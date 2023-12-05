# Start

### clone project

```
git clone git@github.com:nangongmoyan/i18n-toolkit-demo.git
```

### npm install

```
cd i18n-toolkit-demo
npm install 
```

### npm start

```
npm start
```

### 页面显示

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9ecc95329b554a6a969f996783dfdb5c~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2552&h=1352&s=148108&e=png&b=24272d)

点击 changeLanguage 会切换成另外一个语言


![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d754346c99db4ba18eff3188f4202986~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2554&h=1346&s=147674&e=png&b=24272d)

### 在VS Code中可以显示语言对应的具体文案

- 安装VS Code 插件： i18n ally

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/681ddfedec964f92a286c3e0a323d379~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2043&h=1315&s=231509&e=png&b=24272d)


- 显示英文

**Tips:点击右下角红框可以选择在编辑器中显示对应语言的文本**

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0688cbafff7c4bdc8c5691268fa8d586~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2560&h=1074&s=271648&e=png&b=24272d)

- 显示中文

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b1aab968018e47acbcc956851371fd03~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2560&h=1074&s=269873&e=png&b=23262c)

### 更换配置

1.首先你需要完成这里面的[前置操作后](https://github.com/nangongmoyan/nangongmoyan-i18n-toolkit)
2.然后更改`i18n.config.json`配置
3.删除 `i18n` 文件夹
4.执行npm intl（命令会将你Google Sheets中的数据拉下来）
5.现在你就可以在页面中显示你表格中的多语言，并可以在VS Code中进行显示文案，在网页上可以切换语言
6.最后，拜拜了，感谢你看到这里
