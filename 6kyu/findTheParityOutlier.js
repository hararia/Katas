//https://www.codewars.com/kata/5526fc09a1bbd946250002dc

//solution 1
function findOutlier(integers){
    let odd = 0
    let even = 0
    
    integers.slice(0,3).map(int=> int%2==0 ? even++ : odd++)
    
    return odd > even ? integers.filter(int => int%2 == 0)[0] : integers.filter(int => int%2 != 0)[0]
  }

//solution 2 - similair logic to solution 1 but iglier looking

function findOutlier(integers){
    let odd = 0
    let even = 0
    
    for (let i =0; i< 3; i++){
      if(integers[i]%2==0){
        even+=1
      }
      else{
        odd+=1
      }
    }
    for (const int of integers){
      if (odd > even){
        if(int %2 == 0){
          return int
        }
      }
      else{
        if(int%2!=0){
          return int
        }
        
      }
    }
  }

  //solution 3
  
function findOutlier(integers){
    let evenArray = integers.filter(int => int%2 ==0)
    let oddArray = integers.filter(int => int%2 !=0)
    
    return evenArray.length < oddArray.length ? evenArray[0] : oddArray[0]
  }