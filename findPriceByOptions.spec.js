const findPriceByOptions = require('./findPriceByOptions');

describe('Unit tests for findPriceByOptions', () => {
  const singleItem = {
    'product-type': 'hoodie',
    options: { size: 'xl', colour: 'dark', 'print-location': 'back' },
    'artist-markup': 30,
    quantity: 1,
  };

  const doubleItem = {
    'product-type': 'hoodie',
    options: { size: 'xl', colour: 'dark', 'print-location': 'back' },
    'artist-markup': 30,
    quantity: 2,
  };

  const unmatchedPrice = {
    'product-type': 'hoodie',
    options: { colour: ['white', 'dark'], size: ['small', 'medium'] },
    'base-price': 3800,
  };

  const matchedPrice = {
    'product-type': 'hoodie',
    options: { colour: ['dark'], size: ['xl', '2xl', '3xl'] },
    'base-price': 4368,
  };

  test('A check against an unmatched price should return 0', () => {
    expect(findPriceByOptions(singleItem, unmatchedPrice)).toBe(0);
  });
  test('A check against a matched price should return that prices value with artist markup', () => {
    expect(findPriceByOptions(singleItem, matchedPrice)).toBe(5678);
  });
  test('When the quantity is not one the cost returned should factor that in', () => {
    expect(findPriceByOptions(doubleItem, matchedPrice)).toBe(11356);
  });
});
