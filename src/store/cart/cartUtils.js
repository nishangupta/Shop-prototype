export const cartAdd = (products, productToAdd) => {
  const existingProduct = products.find(
    (product) => product.id === productToAdd.id
  )
  if (existingProduct) {
    return products.map((product) =>
      product.id === productToAdd.id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    )
  }

  return [...products, { ...productToAdd, quantity: 1 }]
}
