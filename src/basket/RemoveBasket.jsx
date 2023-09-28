import React, { useState } from "react";
import './basket.css'
import { useDispatch } from "react-redux";
import createRemoveBasket from "../actions/createRemoveBasket.js";


export default ({ id }) => {
    const dispatch = useDispatch();
    const[isConfirmShown, setIsConfirmShown] = useState(false)

    const removeProductModal = () => {
        setIsConfirmShown(true)
    }
    const hideRemoveProduct = () => {
        setIsConfirmShown(false)
    }
    const removeProduct = () => {
        const existingData = JSON.parse(localStorage.getItem('smoothies')) || [];

        const newSmoothies = existingData.filter(p => p.id !== id)

        localStorage.setItem('smoothies', JSON.stringify(newSmoothies));
 
        dispatch(createRemoveBasket({ id }));
    };


    return <><button className="remove-basket" onClick={removeProductModal}>X</button>
        {isConfirmShown && <div className="modal-bg">
            <h3>Підтвердіть видалення</h3>
            <p>Ви дійсно хочете видалити ?</p>
            <button className="delete-btn" onClick={removeProduct}>Ок</button>
            <button className="delete-btn" onClick={hideRemoveProduct}>Cancel</button>
        </div>
        }</>
}