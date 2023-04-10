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
  if (options === undefined) {
    let animalMap = {};

    for (let i = 0; i < animals.length; i++) {

      if (animalMap[animals[i].location] === undefined) {

        animalMap[animals[i].location] = [];

        animalMap[animals[i].location].push(animals[i].name);

      }
      else {
        animalMap[animals[i].location].push(animals[i].name);
      }
    }
    return animalMap;
  } else if (options.includeNames) {
    let animalMap = {};

    for (let i = 0; i < animals.length; i++) {

      if (animalMap[animals[i].location] === undefined) {

        animalMap[animals[i].location] = [];

        let animal = {};

        for (let x = 0; x < animals[i].residents.length; x++) {

          if (animal[animals[i].name] === undefined) {
            animal[animals[i].name] = [];
          }
          animal[animals[i].name].push(animals[i].residents[x].name);
        }

        animalMap[animals[i].location].push(animal);

      }
      else {
        let animal = {};

        for (let x = 0; x < animals[i].residents.length; x++) {

          if (animal[animals[i].name] === undefined) {
            animal[animals[i].name] = [];
          }
          animal[animals[i].name].push(animals[i].residents[x].name);
        }
        animalMap[animals[i].location].push(animal);
      }

    }

    return animalMap;

  } else if (options.includeNames && options.sex !== undefined) {

    let animalMap = {};

    for (let i = 0; i < animals.length; i++) {

      if (animalMap[animals[i].location] === undefined) {

        animalMap[animals[i].location] = [];

        let animal = {};

        for (let x = 0; x < animals[i].residents.length; x++) {

          if (animal[animals[i].name] === undefined) {
            animal[animals[i].name] = [];
          }
          if (animals[i].residents[x].sex === options.sex) {

            animal[animals[i].name].push(animals[i].residents[x].name);

          }
        }

        animalMap[animals[i].location].push(animal);

      }
      else {
        let animal = {};

        for (let x = 0; x < animals[i].residents.length; x++) {

          if (animal[animals[i].name] === undefined) {
            animal[animals[i].name] = [];
          }
          if (animals[i].residents[x].sex === options.sex) {

            animal[animals[i].name].push(animals[i].residents[x].name);

          }
        }
        animalMap[animals[i].location].push(animal);
      }

    }

    return animalMap;
  }
  else if (options.sex !== undefined) {

  }
}

function animalPopularity(rating) {
  if (rating === undefined) {

    let popularity = {};

    for (let i = 0; i < animals.length; i++) {

      if (popularity[animals[i].popularity] === undefined) {
        popularity[animals[i].popularity] = [];
      }
      popularity[animals[i].popularity].push(animals[i].name);

    }
    return popularity;
  } else {
    let popularity = [];

    for (let i = 0; i < animals.length; i++) {

      if (animals[i].popularity === rating) {

        popularity.push(animals[i].name)

      }

    }

    return popularity;

  }
}

function animalsByIds(ids) {

  let animal = [];

  if (Array.isArray(ids)) {
    for (let i = 0; i < ids.length; i++) {

      let info = animals.find(animal => animal.id === ids[i]) || [];

      if (info !== undefined && info.length !== 0) {
        animal.push(info);
      }


    }
  } else {
    let info = animals.find(animal => animal.id === ids) || [];


    if (info !== undefined && info.length !== 0) {
      animal.push(info);
    }
  }


  return animal;

}

function animalByName(animalName) {


  let foundit = {};


  if (animalName !== undefined) {

    let animal = animals.find(animal => animal.residents.find(resi => resi.name === animalName)) || {};

    if (animal !== {}) {
      const resident = animal.residents.find(r => r.name === animalName);

      foundit = {

        name: resident.name,
        sex: resident.sex,
        age: resident.age,
        species: animal.name

      }
    }
  }

  return foundit;

}

function employeesByIds(ids) {
  let empl = [];

  if (ids === undefined) {

  }
  else if (!Array.isArray(ids)) {
    empl.push(employees.find(employed => employed.id === ids));
  } else {
    for (let i = 0; i < ids.length; i++) {
      empl.push(employees.find(employed => employed.id === ids[i]));
    }
  }
  return empl;

}

function employeeByName(employeeName) {

  let empl = {};

  if (employeeName !== undefined) {
    empl = employees.find(employed => employed.firstName === employeeName || employed.lastName === employeeName);
  }
  return empl;

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
