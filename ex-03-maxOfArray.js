
// Ex-03 : maxOfArray()

// Write a function maxOfArray() that takes an array of
// numbers as an argument and finds the highest number.

function maxOfArray(array){
var max = 0;
var a = array.length;
for (counter=0;counter<a;counter++)
{
  if (array[counter] > max)
{
  max = array[counter];
}
}
return max;
}



console.assert(maxOfArray([2,7,3,4,21,0]) === 21)
console.assert(maxOfArray([100,9,8,7,6,10]) === 100)
console.assert(maxOfArray([84,32,11,31,12,201]) === 201)
