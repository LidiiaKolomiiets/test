import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector.js";


import MainPart from "./MainPart.jsx";
import './main.css';
import './imageMain/image01.jpeg';
import './imageMain/image.jpeg';
import './imageMain/image03.jpg'

export default () => {
    const salesProduct = useSelector(state => state.sales)


    return <main className="main">
        <h1 className="main-title">Акційні смузі</h1>
        <ul className="main-list">
            {salesProduct.map((item, index) => {
                return <li key={index} className="main-item">
                    <img src={item.image} className="main-img" />
                    <h2>{item.name}</h2>
                    <p className="main-price">{item.price}</p>
                    <button className="main-button">До корзини</button>
                </li>
            })}
        </ul>
        <MainPart />
    </main>
}