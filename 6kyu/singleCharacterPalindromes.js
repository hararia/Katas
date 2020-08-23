// https://www.codewars.com/kata/5a2c22271f7f709eaa0005d3

//solution 1
function solve(s){
    if(s.split('').reverse().join('')==s)
      return 'OK'
     
    let tempstr=''
    for(let i=0; i<s.length+1;i++){
      tempstr=s.slice(0, i-1) + s.slice(i, s.length)
      if(tempstr.split('').reverse().join('')==tempstr)
        return 'remove one'
    }
     
    return 'not possible'
   }

