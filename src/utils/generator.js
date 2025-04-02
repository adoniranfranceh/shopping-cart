export const generatorRandomProduct = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 10,
      quantity: 1
    },
    {
      id: 2,
      name: 'Product 2',
      price: 20,
      quantity: 1
    },
    {
      id: 3,
      name: 'Product 3',
      price: 30,
      quantity: 1
    },
    {
      id: 4,
      name: 'Product 4',
      price: 40.50,
      quantity: 1
    },
    {
      id: 5,
      name: 'Product 5',
      price: 50,
      quantity: 1
    }
  ];

  const random = Math.floor(Math.random() * products.length)

  return products[random];
}
