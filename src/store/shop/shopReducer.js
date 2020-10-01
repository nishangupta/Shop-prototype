const InitialState = {
  products: [
    {
      id: 1,
      title: 'Winter jacket foam inside',
      price: 3400,
      desc:
        'Winter jacket for men 2020,Acreclic build and good refine quality.',
      imgUrl: 'assets/product.jpg',
    },
    {
      id: 2,
      title: 'Watch 2020 brand new',
      price: 2000,
      desc: 'Popular watch 2020 buy with a heavy discount this november.',
      imgUrl: 'assets/product2.jpg',
    },
    {
      id: 3,
      title: 'Jacket men 2002',
      price: 4000,
      desc:
        'Winter jacket for men 2020,Latest fashion 2020, New for men colletion',
      imgUrl: 'assets/product3.jpg',
    },
    {
      id: 4,
      title: 'Mouse Wired gaming gtx',
      price: 2400,
      desc:
        'Gaming mouse Handy and good build quality and many more exiciting features.',
      imgUrl: 'assets/product4.jpg',
    },
    {
      id: 5,
      title: 'Washinh machine',
      price: 42000,
      desc:
        'Home washing machine, Build for great quality and eterement temperature,Fast and efficient',
      imgUrl: 'assets/product5.jpg',
    },
    {
      id: 6,
      title: 'Acustic Guitar',
      price: 4500,
      desc:
        'Tuna Acustic guitar, New Model Good quality Build with metal wire strings and 22 fret board with plugged in',
      imgUrl: 'assets/guitar.jpg',
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
