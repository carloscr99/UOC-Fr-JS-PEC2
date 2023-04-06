function onlyEven(array) {
  let result = array.filter(number => number % 2 === 0);

  return result;
}

function onlyOneWord(array) {
  let result = array.filter(word => word.indexOf(" ") === -1);

  return result;
}

function positiveRowsOnly(array) {
  const result = array.filter(numbers => numbers.every(number => number > 0));

  return result;
}

function allSameVowels(array) {
    let result = array.filter(word => {
      let vowelToMatch = word.match(/[aeiou]/g)[0];
      return word.match(/[aeiou]/g).every(vowel => vowel === vowelToMatch);
    });
    return result;
}

module.exports = {
  onlyEven,
  onlyOneWord,
  positiveRowsOnly,
  allSameVowels
};
