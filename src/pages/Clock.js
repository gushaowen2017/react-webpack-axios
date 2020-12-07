import React, { Component } from 'react';

export default class Clock extends Component {
    constructor (props){
        super(props);
        // 使用state属性维护状态，在构造函数中初始化状态
        this.state = {
            date: new Date(),
        }
    }

    // 组件挂载之后
    componentDidMount () {
        // 启动定时器每秒更新状态
        this.timerD = setInterval(() => {
            // 使⽤用setState⽅法更新状态
            this.setState({
                date: new Date()
            }, () => {
                // 每次状态更新就通知父组件
                this.props.change(this.state.date);
            });
        }, 1000);
    }

    // 组件卸载前
    componentWillUnmount () {
        // 停⽌止定时器
        clearInterval(this.timerD);
    }

    //
    componentDitUpdate(){
        console.log("componentDitUpdate");
    }

    render () {
        return (
            <div>{this.state.date.toLocaleTimeString()}</div>
        )
        // or
        // return <div>{this.state.date.toLocaleTimeString()}</div>;
    }
}