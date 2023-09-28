import './styles.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './App.jsx';
import reducer from './reducers/reducer.js';
import createAddAkcioAcynk from './actions/createAddAkcioAcynk.js';
import createAddFruitsAsynk from './actions/createAddFruitsAsynk.js';
import createAddVegetablesAcynk from './actions/createAddVegetablesAcynk.js';


const rootEl = document.getElementById('root');
const root = ReactDOM.createRoot(rootEl);


const initialState = {
    sales: [],
    fruits: [],
    vegetables: [],
    basket: JSON.parse(localStorage.getItem('smoothies')) || [],
    order: []
}

const store = createStore(reducer, initialState,applyMiddleware(thunk))
store.dispatch(createAddAkcioAcynk())
store.dispatch(createAddFruitsAsynk())
store.dispatch(createAddVegetablesAcynk())


root.render(
   <Provider store={store}><App /></Provider> 
) 