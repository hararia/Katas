//https://www.codewars.com/kata/526571aae218b8ee490006f4

//solution 1
var countBits = function(n) {
    return n.toString(2).split('0').join('').length
  };

//solution 2
var countBits = function(n) {
    let counter =0
    while (n>0){
      
      if(n%2==1)
        counter+=1
      
      n=Math.floor(n/2)
    }
    return counter
  };

//solution 3
var countBits = function(n) {
    let remainders=''
    let counter = 0
    
    while(n>0){
      remainders+=n%2
      n=Math.floor(n/2)
    }
    
    for (const char of remainders){
      if(char == '1')
        counter++
    }
    
    return counter
  }