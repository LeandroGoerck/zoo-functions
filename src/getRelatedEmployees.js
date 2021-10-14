const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  let isManagerFlag = false;
  employees.forEach((employee) => {
    if (employee.managers.some((mangID) => mangID === id) === true) {
      isManagerFlag = true;
    }
  });
  return isManagerFlag;
}

function getRelatedEmployees(managerId) {
  const arrayNames = [];
  if (isManager(managerId)) {
    employees.forEach((employee, index) => {
      if (employee.managers.some((manIds) => manIds === managerId)) {
        arrayNames.push(`${employee.firstName} ${employee.lastName}`);
      }
    });
    return arrayNames;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
