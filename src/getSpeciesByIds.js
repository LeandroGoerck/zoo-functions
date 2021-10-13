const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids === undefined) {
    return [];
  }
  const newArray = [];
  ids.forEach((specie) => newArray.push(species.find((specie2) => specie2.id === specie)));
  return newArray;
}

module.exports = getSpeciesByIds;
