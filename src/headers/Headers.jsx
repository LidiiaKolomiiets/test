import React from "react";

import logo from './logo.png'
import basket from '../basket/imageBasket/basket-min.png'
import NavItem from './NavItem.jsx';
import './headers.css'

/*const questions = []

function fetchQuest() {
  return fetch('/products', {

  })
      .then(response => response.json())
      .then(result => questions.push(...result))

}

fetchQuest().then(() => console.log(questions))*/


export default () => {
  return <header className="header">
    <img src={logo} alt="Моє зображення" />
    <nav className="nav">
    < NavItem title="Головна" url="/" />
    < NavItem title="Смузі конструктор" url="smoothies" />
    < NavItem title="Про нас" url="about" />
    <NavItem title={<img src={basket} className="basket-icon"/>} url="basket"/>
    </nav>
  </header>
}