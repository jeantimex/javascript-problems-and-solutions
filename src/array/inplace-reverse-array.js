/**
 * Reverse Inplace Array
 *
 * Given an Array arr.
 *
 * We want to reverse order of elements inside .
 * We will also take edge cases into account 
 * For eg:- In case parameter passed is null or undefined we may want to throw error
 *          In case parameter passed is not an array
 *          In case parameter passed has length 0
 *
 * For example, given
 *
 * arr = [1,2,3,4,5,6,7,8,9]
 * We should return
 * [9,8,7,6,5,4,3,2,1]
 * 
 */

/**
 * @param {number[]} arr
 * @return {number[]} arr
 */
function inPlaceArrayReverse(arr) {
  // edge cases
  if(!arr){
    throw new Error('undefined input');
  }
  
  if(!Array.isArray(arr)){
    throw new Error('not an array')
  }
  
  if(arr.length === 0){
    throw new Error('array empty')
  } 
  
  var len = arr.length - 1;
  for(let j=0; j<len/2; j++ ){
    let temp = arr[j];
    arr[j] = arr[len-j];
    arr[len-j] = temp;
  }  
  
  return arr;
}

let testArray = [1,2,3,4,5,6];

console.log('Printing the inplace reverse of a given array: ', inPlaceArrayReverse(testArray));
