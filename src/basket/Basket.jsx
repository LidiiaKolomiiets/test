import React from "react";
import { useSelector } from "react-redux";
import './basket.css'


export default () => {
    const smoothie = useSelector(state => state.basket)

    let sum = 0;
    smoothie.forEach(element => {
        sum = Math.round(sum + element.price)
    });


    return <> <ol className="basket-block">{smoothie.map((item, index) => {
        return <li className="basket-item" key={index}>
            <p>Власне смузі №{index+1} </p>
            <ol className="basket-ingredient">{item.ingredients.map((element, id) => {
                return <li key={id}>{(element.name)} </li>
            })}</ol>
            <p >Ціна : {item.price} грн.</p>
            <p >Об'єм : {item.volume} л.</p>
        </li>
    })}</ol>
        <p>Ціна разом : {sum}</p>
    </>
}