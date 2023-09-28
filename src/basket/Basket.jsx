import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import './basket.css'
import RemoveBasket from "./RemoveBasket.jsx";
import ToOrder from "./ToOrder.jsx";


export default () => {
    const smoothie = useSelector(state => state.basket);
    const [showForm, setShowForm] = useState(false);
    const [showProduct, setShowProduct] = useState(false);
    const [showModal, setShowModal] = useState(smoothie.length === 0);

    const navigate = useNavigate();

    const redirectToConstructor = () => {
        navigate('/smoothies');
    }

    let sum = 0;
    smoothie.forEach(element => {
        sum = Math.round(sum + element.price)
    });

    const toggleForm = () => {
        setShowForm(true);
        setShowProduct(!showProduct)
    }
    useEffect(() => {
        if (smoothie.length !== 0) {
            setShowProduct(true)
        }
        else {
            setShowProduct(false)
            setShowModal(true)
        }
    }, [smoothie]);


    return <>{showModal && <div className="basket-modal">
        <h1>Ще нічого не додано!</h1>
        <button className="btn-smoothes" onClick={redirectToConstructor}>Хочу смузі!!!</button>
    </div>}
        {showProduct && <div className="basket-conteiner"><ol className="basket-block">{smoothie.map((item, index) => {
            return <li className="basket-item" key={item.id}>
                < RemoveBasket key={item.id} {...item} />
                <p>Власне смузі №{index + 1} </p>
                <ol className="basket-ingredient">{item.ingredients.map((element, id) => {
                    return <li key={id}>{(element.name)} </li>
                })}</ol>
                <p >Ціна : {item.price} грн.</p>
                <p >Об'єм : {item.volume} л.</p>
            </li>
        })}</ol>
            <div className="basket-order">
                <p>Ціна разом : {sum} грн.</p>
                <button className="send-order" onClick={toggleForm}>Оформити замовлення</button>
            </div>
        </div>}
        {showForm && <ToOrder />}
    </>
}