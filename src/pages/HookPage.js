import React, { useState, useEffect, useReducer } from 'react';
import FruitAdd from '../components/FruitAdd';
import FruitList from '../components/FruitList';

function fruitReducer (state = [], action) {
    switch (action.type) {
        case "replace":
        case "init":
            return [...action.payload];
        case "add":
            return [...state, action.payload];
        default:
            return state;
    }
}
export default function HookPage () {
    // const [date, setDate] = useState(new Date());
    const [counter, setCounter] = useState(0);
    const [fruits, setFruits] = useState(["apple", "banana"]);

    /*useEffect(() => {
        const timeId = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => clearInterval(timeId)
    })*/
    return (
        <div>
            <h1>HookPage</h1>
            <p>{useClock().toLocaleTimeString()}</p>
            <p onClick={ () => setCounter(counter + 1)}>{counter}</p>
            <FruitAdd fruits={fruits} addFruit={name => setFruits([...fruits, name])}/>
            {/*<FruitList fruits={fruits} setFruits={setFruits}/>*/}
        </div>
    )
}

function useClock() {//⾃自定义hook，必须use开头
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        console.log("useEffect");
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    return date;
}