// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

//solution
function count (string) {  
  let count = {};
  for(let val of string){
  count[val] = (count[val] || 0) + 1
  }
   return count;
}