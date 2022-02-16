// const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getLocationsObject() {
  const locationsObject = data.species.reduce((accumulator, currentValue) => {
    const { location } = currentValue;
    if (!accumulator[location]) {
      accumulator[location] = [];
    }
    return accumulator;
  }, {});
  return locationsObject;
}

function getAnimalsByLocation() {
  return data.species.reduce((accumulator, currentValue) => {
    accumulator[currentValue.location].push(currentValue.name);
    return accumulator;
  }, getLocationsObject());
}

function createResidentObject(sorted, sex) {
  return data.species.reduce((accumulator, currentValue) => {
    const { location, name, residents } = currentValue;
    let residentsNames;
    if (!sex) {
      residentsNames = residents.map((resident) => resident.name);
    } else {
      residentsNames = residents.filter((resident) => resident.sex === sex)
        .map((resident) => resident.name);
    }

    if (sorted) {
      residentsNames.sort();
    }

    accumulator[location].push({ [name]: residentsNames });
    return accumulator;
  }, getLocationsObject());
}

function getAnimalMap(options = {}) {
  const { includeNames = false, sorted, sex } = options;
  if (options.includeNames) {
    return createResidentObject(sorted, sex);
  }
  if (!options || !options.includeNames) {
    return getAnimalsByLocation();
  }
}

module.exports = getAnimalMap;
