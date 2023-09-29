const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'addProduct': {
            return { ...state, sales: [...state.sales, ...action.payload] };
        }
        case 'addFruits': {
            return { ...state, fruits: [...state.fruits, ...action.payload] };
        }
        case 'addVegetables': {
            return { ...state, vegetables: [...state.vegetables, ...action.payload] };
        }
        case 'addBasket': {
            const newBasket = [...state.basket, action.payload];
            localStorage.setItem('smoothies', JSON.stringify(newBasket));

            return { ...state, basket: newBasket };
        }
        case 'removeProduct': {
            return { ...state, basket: [...state.basket.filter(p => p.id !== action.payload.id)] }
        }
        case 'addOrderForm': {
            return { ...state, order: [...state.order, action.payload] }
        }
        default: {
            return state
        }
    }
}

export default reducer