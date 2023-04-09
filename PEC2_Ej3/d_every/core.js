// Check to see if all elements in an array
// are even numbers.

function allEven(input) {

  const isEven = (currentValue) => currentValue % 2 === 0;

  return input.every(isEven);

   
}

// Check to see if all elements in an array
// are of the same type.

function allSameType(input) {

  let type = "";
  
  return input.every((item) =>{
    if(type === ""){
      type = typeof item;
      return true;
    }
    else {
      return type === typeof item
    }
      
  });
}

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function positiveMatrix(input) {
  return input.every((item) =>{
    if(Array.isArray(item)){
      return item.every((num) => num > 0);
    }
      
  });
}

// Check that all items in an array are strings
// and that they all only contain the same vowels.

function allSameVowels(input) {

  let vowel = "";

  return input.every((item) =>{

    if(typeof item === 'string' ){
      const match = item.match(/[aeiou]/i);
      if (match) {
        vowel = match[0];
        const result = item.split('').every((letter) => {
          const matchLetter = letter.match(/[aeiou]/i);
          if (!matchLetter) {
            return true;
          }

          return matchLetter[0] === vowel;
        });

        return result;
      }
      return false;
    }
      
  });

}

module.exports = {
  allEven,
  allSameType,
  positiveMatrix,
  allSameVowels
};
