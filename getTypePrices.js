const getTypePrices = (item, prices) => {
  return prices.filter((price) => {
    return price['product-type'] === item['product-type'];
  });
};

module.exports = getTypePrices;
