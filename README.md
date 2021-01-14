# mypg

## Project setup
```
npm install
```

### 运行配置
```
数据库文件在src/php/mysql目录下，自己运行到数据库中。
跨域请求配置在vue.config.js中,其中api中target为你自己运行数据库的服务器地址。
在network中简单封装axios，其中baseUrl根据自己后端路径设置，比如我的为'http://localhost:8080/Project/studentsGrade/'
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
