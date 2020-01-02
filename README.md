# moons

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 一个简单的前端框架

1. 请求接口/src/api目录下面
2. 接口文件命名 需要 同/src/views一致，这样查找及修改简单
3. 动态路由位于 src/store/modules/permission.js中
4. 权限验证位于 src/permission.js中
5. 封装的axios请求及拦截位于 src/utils/request.js中
