const readJSONToObject = require('./readJSONToObject');

describe('Unit tests for readJSONToObject', () => {
  const path = './examples/base-prices.json';
  test('readJSONToObject should return an object when given a valid path', () => {
    expect(typeof readJSONToObject(path)).toBe('object');
  });
});
