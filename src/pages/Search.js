import React, { Component } from 'react';

// 事件回调函数注意绑定this指向，常⻅三种⽅方法：
// 1. 构造函数中绑定并覆盖：this.change = this.change.bind(this)
// 2. ⽅方法定义为箭头函数：change = ()=>{}
// 3. 事件中定义为箭头函数：onChange={()=>this.change()}

// react⾥遵循单项数据流，没有双向绑定，输⼊框要设置value 和onChange，称为受控组件

export default class Search extends Component {
    constructor (props) {
        super(props)
        this.state = {
            name: ""
        };
        // this.change = this.change.bind(this);
    }

    btn = () => {
        //使⽤箭头函数，不需要指定回调函数this，且便于传递参数
        console.log("btn");
    };

    change = e => {
        // console.log(e);
        let value = e.target.value;
        this.setState({
            name: value,
        });
        console.log("name", this.state.name);
    };

    render () {
        const { name } = this.state;
        return (
            <div>
                <button onClick={this.btn}>按鈕</button>
                <input type="text" name={name} onChange={this.change}/>
            </div>
        )
    }
}