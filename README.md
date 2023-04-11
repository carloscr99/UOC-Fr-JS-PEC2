# PEC 2

### ccolomerrev

### Carlos Colomer Revert

En esta PEC hemos visto como hacer uso de Callbacks, Promesas y async/await, así como hacer aplicaciones VanilaJS en MVC.

En cosas a tener en cuenta en la corrección de los ejercicios, me gustaría comentar, que en ejercicio 2, apartado g, nos indica que implementemos la actualización de un gasto, en la solución que he implementado, para actualizar un gasto, lo que tenemos que hacer, es primero introducir el nuevo nombre y el importe por el que queremos aplicar la modificación, y luego situarnos sobre el registro, y pulsar sobre el botón "Editar" que aparecerá en la parte derecha de color azul.
Sé que esta no es la mejor solución para resolver este problema, pero por falta de tiempo, no he podido implementar una solución mejor.

En mi caso, mi objetivo en cuanto a la edición del importe, hubiera sido:
1. Seleccionar el gasto que queremos modificar
2. Obtener el ID
3. Recuperar de localStorage la información almacenada, y mostrarla en los inputs correspondientes
4. Modificar los textos para que se entienda que se está editando un registro
5. Cuando se da sobre el botón (el cual tendría un texto algo así como "Guardar cambios"), almacenar los datos en localStorage.

En cuanto a la práctica de f_zoo, tengo varias cosas que comentar:
1. Por lo que respecta a la práctica de f_zoo, la verdad es que como se podrá ver en el código, al principio me complicaba la vida más de lo necesario, y a medida que he ido avanzando en la ejecución del mismo, he ido siendo más consciente  de lo que estaba haciendo, y a mi parecer el código está bastante más refinado.
Me hubiera gustado refactorizar los ejercicios del principio, pero no me ha dado tiempo a tal cosa.
2. En el apartado de `animalMap`, las dos últimas pruebas, salen como erróneas, y no se muy bien que tengo mal, dado que si yo hago un `console.log(JSON.stringify(animalMap));` del objeto, si que están los animales de deben de aparecer, lo puede ver en la consola de ejecución, dado que no lo he borrado. 
3. En la parte de `employeeCoverage`, no pasa el test porque en el último registro, el orden que aparece de animales es ` ['elephants', 'bears', 'lions']` y yo obtengo `[ 'lions', 'bears', 'elephants' ]`, y no he tenido tiempo de ver como modificarlo.

En cuanto a cosas que mejorar, la verdad es que la teoría y la práctica eran bastante confusos, en mi humilde opinión, hay un salto bastante grande entre los ejercicios de repaso de JS de la PEC anterior y esta, así como la explicación de la teoría a las prácticas a realizar, hemos intentado resolver las dudas en el foro, pero muchas veces esto no ocurría, dado que el uso del foro del campus me parece un poco lioso de usar y de seguir el hilo de la conversación cuando hay bastantes respuestas.
