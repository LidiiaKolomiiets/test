export default () => {
    return (dispatch, getState) => {
        fetch('/products')
            .then((resp) => resp.json())
            .then((product) => {
                dispatch({ type: 'addProduct', payload: product });
            });
    };
};
