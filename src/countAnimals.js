const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((acc, specie) => {
      acc[specie.name] = specie.residents.length;
      return acc;
    }, {});
  }
  if (!animal.sex) {
    const { specie: specie2 } = animal;
    const spec = species.find((specie) => specie.name === specie2);
    return spec.residents.length;
  }
  const { specie: specie2 } = animal;
  const spec = species.find((specie) => specie.name === specie2);
  return spec.residents.filter((resident) => resident.sex === animal.sex).length;
}

module.exports = countAnimals;

// console.log(countAnimals());
// console.log(countAnimals({ specie: 'penguins' }));
// console.log(countAnimals({ specie: 'elephants', sex: 'male' }));
