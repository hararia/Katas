//https://www.codewars.com/kata/52efefcbcdf57161d4000091

//solution 1
function count (string) {  
    let result={}
    string.split('').map(char=> result.hasOwnProperty(char) ? result[char]+=1 : result[char]=1)
    
    return result
  }

//solution 2
function count (string) {  
    return string.split('').reduce((acc,val)=>{  
      if(acc.hasOwnProperty(val))
        acc[val]+=1
      else
        acc[val]=1
      return acc}, {}) 
  }

//solution 3
function count (string) {  
    let result={}
    for(const char of string)
      result.hasOwnProperty(char) ? result[char]+=1 : result[char]=1
    
    return result
  }