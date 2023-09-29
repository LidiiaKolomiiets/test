const products = [
    {
      name: 'Ягідний смузі',
      price: 280,
      image: '/images/image.jpeg',
      ingredients: [{
        name: "Полуниця",
        price: 300,
        id: 'id' + Date.now()
      }]
    },
    {
      name: 'Смузі із манго',
      price: 380,
      image: '/images/image03.jpg',
      ingredients: [{
        name: "Манго",
        price: 400,
        id: 'id' + Date.now()
      }]
    },
    {
      name: 'Банановий смузі',
      price: 150,
      image: '/images/image01.jpeg',
      ingredients: [{
        name: "Банан",
        price: 200,
        id: 'id' + Date.now()
      }]
    }]

export default products