function multiplyBy10(array) {
  let result = [];
  array.map(function(x){
    result.push(x * 10);
  });
  return result;
}

function shiftRight(array) {
  let result = [];

  result = array.map(function(element, index, arr) {
    return arr[(index + arr.length - 1) % arr.length];
});

return result;

}

function onlyVowels(array) {
  let result = [];

  array.map(function(x){

    result.push(x.match(/[aeiou]/ig).join(""));
    
  });

  return result;

}

function doubleMatrix(array) {
  let result = [];
  let aux = []

  array.map(function(x){
      x.map(function(y){
          aux.push(y * 2);
      });
      
    result.push(aux);
    aux = []
      
  });

  return result;

}

module.exports = {
  multiplyBy10,
  shiftRight,
  onlyVowels,
  doubleMatrix
};
