const readJSONToObject = require('./helpers/readJSONToObject');
const getTypePrices = require('./getTypePrices');
const findPriceByOptions = require('./findPriceByOptions');

const main = async () => {
  // Accept two arguments from the command line, first is a cart, the second a list of base prices.
  const [, , cartFileLocation, pricesFileLocation] = [...process.argv];

  // Read the files from location given back as objects. Currently sequential, could be made parallel if files are large.
  const cart = await readJSONToObject(cartFileLocation);
  const prices = await readJSONToObject(pricesFileLocation);

  //  Set up a total to track the cost
  let total = 0;

  //  iterate over the cart object and look up each item in the price object then add to the total
  for (itemKey in cart) {
    const item = cart[itemKey];
    // Get the items from the price list that correspond to the item type of this item.
    const itemPrices = getTypePrices(item, prices);
    // Find the matching options version and add its base price to the total
    itemPrices.forEach((itemPrice) => {
      total += findPriceByOptions(item, itemPrice);
    });
  }
  //  return final cost to the user
  console.log(total);
  return `${total}\n`;
};

main();
