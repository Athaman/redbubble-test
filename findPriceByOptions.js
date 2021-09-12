const findPriceByOptions = (item, price) => {
  const priceOptions = price.options;
  const optionKeys = Object.keys(priceOptions);
  const itemOptions = item.options;
  const basePrice = price['base-price'];
  const artistMarkup = item['artist-markup'] / 100;
  const quantity = item['quantity'];

  for (let i = 0; i < optionKeys.length; i++) {
    const key = optionKeys[i];
    // If any options don't match return 0
    if (!priceOptions[key].includes(itemOptions[key])) {
      return 0;
    }
  }
  return (basePrice + Math.round(basePrice * artistMarkup)) * quantity;
};

module.exports = findPriceByOptions;
