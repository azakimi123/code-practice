// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.


var isPalindrome = function(x) {
  //same front to back as back to front
  x = x.toString().split('');
  let front = 0;
  let back = x.length - 1;
  //loop to check to see if integers are the same
  for(let i = 0; i < x.length; i++){
    if(x[front] === x[back]){
      console.log(x[front], x[back])
      front ++
      back --
    }
    if(x[front] !== x[back]){
      return false;
    }
  }
    return true;
};

// isPalindrome(121) //true
// isPalindrome(-121) //false
// isPalindrome(10) //false
// isPalindrome(10022201) //false
// isPalindrome(101) //true