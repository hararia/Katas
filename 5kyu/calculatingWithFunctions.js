// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

//solution1
function zero(exp) {
    return exp ? exp(0) : 0
  }
  function one(exp) {
    return exp ? exp(1) : 1
  }
  function two(exp) {
    return exp ? exp(2) : 2
  }
  function three(exp) {
    return exp ? exp(3) : 3
  }
  function four(exp) {
    return exp ? exp(4) : 4
  }
  function five(exp) {
    return exp ? exp(5) : 5
  }
  function six(exp) {
    return exp ? exp(6) : 6
  }
  function seven(exp) {
    return exp ? exp(7) : 7
  }
  function eight(exp) {
    return exp ? exp(8) : 8
  }
  function nine(exp) {
    return exp ? exp(9) : 9
  }
  
  function plus(val1) {
    return function(val2){
      return val1 + val2
    }
  }
  function minus(val1) {
     return function(val2){
      return val2 - val1
    }
  }
  function times(val1) {
     return function(val2){
      return val1 * val2
    }
  }
  function dividedBy(val1) {
     return function(val2){
      return Math.floor(val2 / val1)
    }
  }

//solution2
function zero(exp) {
    if (arguments.length!=0)
      return Math.floor(eval('0' + exp))
    return 0
  }
  function one(exp) {
    if (arguments.length!=0)
      return Math.floor(eval('1' + exp))
    return 1
  }
  function two(exp) {
    if (arguments.length!=0)
      return Math.floor(eval('2' + exp))
    return 2
  }
  function three(exp) {
    if (arguments.length!=0)
      return Math.floor(eval('3' + exp))
    return 3
  }
  function four(exp) {
    if (arguments.length!=0)
      return Math.floor(eval('4' + exp))
    return 4
  }
  function five(exp) {
    if (arguments.length!=0)
      return Math.floor(eval('5' + exp))
    return 5
  }
  function six(exp) {
    if (arguments.length!=0)
      return Math.floor(eval('6' + exp))
    return 6
  }
  function seven(exp) {
    if (arguments.length!=0)
      return Math.floor(eval('7' + exp))
    return 7
    }
  function eight(exp) {
    if (arguments.length!=0)
      return Math.floor(eval('8' + exp))
    return 8
  }
  function nine(exp) {
    if (arguments.length!=0)
      return Math.floor(eval('9' + exp))
    return 9
  }
  
  function plus(n) {return '+' + n}
  function minus(n) {return '-' + n}
  function times(n) {return '*' + n}
  function dividedBy(n) {return '/' + n}