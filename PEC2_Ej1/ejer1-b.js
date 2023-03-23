//Declaramos una función que recibe tres parámetros: una lista de usuarios, la clave y el valor que ha de buscar
const findOne = (list, { key, value }) => {
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

//Eliminamos la parte de onSuccess y onError

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
//Imprime un mensaje por consola
console.log('findOne success');
//Hace uso de la función anteriormente declarada, y busca que en la lista de usuarios que le envía, exista un nombre que sea 'Carlos' 
findOne(users, { key: 'name', value: 'Carlos' })
//Si existe, devolvemos el nombre
.then(({name}) => console.log(`usuario: ${name}`))
//Si hay algún error, lo muestra
.catch(err => console.log(err));
//Imprime un mensaje por consola
console.log('findOne error');
//Hace uso de la función anteriormente declarada, y busca que en la lista de usuarios que le envía, exista un nombre que sea 'Fermin' 
findOne(users, { key: 'name', value: 'Fermin' })
//Si existe, devolvemos el nombre
.then(({name}) => console.log(`usuario: ${name}`))
//Si hay algún error, lo muestra
.catch(err => console.log(err));

/*
findOne success
findOne error
 //wait 2 seconds
user: Carlos
ERROR: Element Not Found
*/
