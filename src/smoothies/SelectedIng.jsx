import React, { useState, useEffect } from "react";
import smoothy from "./imageSmoothies/smoothy.png";
import './smoothiesIng.css';
import { useDispatch } from "react-redux";
import createAddBasket from "../actions/createAddBasket.js";

export default ({ data, onDataUpdate }) => {
  const dispatch = useDispatch()
  const [selectedVolume, setSelectedVolume] = useState("1");
  const [sum, setSum] = useState(0);
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const tempSum = data?.reduce((acc, element) => {
      return acc + element.price * parseFloat(selectedVolume);
    }, 0);
    const newSum = Math.round(tempSum / data.length);
    setSum(newSum);
  }, [data, selectedVolume]);

  const handleRadioChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedVolume(selectedValue);
  };


  const addBasket = () => {
    const newSmoothies = {
      volume: selectedVolume,
      price: sum,
      ingredients: data,
      id: 'id' + Date.now()
    }
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
    dispatch(createAddBasket(newSmoothies));
    onDataUpdate([]);
    setSelectedVolume('1')
    setShowModal(true)

    const existingData = JSON.parse(localStorage.getItem('smoothies')) || [];
    existingData.push(newSmoothies);
    localStorage.setItem('smoothies', JSON.stringify(existingData));
  }



  return (
    <section className="conteiner-img">
      <h2>Обрані інгредієнти</h2>
      <div className="block-img">
        <ul>
          {data.map((item, index) => (
            <li className="item-img" key={index}>{item.name}</li>
          ))}
        </ul>
        <img className="image-img" src={smoothy} />
      </div>
      <div>
        <p className="item-img">Оберіть об'єм :</p>
        <input className="input-ing"
          type="radio"
          id="0.2"
          name="volume"
          value="0.2"
          checked={selectedVolume === "0.2"}
          onChange={handleRadioChange}
        />
        <label htmlFor="0.2">0.2 літра</label>

        <input className="input-ing"
          type="radio"
          id="0.5"
          name="volume"
          value="0.5"
          checked={selectedVolume === "0.5"}
          onChange={handleRadioChange}
        />
        <label htmlFor="0.5">0.5 літра</label>

        <input className="input-ing"
          type="radio"
          id="1"
          name="volume"
          value="1"
          checked={selectedVolume === "1"}
          onChange={handleRadioChange}
        />
        <label htmlFor="1">1 літр</label>
      </div>
      <div className="price-img">
        <p className="item-img">Ціна : {sum > 0 ? `${sum}` : "0"} грн. </p>
        <button className="button-img" onClick={addBasket}>Додати в корзину</button>
      </div>
      {showModal &&
        <div className="smoothies-modal">
          <h2>Смузі додано!</h2>
        </div>}
    </section>
  );
};