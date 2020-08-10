//https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript


 //solution 3

 function inArray(array1,array2){
  return array1.filter(x=> array2.some(y=>y.includes(x))).sort()
}

//solution 2

function inArray(array1,array2){
    return array1.filter(x=>{
                           for(const str of array2)
                            if(str.includes(x))
                              return x
              }).sort()
  }

//solution 1

function inArray(array1,array2){
  let result = []
  for(const str of array1)
    for (const str2 of array2)
      if(str2.includes(str) && !result.includes(str))
        result.push(str)
      
   return result.sort()
 }  