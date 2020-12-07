// 组件有两种形式：function组件和class组件. 如果组件中数据会变化，并影响⻚面内容，则组件需要拥有状态（state）并维护状态。

// class组件(使⽤用state和setState维护状态)
// 类组件通常拥有状态和生命周期，继承于Component，实现render⽅方法，

import React, { Component } from 'react';
import ClassComponent from './pages/ClassComponent';
import Clock from './pages/Clock';
import Search from './pages/Search';
import Lifecyzhocle from './pages/Lifecyzhocle';

class App extends Component {
    onChange = e => {
        // console.log(e);
    }

    render () {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <ClassComponent/>
                <Clock change={this.onChange}/>
                <Search/>
                <Lifecyzhocle/>
            </div>
        )
    }
}

// function组件(通过hooks api维护状态)
// 函数组件通常无状态，仅关注内容展示，返回渲染结果即可。

import FuncCmp from './pages/FuncCmp';

/*function App () {
    return (
        <div className='App'>
            <FuncCmp/>
        </div>
    )
}*/

export default App;