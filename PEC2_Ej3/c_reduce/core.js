function sum(array) {
  return  array.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
}

function productAll(array) {
  return  array.reduce(function(a, b) {
      return a.concat(b);
    }).reduce(function(x, y) {
      return x * y;
    });
  
}

function objectify(array) {
  return array.reduce(function(obj, arr) {
    obj[arr[0]] = arr[1];
    return obj;
  }, {});
  
}

function luckyNumbers(array) {
  let frase = "Your lucky numbers are: ";
 
  const resultado = array.reduce((acumula, numero, index) =>{
      
      if((array.length - 1) === index){
          return acumula + "and " + numero; 
      }
      else{
        if(acumula === array[index-1]){
          acumula + ",";
         return acumula.toString() + ', ' + numero.toString() + ', ';
        }else{
            return acumula.toString() + numero.toString() + ', ';
        }
      }
    
  });

  return frase + resultado;

}

module.exports = {
  sum,
  productAll,
  objectify,
  luckyNumbers
};
