const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpecieByLocationList(location) {
  const array = [];
  const specieByLocationObjList = data.species.filter((specie) => specie.location === location);
  specieByLocationObjList.forEach((specie2) => array.push(specie2.name));
  return array;
}

function getSpecieNameBySpecie(specieName) {
  const arrayNames = [];
  const specieObjs = species.filter((specie) => specie.name === specieName);
  return specieObjs.forEach((specieObj) => specieObj.residents.map((resident) => console.log(resident.name)));
}

function getAnimalMap(options) {
  if (options !== undefined || !options) {
    const animalObj = {
      NE: getSpecieByLocationList('NE'),
      NW: getSpecieByLocationList('NW'),
      SE: getSpecieByLocationList('SE'),
      SW: getSpecieByLocationList('SW'),
    };
    return animalObj;
  }
  if (options.includeNames) {
    const animalObj = {
    };
    return animalObj;
  }
}

module.exports = getAnimalMap;
// console.log(getSpecieByLocationList('NE'));
// console.log(getAnimalMap());
// const options = { sex: 'female' };
// console.log(getAnimalMap(options));

console.log(getSpecieNameBySpecie('lions'));
