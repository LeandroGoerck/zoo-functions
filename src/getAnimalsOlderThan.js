const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const specieObj = species.find((specie) => specie.name === animal);
  const residents = specieObj.residents.every((resident) => resident.age > age);
  return residents;
}

module.exports = getAnimalsOlderThan;
