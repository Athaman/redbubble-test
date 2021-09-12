const { promises: fs } = require('fs');

const readJSONToObject = async (fileLocation) => {
  // Read the files from the local drives and save them as objects cart and prices
  try {
    const jsonString = await fs.readFile(fileLocation, 'utf-8');
    const object = JSON.parse(jsonString);
    return object;
  } catch (e) {
    console.error(e);
  }
};

module.exports = readJSONToObject;
