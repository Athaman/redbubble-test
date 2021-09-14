const calculateCart = require('./calculateCart');

describe('Integration tests for the index.js main function', () => {
  const cart1 = './examples/cart-4560.json';
  const cart2 = './examples/cart-9363.json';
  const cart3 = './examples/cart-11356.json';
  const prices = './examples/base-prices.json';
  test('cart 1 returns 4560', async () => {
    const data = await calculateCart(cart1, prices);
    // const data2 = await calculateCart(cart1, prices);
    expect(data).toBe(4560);
  });
  test('cart 2 returns 9363', async () => {
    const data = await calculateCart(cart2, prices);
    // const data2 = await calculateCart(cart1, prices);
    expect(data).toBe(9363);
  });
  test('cart 3 returns 11356', async () => {
    const data = await calculateCart(cart3, prices);
    // const data2 = await calculateCart(cart1, prices);
    expect(data).toBe(11356);
  });
});
