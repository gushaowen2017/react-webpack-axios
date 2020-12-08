import React, { Component } from 'react';
import { Consumer } from '../AppContext';
import TabBar from '../components/TabBar';
import Layout from './Layout'

/*const handleConsumer = Cmp => props => {
    return (
        <Consumer>
            {ctx => <Cmp {...ctx} {...props}></Cmp>}
        </Consumer>
    )
}
export default function User (props) {
    const HandleConsumer = handleConsumer(UserCmp);
    return (
        <Layout title="用户中心">
            <HandleConsumer />
        </Layout>
    )
}
function UserCmp (props) {
    console.log('user', props);
    return <div>User</div>
}*/
export default class User extends Component {
    render () {
        return (
            <>
                <p>用户中心</p>
                <Consumer>
                    {ctx => <UserCmp {...ctx} />}
                </Consumer>
            </>
        )
    }
}

function UserCmp (props) {
    const { home, user } = props;
    const { carsouel = [] } = home;
    const { isLogin, userName } = user;
    return (
        <Layout>
            {
                {
                    btns: <button>下载</button>
                }
            }

        </Layout>
    )
}
