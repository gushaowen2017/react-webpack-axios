console.log("gsw------------------gsw")
// import "index.less"
import './assets/main.css';

const home_text = require('./home');
const text_p = document.getElementById('text-p');

text_p.innerHTML = process.env.PROD_NAME || home_text.text;

let fn = (m) => {
    console.log('箭头函数:'+m)
}

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(123)
    }, 1000)
})

fn(23456)
promise.then(res => {
    console.log(res);
})

fn(2)