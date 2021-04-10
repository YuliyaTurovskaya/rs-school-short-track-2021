/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const array = String(n).split('');
  const deleteNumber = String(n).split('').sort((a, b) => a - b)[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === deleteNumber) {
      array.splice(i, 1);
    }
  }
  return +array.join('');
}

module.exports = deleteDigit;
