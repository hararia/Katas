//solution 1

function findEvenIndex(arr){
  
    for(let i = 0; i<arr.length; i++){
      
      if(arr.slice(0,i).reduce((acc,value)=>acc+value,0) == arr.slice(i+1).reduce((acc,value)=>acc+value,0))
        return i
    }
    return -1
  }

  