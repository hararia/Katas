//https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c

//solution 1
var maxSequence = function(arr){
    let max = 0
    let i=0
    while(i<arr.length){
      for(let j=1; j<arr.length+1; j++){
       let tempMax = arr.slice(i,j).reduce((acc,val)=>{return acc+val},0)
        if (tempMax>max)
          max=tempMax
      }
        i++
      }
    return max
  }