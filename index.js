const { promises: fs } = require('fs');

const main = async () => {
  // Accept two arguments from the command line, first is a cart, the second a list of base prices.
  const [, , cartFile, pricesFile] = [...process.argv];

  // Read the files from the local drives and save them as objects cart and prices
  const cart = JSON.parse(await fs.readFile(cartFile, 'utf-8'));
  const prices = JSON.parse(await fs.readFile(pricesFile, 'utf-8'));
  console.log(cart);
  //  Set up a total to track the cost
  let total = 0;

  //  iterate over the cart object and look up each item in the price object then add to the total
  Object.keys(cart).forEach((item) => {
    // Get the items from the price list that correspond to the item type of this item.
    const itemPrices = prices.filter(
      (price) => price['item-type'] === item['item-type']
    );
    console.log(JSON.stringify(itemPrices));
    // Find the matching options version and add its base price to the total
  });
  //  return final cost to the user
};

main();
