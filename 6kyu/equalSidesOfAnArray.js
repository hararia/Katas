//https://www.codewars.com/kata/5679aa472b8f57fb8c000047

//solution refacotred

function findEvenIndex(arr){
  
    for(let i = 0; i<arr.length; i++){
      
      if(arr.slice(0,i).reduce((acc,value)=>acc+value,0) == arr.slice(i+1).reduce((acc,value)=>acc+value,0))
        return i
    }
    return -1
  }

  // solution 1

  function findEvenIndex(arr){
    let leftSideSum = 0
    let rightSideSum = 0
  
  for(let i = 0; i<arr.length; i++){
    
    leftSideSum = arr.slice(0,i).reduce((acc,value)=>{
      return acc+value
    },0)
    
    rightSideSum = arr.slice(i+1).reduce((acc,value)=>{
      return acc+value
    },0)
    
    if(leftSideSum===rightSideSum)
      return i
    
  }
  return -1
}

