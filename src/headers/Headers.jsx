import React from "react";

import logo from './logo.png'
import baskets from '../basket/imageBasket/basket-min.png'
import NavItem from './NavItem.jsx';
import './headers.css'
import { useSelector } from "react-redux";

export default () => {
  const basket = useSelector(state => state.basket)
  const basketCount = basket.length
  return <header className="header">
    <img src={logo} alt="Моє зображення" />
    <nav className="nav">
    < NavItem title="Головна" url="/" />
    < NavItem title="Смузі конструктор" url="smoothies" />
    < NavItem title="Про нас" url="about" />
    <NavItem title={<><img src={baskets} className="basket-icon"/>{basketCount > 0 ? `${basketCount}` : ""}</>} url="basket"/>
    </nav>
  </header>
}