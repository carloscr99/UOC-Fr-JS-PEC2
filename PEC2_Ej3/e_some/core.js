// Check to see if any of the elements in the
// array are numbers greater than 10.

function anyGreaterThan10 (input) {
  const ten = (element) => element > 10;

  return input.some(ten);

};

// Check to see if any of the strings in
// the array is longer than 10 characters.

function longWord (input) {

  const ten = (element) => element.length > 10;

  return input.some(ten);
};

// Check to see if any of the elements in
// the matrix are true.

function truePossibilities (input) {
  const esVerdadero = (element) => element === true;

  return input.some(isTrue => isTrue.some(esVerdadero));
};

// Check to see if 'Lost' is in
// the phrase (using some).

function lostCarcosa (input) {
  const withLost = (element) => element.includes("Lost");

  return input.some(withLost);
};

module.exports = {
  anyGreaterThan10,
  longWord,
  truePossibilities,
  lostCarcosa
};
