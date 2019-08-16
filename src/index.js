// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element)
import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './global.css'
import Badge from './components/Badge'

//  const element = <h1>hello, Platzi!</h1>
// const element = React.createElement(
//   "a",
//   { href: "https://platzi.com" },
//   "hola, a children platzy!"
// );
const name = "angela";
const jsx = (
  <div>
    <h1>hola soy, {name}</h1>
    <p>hola soy, {name}</p>
  </div>
);
// const element =  React.createElement('h1', {name:}, `hola soy ${name}`)
const container = document.getElementById("app");
// (que,donde)
ReactDOM.render(<Badge first_name = "William" last_name = "De la Espriella" twiter = "WilliamDelae"/>, container);
