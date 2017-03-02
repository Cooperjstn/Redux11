/**
 * Ex-05
 *
 * Write a function findLongestWord() that takes a string of
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */

 function findLongestWord(str) {
  var array = str.match(/\w[a-z]{0,}/gi);
  var result = array[0];
  for(var x = 1 ; x < array.length ; x++)
    {
    if(result.length < array[x].length)
    {
    result = array[x];
    }
  }
  return result;
}

console.assert(findLongestWord('i have baskets full of lemons') === 'baskets')
console.assert(findLongestWord("Alexander shouldn't talk anymore") === 'Alexander')
console.assert(findLongestWord("don't mess with Texas") === 'Texas')
console.assert(findLongestWord('a time to act.') === 'time')
