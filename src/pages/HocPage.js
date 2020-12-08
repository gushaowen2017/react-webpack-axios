import React, { Component } from 'react';
import { Button } from "antd";
import Diallog from "../components/Diallog"
// function Child (props) {
//     return <div>Child</div>
// }

/*const foo = Cmp => {
    return props => {
        return <Cmp {...props} />
    }
}*/
const foo = Cmp => props => {
    return <div style={{background: 'red'}}>
        <Cmp {...props} />
    </div>

}
console.log(foo);
const foo2 = Cmp => props => {
    return <div style={{ border: '1px solid green'}}>
        <Cmp {...props} />
    </div>
}
// @foo
// @foo2
class Child extends Component {
    close = () => {
        console.log("close");
    }

    render() {
        return (
            <div className="border">
                <div>dgd</div>
                <Diallog hideDialog={this.close}/>
            </div>
        );
    }
}
// @foo2
class HocPage extends Component {
    render() {
        return (
            <div>
                <h1>HocPage</h1>
                <Child />
                <Button type="dashed">click</Button>
            </div>
        );
    }
}
export default HocPage;