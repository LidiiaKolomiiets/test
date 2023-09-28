const isValid = (orderForm, action) => {
    const patternName = /^[a-zA-Zа-яА-ЯёЁ]+$/
    const patternNumber = /^\+380\d{3}\d{2}\d{2}\d{2}$/
    if(patternNumber.test(orderForm.telephone) && patternName.test(orderForm.name) && orderForm.telephone.trim()!== ""){
        return action
    }
    else if(!patternNumber.test(orderForm.telephone)){
        alert('Помилка вводу телефону!')
    }
    else{alert('Помилка вводу імені!')}
}

export default isValid