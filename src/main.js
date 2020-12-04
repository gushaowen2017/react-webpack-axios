import React from 'react';
import ReactDom from 'react-dom';
import "@babel/polyfill"

console.log('process.env.PROD_NAME:' + process.env.PROD_NAME)
import './styles/reset.css'
import './styles/common.less'
import './styles/index.less'
import './styles/SideNav.less'

import App from './App'
ReactDom.render(<App />, document.getElementById('app'))