import React, { Component } from 'react';
// import { Consumer } from '../AppContext';

export default class Layout extends Component {
    // constructor (props) {
    //     super(props);
    //     console.log(props);
    // }

    componentDidMount () {
        const { title = 'gsw'} = this.props;
        document.title = title;
    }

    render () {
        // console.log(this.props.title);
        const { children, title = 'gsw' } = this.props;
        return (
            <div style={{background: 'yellow'}}>
                <p>{title}</p>
                {
                    children.btns ? children.btns : children
                }
                <TabBar />
            </div>
        )
    }
}

function TabBar (props) {
    return <div>TabBar</div>
}