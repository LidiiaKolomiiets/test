import React from "react";


import MainPart from "./MainPart.jsx";
import './main.css';
import img01 from './imageMain/image01.jpeg';
import img02 from './imageMain/image.jpeg';
import img03 from './imageMain/image03.jpg'

const product = [
{
    name: 'Ягідний смузі',
    image: img02,
    price: '550 грн'
},
{
    name: 'Смузі із манго',
    image: img03,
    price: '800 грн'
},
{
    name: 'Банановий смузі',
    image: img01,
    price: '500 грн'
}]

export default () => {
    return <main className="main">
        <h1 className="main-title">Акційні смузі</h1>
        <ul className="main-list">
            {product.map((item, index) => {
                return <li key={index} className="main-item">
                    < img src={item.image} className="main-img" />
                    <h2>{item.name}</h2>
                    <p className="main-price">{item.price}</p>
                    <button className="main-button">До корзини</button>
                </li>
            })}
        </ul>
        <MainPart />
    </main>
}