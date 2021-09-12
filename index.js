const readJSONToObject = require('./helpers/readJSONToObject');

const main = async () => {
  // Accept two arguments from the command line, first is a cart, the second a list of base prices.
  const [, , cartFileLocation, pricesFileLocation] = [...process.argv];
  const cart = await readJSONToObject(cartFileLocation);
  const prices = await readJSONToObject(pricesFileLocation);

  //  Set up a total to track the cost
  let total = 0;

  //  iterate over the cart object and look up each item in the price object then add to the total
  Object.keys(cart).forEach((itemKey) => {
    const item = cart[itemKey];
    // Get the items from the price list that correspond to the item type of this item.
    const itemPrices = prices.filter((price) => {
      return price['product-type'] === item['product-type'];
    });
    // Find the matching options version and add its base price to the total
    itemPrices.forEach((itemPrice) => {
      const optionKeys = Object.keys(itemPrice.options);
      for (let i = 0; i < optionKeys.length; i++) {
        if (
          !itemPrice.options[optionKeys[i]].includes(
            item.options[optionKeys[i]]
          )
        ) {
          return;
        }
      }
      total +=
        (itemPrice['base-price'] +
          Math.round((itemPrice['base-price'] * item['artist-markup']) / 100)) *
        item['quantity'];
    });
  });
  //  return final cost to the user
  console.log(total);
  return `${total}\n`;
};

main();
