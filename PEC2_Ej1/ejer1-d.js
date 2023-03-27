//Declaramos una función que recibe tres parámetros: una lista de usuarios, la clave y el valor que ha de buscar (añadimos async)
const findOneAsync = async (list, { key, value }) => {
  //Devolvemos una promesa para poder utilizar el await
  return new Promise((resolve, reject) => {
    //Declaramos el TimeOut de 2 segundos para simular la asincronía
    setTimeout(() => {
      //Busca en la lista un elemento que coincida con la clave / valor
      const element = list.find(element => element[key] === value);
      if (element) {
        //Si el elemento existe lo da como resuelto (entraría en el then)
        resolve(element);
      } else {
        //En caso contrario, al catch, mostrando el siguiente error
        reject('ERROR: Element Not Found');
      }
    }, 2000);
  });
};
//Declaramos una función que recibe tres parámetros: una lista de usuarios, la clave y el valor que ha de buscar (en este caso, es la Promesa)
const findOnePromise = (list, { key, value }) => {
  //Declaramos la promesa
  return new Promise((resolve, reject) => {
    //Declaramos el TimeOut de 2 segundos para simular a asincronia
    setTimeout(() => {
      //Busca en la lista un elemento que coincida con al clave / valor
      const element = list.find(element => element[key] === value);
      if (element) {
        //Si el elemento existe lo da como resuelto (entraría en el then)
        resolve(element);
      } else {
        //En caso contrario, al catch, mostrando el siguiente error
        reject('ERROR: Element Not Found');
      }
    }, 2000);
  });
};


//Declaración de un array de nombres, los cuales están formados por un nombre y un rol.
const users = [
  {
    name: 'Carlos',
    rol: 'Teacher'
  },
  {
    name: 'Ana',
    rol: 'Boss'
  }
];

//Definimos una función async para poder utilizar el await (en este caso, se trata del success, y modo async)
async function findUserSuccess() {
  try {
    console.log('findOne success');
    //Hace uso de la función anteriormente declarada, y busca que en la lista de usuarios que le envía, exista un nombre que sea 'Carlos'
    const result = await findOneAsync(users, { key: 'name', value: 'Carlos' });
    console.log(`result: ${result.name}`);
  } catch (error) {
    console.log(`error: ${error}`);
  }

}
//En el siguiente caso, el de error, lo hacemos por medio de las Promesas y con un then/catch
console.log('findOne error');
findOnePromise(users, { key: 'name', value: 'Fermin' })
//Si existe, devolvemos el nombre
.then(({name}) => console.log(`usuario: ${name}`))
//Si hay algún error, lo muestra
.catch(err => console.log(err));


//Llamamos a las funciones anteriormente creadas:
findUserSuccess();


