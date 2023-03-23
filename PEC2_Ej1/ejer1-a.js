//Declaramos una función que recibe tres parámetros: una lista de usuarios, la clave y el valor que ha de buscar
const findOne = (list, { key, value }, { onSuccess, onError }) => {
  //Espera dos segundos, antes de realizar la búsqueda
  setTimeout(() => {
    //Busca en la lista un elemento que coincida con al clave / valor
    const element = list.find(element => element[key] === value);
    //Si existe el elemento, llama a la función 'onSuccess', con el elemento obtenido como parámetro. En caso contrario, llama a 'onError', especificando un mensaje
    element ? onSuccess(element) : onError({ msg: 'ERROR: Element Not Found' });
  }, 2000);
};
//Declaración de la función 'onSucees', la cual dessestructura el objeto recibido, y busca el elemento 'name', lo obtiene y lo muestra por consola.
const onSuccess = ({ name }) => console.log(`user: ${name}`);
//Declaración de la función 'onError', la cual dessestructura el objeto obtenido, y busca 'msg', y lo muestra por consola.
const onError = ({ msg }) => console.log(msg);
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
findOne(users, { key: 'name', value: 'Carlos' }, { onSuccess, onError });
//Imprime un mensaje por consola
console.log('findOne error');
//Hace uso de la función anteriormente declarada, y busca que en la lista de usuarios que le envía, exista un nombre que sea 'Fermin' 
findOne(users, { key: 'name', value: 'Fermin' }, { onSuccess, onError });

/*
findOne success
findOne error
 //wait 2 seconds
user: Carlos
ERROR: Element Not Found
*/
