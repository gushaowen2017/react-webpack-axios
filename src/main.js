console.log('谷邵文')
const home_text = require('./page/home');
import './assets/common.css'
const text_p = document.getElementById('text-p');

console.log(process.env.PROD_NAME)
 
text_p.innerHTML = process.env.PROD_NAME + "_____" +home_text.text;