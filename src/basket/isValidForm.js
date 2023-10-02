const isValid = (orderForm, action) => {
    const patternName = /^[a-zA-Zа-яА-ЯёЁ]+( [a-zA-Zа-яА-ЯёЁ]+)?$/ //checks for last name - first name
    const patternNumber = /^\+380\d{3}\d{2}\d{2}\d{2}$/
    
    if (!patternName.test(orderForm.name)) {
      alert('Помилка вводу імені! Введіть тільки букви.')
    } 
    else if (!patternNumber.test(orderForm.telephone)) {
      alert('Помилка вводу телефону!')
    }
    else if (orderForm.telephone.trim() === "") {
      alert('Введіть номер телефону!')
    }
    else {
      return action;
    }
  }
  
  export default isValid;
  