// https://www.codewars.com/kata/54da5a58ea159efa38000836

// solution 1
function findOdd(A) {
    let obj={}
    A.map(elt => obj.hasOwnProperty(elt) ? obj[elt]+=1 : obj[elt]=1)
      
    for (const elt in obj)
      if (obj[elt]%2!=0)
        return parseInt(elt)
  }

//solution 2
function findOdd(A) {
    let obj={}
    for(const elt of A){
     obj.hasOwnProperty(elt) ? obj[elt]+=1 : obj[elt]=1
      }
    for (const elt in obj)
      if (obj[elt]%2!=0)
        return parseInt(elt)
  }