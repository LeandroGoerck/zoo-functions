const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';

function getOldestFromFirstSpecies(id) {
  const employeeObj = employees.find((employee) => employee.id === id);
  const firstResponsibleForID = employeeObj.responsibleFor[0];
  const specieObj = data.species.find((specie) => specie.id === firstResponsibleForID);
  const oldestSpecieObj = specieObj.residents.sort((residentA, residentB) => {
    if (residentB.age > residentA.age) {
      return 1;
    }
    if (residentB.age < residentA.age) {
      return -1;
    }
    return 0;
  })[0];
  const { name, sex, age } = oldestSpecieObj;
  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;

console.log(getOldestFromFirstSpecies(stephanieId));
