import React, { useState, useEffect } from 'react';
// 可以把 useEffect Hook 看做
// componentDidMount ， componentDidUpdate 和 componentWillUnmount 这三个函数的组合。
export default function FuncCmp() {
    const [date, setDate] = useState(new Date());
    // console.log(useState(new Date()));
    // console.log(date);
    // console.log(setDate);
    useEffect(() => {
        const timeId = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => clearInterval(timeId)
    })
    return <div>{date.toLocaleTimeString()}</div>;
}