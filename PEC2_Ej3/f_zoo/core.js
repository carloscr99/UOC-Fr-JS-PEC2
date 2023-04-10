const { animals, employees, hours, prices } = require('./data');


function entryCalculator(entrants) {

  let totalPrice = 0;

  if (entrants === undefined)
    return 0;

  if (Object.keys(entrants).length === 0)
    return 0;


  for (let type in entrants) {

    totalPrice += prices[type] * entrants[type]

  }

  return totalPrice;


}

function schedule(dayName) {

  const horario = {};

  let frase = "";

  if (dayName === undefined) {


    for (let days in hours) {

      if (hours[days].open == 0) {
        frase = "CLOSED";
      }
      else {

        let horaAbre = '';
        let horaCierra = '';

        if (hours[days].open < 12) {
          horaAbre = hours[days].open.toString() + 'am';
        } else if (hours[days].open === 12) {
          horaAbre = '12pm';
        } else {
          horaAbre = (hours[days].open - 12).toString() + 'pm';
        }


        if (hours[days].close < 12) {
          horaCierra = hours[days].close.toString() + 'am';
        } else if (hours[days].close === 12) {
          horaCierra = '12pm';
        } else {
          horaCierra = (hours[days].close - 12).toString() + 'pm';
        }

        frase = `Open from ${horaAbre} until ${horaCierra}`;
      }

      horario[days] = frase;



    }

    return horario;

  } else {

    if (hours[dayName].open == 0) {
      frase = "CLOSED";
    } else {

      let horaAbre = '';
      let horaCierra = '';

      if (hours[dayName].open < 12) {
        horaAbre = hours[dayName].open.toString() + 'am';
      } else if (hours[dayName].open === 12) {
        horaAbre = '12pm';
      } else {
        horaAbre = (hours[dayName].open - 12).toString() + 'pm';
      }


      if (hours[dayName].close < 12) {
        horaCierra = hours[dayName].close.toString() + 'am';
      } else if (hours[dayName].close === 12) {
        horaCierra = '12pm';
      } else {
        horaCierra = (hours[dayName].close - 12).toString() + 'pm';
      }

      frase = `Open from ${horaAbre} until ${horaCierra}`;
    }

    horario[dayName] = frase

    return horario;
  }

}

function animalCount(species) {

  if (species === undefined) {
    let totalAnimals = {};
    for (let i = 0; i < animals.length; i++) {

      totalAnimals[animals[i].name] = animals[i].residents.length;
    }
    return totalAnimals;
  }
  else {

    let totalAnimals = animals.find(animal => animal.name === species);
    return totalAnimals.residents.length;

  }

}

function animalMap(options) {
  // your code here
}

function animalPopularity(rating) {
  // your code here
}

function animalsByIds(ids) {
  // your code here
}

function animalByName(animalName) {
  // your code here
}

function employeesByIds(ids) {
  // your code here
}

function employeeByName(employeeName) {
  // your code here
}

function managersForEmployee(idOrName) {
  // your code here
}

function employeeCoverage(idOrName) {
  // your code here
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalPopularity,
  animalsByIds,
  animalByName,
  employeesByIds,
  employeeByName,
  managersForEmployee,
  employeeCoverage
};
