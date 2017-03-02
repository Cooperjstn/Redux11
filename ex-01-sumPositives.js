
/**
 * Ex-01 : sumPositives()
 *
 *  Write a function called sumPositives that takes an array of numbers and
 *  only adds the positive numbers
 *
*/

function sumPositives (arr) {
  for (var i = 0, j = 0, l = arr.length; i < l; i++) {
    if (arr[i] >= 0) {
      arr[j++] = arr[i];
    }
  }
  arr.length = j;
  return arr.reduce(function (a, b) {return a + b;}, 0);
}




console.assert(sumPositives([3, -1, 4, 5, -3, -4]) === 12);
console.assert(sumPositives([-11, 30,-20, 40, 100]) === 170);
console.assert(sumPositives([4 ,-10,-30, -4, 201]) === 205);
