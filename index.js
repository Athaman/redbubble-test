const calculateCart = require('./calculateCart');

const main = () => {
  // Accept two arguments from the command line, first is a cart, the second a list of base prices.
  const [, , cartFileLocation, pricesFileLocation] = [...process.argv];
  const cartCost = calculateCart(cartFileLocation, pricesFileLocation);
  return `${cartCost}\n`;
};

main();
