const readJSONToObject = require('./helpers/readJSONToObject');

const main = async () => {
  // Accept two arguments from the command line, first is a cart, the second a list of base prices.
  const [, , cartFileLocation, pricesFileLocation] = [...process.argv];
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
      // console.log(findPriceByOptions(item, itemPrice));
      total += findPriceByOptions(item, itemPrice);
    });
  }
  //  return final cost to the user
  console.log(total);
  // return `${total}\n`;
};

main();

const getTypePrices = (item, prices) => {
  return prices.filter((price) => {
    return price['product-type'] === item['product-type'];
  });
};

const findPriceByOptions = (item, price) => {
  const optionKeys = Object.keys(price.options);
  const priceOptions = price.options;
  const itemOptions = item.options;
  const basePrice = price['base-price'];
  const artistMarkup = item['artist-markup'] / 100;
  const quantity = item['quantity'];

  for (let i = 0; i < optionKeys.length; i++) {
    const key = optionKeys[i];
    if (!priceOptions[key].includes(itemOptions[key])) {
      return 0;
    }
  }
  return (basePrice + Math.round(basePrice * artistMarkup)) * quantity;
};
