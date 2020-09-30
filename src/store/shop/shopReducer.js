const InitialState = {
  products: [
    {
      id: 1,
      title: 'Watch 2020 brand new',
      price: 20000,
      desc: 'Popular watch 2020 buy with a heavy discount this november',
      imgUrl: 'assets/product2.jpg',
    },
    {
      id: 2,
      title: 'Winter jacket foam inside',
      price: 15000,
      desc: 'Winter jacket for men 2020',
      imgUrl: 'assets/product.jpg',
    },
  ],
}
const shopReducer = (state = InitialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCT':
      console.log('dispatcher working')
      return state

    default:
      return state
  }
}

export default shopReducer
