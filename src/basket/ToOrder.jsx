import React, { useState } from "react";
import './order.css'
import { useDispatch } from "react-redux";
import craeteOrderForm from "../actions/craeteOrderForm";
import isValid from "./isValidForm.js";
import InfoOrder from "./InfoOrder.jsx";

export default ({sum}) => {
    const dispatch = useDispatch()
    const [showAdress, setShowAdress] = useState(false);
    const [newNumber, setNewNumber] = useState('');
    const [newName, setNewName] = useState('')
    const [infoOrder, setInfoOrder] = useState(false)
    const [orderForm, setOrderForm] = useState(true)

    const onChangeValue = (event) => {
        const changeValue = event.target.value;
        if (changeValue === 'delivery') { setShowAdress(true) }
        else { setShowAdress(false) }
        return changeValue
    }

    const addOrderForm = (event) => {
        event.preventDefault();

        const orderForm = {
            name: newName,
            telephone: newNumber,
            price: sum

        }
        if (isValid(orderForm, craeteOrderForm(orderForm))) {
            dispatch(craeteOrderForm(orderForm));
            setInfoOrder(true);
            setOrderForm(false);
            localStorage.clear();
        }
        
    }

    return <> {orderForm && <form onSubmit={addOrderForm} className="order-form">
        <h1>Оформлення замовлення</h1>
        <div>
            <label className="order-label" htmlFor="caption">ПІП: </label>
            <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Прізвище, Iм'я"
                id="caption" />
        </div>
        <div>
            <label className="order-label" htmlFor="tel">Телефон:</label>
            <input
                type="text"
                value={newNumber}
                onChange={(e) => setNewNumber(e.target.value)}
                placeholder="+38 099 0000000"
                id="tel" />
        </div>
        <div onChange={onChangeValue}>
            <p>Виберіть спосіб доставки </p>
            <label htmlFor="radio">Доставка</label>
            <input type="radio"
                id="radio"
                name="radio"
                value="delivery" />
            <label htmlFor="radio1">Самовивіз</label>
            <input type="radio"
                id="radio1"
                name="radio"
                value="pickup"
                defaultChecked />
        </div>
        {showAdress && <div>
            <label className="order-label" htmlFor="adress">Адреса для відправки:</label>
            <input type="text" id="adress" placeholder="Місто, вулиця, будинок" ></input>
        </div>}
        <button className="send-order" type="submit" value="Оформити" >Оформити</button>
    </form>}
        {infoOrder && <InfoOrder />}
    </>
}