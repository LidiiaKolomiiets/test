export default () => {
    return (dispatch, getState) => {
        fetch('/vegetables')
         .then(resp => resp.json())
         .then(vegetables => {
            dispatch({type: 'addVegetables', payload: vegetables})
         })
    }
}