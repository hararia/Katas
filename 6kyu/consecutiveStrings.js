// https://www.codewars.com/kata/56a5d994ac971f1ac500003e

//solution1
function longestConsec(strarr, k) {
    if (strarr.length==0 || k>strarr.length || k<=0)
      return ''
  
    let iter = 0
    let longest = ''
    for (const str of strarr){
        
      let currentString = strarr.slice(strarr.indexOf(str), k+iter).join('')
      iter++
      if(currentString.length>longest.length)
        longest=currentString 
      }
      return longest
  }