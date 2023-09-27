const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'addProduct': {
            return {...state, sales: [...state.sales, ...action.payload]} ;
        }
        case 'addFruits': {
            return {...state, fruits: [...state.fruits, ...action.payload]} ;
        }
        case 'addVegetables': {
            return {...state, vegetables: [...state.vegetables, ...action.payload]} ;
        }
        case 'addBasket': {
            return {...state, basket: [...state.basket, action.payload]} ;
        }
        default: {
            return state
        }
    }
}

export default reducer