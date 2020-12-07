import React from 'react';
import ReactDom from 'react-dom';
import "@babel/polyfill"

console.log('process.env.PROD_NAME:' + process.env.PROD_NAME)
import './styles/reset.css'
import './styles/common.less'

import App from './App'

// React负责逻辑控制，数据 -> VDOM
// ReactDom渲染实际DOM，VDOM -> DOM
ReactDom.render(<App title="gsw"/>, document.getElementById('app'));
// import App from './App'
// ReactDom.render(, document.getElementById('app'))