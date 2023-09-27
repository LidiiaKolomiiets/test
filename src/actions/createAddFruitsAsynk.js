export default () => {
    return (dispatch, getState) => {
        fetch('/fruits')
         .then(resp => resp.json())
         .then(fruits => {
            dispatch({type: 'addFruits', payload: fruits})
         })
    }
}