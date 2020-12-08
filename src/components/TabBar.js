import React from 'react';
import { Consumer } from '../AppContext';

export default function TabBar () {
    return (
        <div>
            <Consumer>
                {
                    ctx => <TabBarCmp {...ctx} />
                }
            </Consumer>
        </div>
    )
}

function TabBarCmp (props) {
    const {home, user} = props
    const {isLogin, userName} = user
    return (
        <div>{isLogin ? userName : '登录'}</div>
    )
}