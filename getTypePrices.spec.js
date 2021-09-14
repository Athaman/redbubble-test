const getTypePrices = require('./getTypePrices');

describe('Unit tests for getTypePrices', () => {
  const exampleItem = {
    'product-type': 'hoodie',
    options: { size: 'xl', colour: 'dark', 'print-location': 'back' },
    'artist-markup': 30,
    quantity: 1,
  };

  const prices = [
    {
      'product-type': 'hoodie',
      options: { colour: ['white', 'dark'], size: ['small', 'medium'] },
      'base-price': 3800,
    },
    {
      'product-type': 'sticker',
      options: {
        size: ['small'],
      },
      'base-price': 221,
    },
  ];

  test('An array of prices with one matching item type should return an array of length 1', () => {
    expect(getTypePrices(exampleItem, prices).length).toBe(1);
  });
});
