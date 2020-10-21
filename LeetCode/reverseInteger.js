/*Given a 32-bit signed integer, reverse digits of an integer.

Note:
Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

*/

let reverse = function(x) {
  let output = 0;
    num = (x.toString()).split('').reverse()
    if(num[num.length - 1] === '-'){
      num.pop()
      output = parseInt(num.join('')) - (parseInt(num.join('')) * 2)
    }
    else {
    output = parseInt(num.join(''));
    }
    if(output < -2147483648 || output > 2147483647){
      return 0;
    }
    return output;
};

//Test Cases
// reverse(123) //321
// reverse(-123) //-321
// reverse(120) //21
// reverse(0) //0
// reverse(1534236469) //0