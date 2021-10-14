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

// feito exercicios com ajuda de Christian Lessa e Denilson Santuchi
