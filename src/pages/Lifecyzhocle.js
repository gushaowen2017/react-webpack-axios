import React, { Component } from 'react';
/*
V17可能会废弃的三个⽣生命周期函数⽤用
getDerivedStateFromProps替代，⽬目前使⽤用的话加上
UNSAFE_：
- componentWillMount
- componentWillReceiveProps
- componentWillUpdate
*/
export default class Lifecyzhocle extends Component {
    constructor (props) {
        super(props)
        this.state = {
            counter: 0
        };
        console.log("constructor", this.state.counter);
    }

    static getDerivedStateFromProps (props, state) {
        // getDerivedStateFromProps 会在调用 render 方法之前调用，
        // 并且在初始挂载及后续更新时都会被调用。
        // 它应返回⼀个对象来更新 state，如果返回 null 则不更新任何内容。
        const { counter } = state;
        console.log("getDerivedStateFromProps", counter);
        return counter < 8 ? null : { counter: 0 };
    }

    getSnapshotBeforeUpdate (prepProps, prevState) {
        const { counter } = prevState;
        console.log("getSnapshotBeforeUpdate", counter);
        return null;
    }

    /* UNSAFE_componentWillMount() {
        //不推荐，将会被废弃
        console.log("componentWillMount", this.state.counter);
    } */

    componentDitMount () {
        console.log("componentDidMount", this.state.counter);
    }

    componentWillUnmount () {
        //组件卸载之前
        console.log("componentWillUnmount", this.state.counter);
    }

    /* UNSAFE_componentWillUpdate() {
        //不推荐，将会被废弃
        console.log("componentWillUpdate", this.state.counter);
    } */

    componentDidUpdate () {
        console.log("componentDidUpdate", this.state.counter);
    }

    shouldComponentUpdate (nextProps, nextState) {
        const { counter } = this.state;
        console.log("shouldComponentUpdate", counter, nextState.counter);
        return counter !== 5;
    }

    setCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    };

    render () {
        const { counter } = this.state;
        console.log("render", this.state);
        return (
            <div>
                <h1>我是LifeCycle⻚页⾯面</h1>
                <p>{counter}</p>
                <button onClick={this.setCounter}>改变 counter</button>
                <Foo counter={counter} />
            </div>
        )
    }
}

class Foo extends Component {
    UNSAFE_componentWillReceivePropsv (nextProps) {
        //不不推荐，将会被废弃
        // UNSAFE_componentWillReceiveProps() 会在已挂载的组件接收新的 props 之前被调用
        console.log("Foo componentWillReceiveProps");
    }

    componentWillUnmount () {
        //组件卸载之前
        console.log(" Foo componentWillUnmount");
    }

    render () {
        return (
            <div style={{border: "1px solid black", margin: '10px', padding: '10px'}}>
                我是Foo组件
                <div>Foo counter: {this.props.counter}</div>
            </div>
        );
    }

}