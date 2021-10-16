const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getEmployeesID = (object) => {
  const employeeObj = employees.find((employee) => employee.firstName === object.name);
  return employeeObj.id;
};

const getEmployeesFullName = (object) => {
  const employeeObj = employees.find((employee) => employee.firstName === object.name);
  return `${employeeObj.firstName} ${employeeObj.lastName}`;
};

const getResponsiblesID = (object) => {
  const employeeObj = employees.find((employee) => employee.firstName === object.name);
  return employeeObj.responsibleFor;
};

const getSpecieNameByID = (specieID) => {
  const specieObj = species.find((specie) => specie.id === specieID);
  return specieObj.name;
};

const getResponsiblesNames = (object) => {
  const responsiblesIDArray = getResponsiblesID(object);
  const responsibleSpecieNames = responsiblesIDArray.map((specie) => getSpecieNameByID(specie));
  return responsibleSpecieNames;
};

const getLocationsbyNames = (nameArray = []) => {
  const arrayLocations = [];
  nameArray.forEach((name) => {
    const specieObj = species.find((specie) => specie.name === name);
    arrayLocations.push(specieObj.location);
  });
  return arrayLocations;
};

const normaliseObject = (object) => {
  const { name = 'noName', id = 'noID' } = object;
  let firstName = '';
  if (name !== 'noName' && name !== undefined) {
    firstName = employees
      .find((employee) => employee.firstName === name || employee.lastName === name).firstName;
  }
  if (id !== 'noID' && id !== undefined) {
    firstName = employees
      .find((employee) => employee.id === id).firstName;
  }
  return { name: firstName };
};

function getEmployeesObject(object) {
  const normObj = normaliseObject(object);
  const id = getEmployeesID(normObj);
  const fullName = getEmployeesFullName(normObj);
  const species2 = getResponsiblesNames(normObj);
  const locations = getLocationsbyNames(species2);
  const employeeObj = {
    id,
    fullName,
    species: species2,
    locations,
  };
  return employeeObj;
}

function getEmployeesCoverage(object) {
  const employeeList = [];
  if (object === undefined) {
    employees.forEach((employee) => {
      employeeList.push(getEmployeesObject({ name: employee.firstName }));
    });
    return employeeList;
  }
  const employeeExists = employees.find(
    (employee) =>
      employee.id === object.id
      || employee.firstName === object.name
      || employee.lastName === object.name,
  );
  if (!employeeExists) {
    throw new Error('Informações inválidas');
  }
  return getEmployeesObject(object);
}

module.exports = getEmployeesCoverage;
