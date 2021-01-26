# mypg

## Project setup
```
自我毕业设计（实现物联网智能称重，包含库存管理，用户管理，出入库三个模块）
正在开发ing(进度1/4)
npm install
```

### 运行配置
```
数据库文件在src/php/mysql目录下，自己运行到数据库中。其中我运行的数据库服务器为tomcat
跨域请求配置在vue.config.js中,其中api中target为你自己运行数据库的服务器地址。
在network中简单封装axios，其中baseUrl根据自己后端路径设置。比如我的后端访问基础地址为'http://localhost:8080/Project/studentsGrade/'
```
### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
