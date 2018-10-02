### 混合式开发(3.8.1)
- 基础知识
  + 他是一个前段资源加载/打包工具，将根据模块的依赖关系进行静态分析，并依据规则生成对应的静态资源。
- 框架安装
  + 需要先安装 node.js
  + npm install webpack -g
  + Mac下加sudo： sudo npm install ....
- 打包使用
  + webpack A.js B.js
- 安装loader加载器，将静态的样式文件打包到bundle.js文件中
  + npm install css-loader style-loader
    * css-loader => 
    * style-loader => 将样式直接通过 style标签引入
  + require("!style-loader!css-loader!./style.css");
- 配置文件
  + 在手动编译时，可以将一些经常性的操作，添加到配置文件，减少编译过程中，手写代码的数量，构造自动工具。
  + webpack.config.js

### 安装第三方库
- 在项目中先安装jQuery 第三方库，并在使用时，通过require函数引入安装的库文件
  + npm install jquery --save-dev
  + var $ = require('jquery');

### 服务端环境安装
- 通过安装 `webpack-dev-server` 模块，可以将项目打包到服务端，并可以指定端口，同时，还可以配置启动命令。
  + npm install webpack-dev-server --save-dev
````json
// package.json
"scripts": {
    "start": "webpack-dev-server --entry ./src/js/show.js --output-filename ./dist/bundle.js",
    // 开启服务
    "build": "webpack --watch"  // 监测文件的更新修改
}
```` 
  + npm run build   // 执行 build 的命令
  + npm start   // 开启服务端