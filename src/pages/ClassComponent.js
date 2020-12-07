import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import * as style from "../styles/index.css";

export default class ClassComponent extends Component {
    render () {
        const name = "react study";
        const user = { firstName: "tom", lastName:"jerry" };
        function f(user) {
            return user.firstName + " " + user.lastName;
        }
        const greet = <p>hello, Jerry</p>;
        const arr = [1,2,3].map( num => <li key={num}>{num}{typeof num}</li>);

        return (
            <div>
                {name ? <h2>name</h2> : null}
                {f(user)}
                {greet}
                <ul>{arr}</ul>
                <img src={logo} className={style.img} alt=""/>
            </div>
        )
    }
}