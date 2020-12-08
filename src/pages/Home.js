import React, { Component } from 'react';
import { Consumer } from '../AppContext';
import Layout from './Layout';

export default class Home extends Component {
    render () {
        return (
            <Consumer>
                {
                    ctx => <HomeCmp {...ctx} />
                }
            </Consumer>
        )
    }
}

function HomeCmp (props) {
    const { home, user } = props;
    const { carsouel = [] } = home;
    const { isLogin, userName } = user;
    return (
        <Layout>
            <div>{isLogin ? userName : '未登录'}</div>
            {
                carsouel.map((item, index) => {
                    return <img src={item.img} key={'img' + index}/>
                })
            }
        </Layout>
    )
}