const babelConfig = {
    presets: [
        ["@babel/preset-env", {
            useBuiltIns: "entry",
            corejs: 2
        }],//将ES2015+的代码转换为es5
        "@babel/preset-react"//用于解析 JSX
    ],
    plugins: [
        "@babel/plugin-syntax-dynamic-import",
        ["@babel/plugin-transform-runtime"],
        "@babel/plugin-proposal-class-properties"
    ]//
}

module.exports = babelConfig