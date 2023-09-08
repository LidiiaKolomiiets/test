import React from "react";

import logo from './logo.png'
import NavItem from './NavItem.jsx';
import './headers.css'


export default () => {
  return <header className="header">
    <img src={logo} alt="Моє зображення" />
    <nav className="nav">
    < NavItem title="Головна" url="/" />
    < NavItem title="Смузі конструктор" url="smoothies" />
    < NavItem title="Про нас" url="about" />
    </nav>
  </header>
}