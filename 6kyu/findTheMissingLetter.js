// https://www.codewars.com/kata/5839edaa6754d6fec10000a2

//solution 1
function findMissingLetter(array){
    for(let i=0; i<array.length; i++)
      if(array[i+1].charCodeAt(array[i+1]) - array[i].charCodeAt(array[i]) !=1)
        return String.fromCharCode(array[i].charCodeAt(array[i])+1)
  }