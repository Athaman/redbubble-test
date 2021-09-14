const readJSONToObject = require('./readJSONToObject');

describe('Unit tests for readJSONToObject', () => {
  const path = './examples/base-prices.json';
  test('readJSONToObject should return an object when given a valid path', () => {
    expect(typeof readJSONToObject(path)).toBe('object');
  });
});

// TODO - test errors for non existing paths
// TODO - test schema for carts and price lists conforms (out of spec)
