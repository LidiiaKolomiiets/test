import React, { useState } from "react";

import './smoothies.css';
import SelectedIng from './SelectedIng.jsx'

import fruits from "./imageSmoothies/01_fruits-280x355-1-280x355.jpg";
import vegetable from "./imageSmoothies/02_vegetables-280x355.jpg"

const dropDownFruits = [{
  name: "Банан",
  price: 200
},
{
  name: "Яблука",
  price: 150
},
{
  name: "Манго",
  price: 400
},
];
const dropDownVegetables = [{
  name: "Морква",
  price: 80
},
{
  name: "Буряк",
  price: 60
},
{
  name: "Помідор",
  price: 120
}]


export default () => {

  const [isVegetablesDropDownOpen, setIsVegetablesDropDownOpen] = useState(false);
  const [isFruitsDropDownOpen, setIsFruitsDropDownOpen] = useState(false);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const onVegetablesDropDownToggle = event => {
    event.stopPropagation();
    setIsVegetablesDropDownOpen(!isVegetablesDropDownOpen);
    setIsFruitsDropDownOpen(false);
  }

  const onFruitsDropDownToggle = event => {
    event.stopPropagation();
    setIsFruitsDropDownOpen(!isFruitsDropDownOpen);
    setIsVegetablesDropDownOpen(false)
  }

  const productsSmoothies = newValue => {
    if (newValue && selectedIngredients.length < 5) {
      setSelectedIngredients([...selectedIngredients, newValue]);
    }
    else {
      alert("Не можна вибрати більше 5 інгредієнтів!")
    }
  }


  return <div className="smoothies">
    <div>
    <h1 className="title">Оберіть інгредієнти для вашого смузі</h1>
    <div className="conteiner">
      <div className="block-ingredient">
        <button className="button-ing" onClick={onFruitsDropDownToggle}>
        <img className="img-ingredient" src={fruits}/>
        <h2 className="title-ingredient" >Фрукти</h2>
        </button>
        {isFruitsDropDownOpen && <ol className="list-ingredient">
          {dropDownFruits.map((item, index) => {
            return <li className="item-ingredient" key={index} onClick={() => productsSmoothies(item)}>
              <h3 className="ingredient">{item.name}</h3>
              <p className="ingredient">({item.price} грн / 1 літр)</p>
            </li>
          })}</ol>}
      </div>
      <div className="block-ingredient">
      <button className="button-ing" onClick={onVegetablesDropDownToggle}>
      <img className="img-ingredient" src={vegetable}/>
        <h2 className="title-ingredient">Овочі</h2>
        </button>
        {isVegetablesDropDownOpen && <ol className="list-ingredient">
          {dropDownVegetables.map((items, index) => {
            return <li className="item-ingredient" key={index} onClick={() => productsSmoothies(items)}>
              <h3 className="ingredient"> {items.name}</h3>
              <p className="ingredient">({items.price} грн / 1 літр)</p>
            </li>
          })}</ol>}
      </div>
    </div>
    </div>
    <SelectedIng data={selectedIngredients} />
  </div>
}