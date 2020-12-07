# react-webpack-axios
# 从0到1到100
# npm install webpack-dev-server -webpack-plugin -D
# npm install optimize-css-assets-webpack-plugin purifycss-webpack -D
# webpack-dev-server 是 webpack 轻量级服务器，npm i webpack-dev-server --save 安装，可以通过命令行直接来运行，也可以把它写到 package.json 的 script 里，这样子比较方便，有如下的配置参数 webpack-dev-server --devtool eval --progress --colors --hot，分别表示：

#--devtool eval 当程序运行出错的时候，方便查找到出错的位置和原因

#--progress 打包应用的进度

#--colors 命令行日志变的有颜色

#--hot 热更新

# 组件通信：
    1.props属性传递：可⽤用于父子组件相互通信，如果父组件传递的是函数，则可以把子组件信息传入父组件，这个常称为状态提升
    2.context：跨层级组件之间通信，主要用于组件库开发中
    3.redux：类似vuex，⽆明显关系的组件间通信

# 验证生命周期:Lifecyzhocle

