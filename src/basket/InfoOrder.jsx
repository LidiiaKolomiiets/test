import React, { useState } from "react";
import './order.css'

import { useSelector } from "react-redux";


export default () => {
    const infoOrder = useSelector(state => state.order);
    const smoothie = useSelector(state => state.basket);

    let sum = 0;
    smoothie.forEach(element => {
        sum = Math.round(sum + element.price)
    });



    return <div className="info-order"><h1>Інформація про замовлення</h1>
        <ol>{infoOrder.map((item, index) => {
            return <li className="item-order" key={index}>
                <p >ПІП : {item.name}</p>
                <p>Номер телефону: {item.telephone}</p>
            </li>
        })}</ol>
        <ol className="info-block">{smoothie.map((item, index) => {
            return <li className="info-item" key={item.id}>
                <p>Власне смузі №{index + 1} </p>
                <ol className="info-ingredient">{item.ingredients.map((element, id) => {
                    return <li key={id}>{(element.name)} </li>
                })}</ol>
                <p >Ціна : {item.price} грн.</p>
                <p >Об'єм : {item.volume} л.</p>
            </li>
        })}</ol>
        <p>Ціна за замовлення: {sum} грн.</p>
    </div>
}