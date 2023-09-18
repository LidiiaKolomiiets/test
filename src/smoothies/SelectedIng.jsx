import React from "react";
import smoothy from "./imageSmoothies/smoothy.png";
import './smoothiesIng.css';

export default ({ data }) => {
  
  let sum = 0;
  data?.forEach(element => {
    sum = sum + element.price
  });


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
      <p className="item-img">Оберіть об'єм :</p>
      <div className="price-img">
        <p className="item-img">Ціна : {sum} </p>
        <button className="button-img">Додати в корзину</button>
      </div>
    </section>
  );
};