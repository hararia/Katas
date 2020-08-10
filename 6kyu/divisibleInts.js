//https://www.codewars.com/kata/566859a83557837d9700001a

//solution 2

function getCount(n){
    let nStr = n.toString()
    let counter = 0
    
    for (let j = 0; j<nStr.length; j++)
      for (let i = j; i<=nStr.length; i++)
        if(n % nStr.slice(j, i) == 0 && nStr.slice(j, i) != nStr) counter++
  
    return counter
  }

  //solution 1

  function getCount(n){
    let nStr = n.toString()
    let counter = 0
    
    for (let j = 0; j<nStr.length; j++){
      for (let i = j; i<=nStr.length; i++){
        let subStr = nStr.slice(j, i)
        
        if (subStr == nStr){
          continue
        }
        if(n % subStr == 0){
          counter++
        }
      }
    }
    return counter
  }