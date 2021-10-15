const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const obj = {};
  const child = entrants.filter((entrant) => entrant.age < 18).length;
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const senior = entrants.filter((entrant) => entrant.age >= 50).length;
  obj.child = child;
  obj.adult = adult;
  obj.senior = senior;
  return obj;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const obj = countEntrants(entrants);
  const totalPrice = obj.child * data.prices.child
  + obj.adult * data.prices.adult
  + obj.senior * data.prices.senior;
  return totalPrice;
}

module.exports = { calculateEntry, countEntrants };

// Concluido com a ajuda de Christian Lessa e Denilson Santuchi
