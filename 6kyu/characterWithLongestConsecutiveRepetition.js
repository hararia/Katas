//solution 1
function longestRepetition(s) {
    let counter = 1
    return s.split('').reduce((acc,val,i)=>{
      if(val==s[i+1]){
        counter++
        return acc}
      if(counter>acc[1])
        acc=[s[i],counter]
      counter=1
      return acc
    },['',0])
  }

//soulution 2
function longestRepetition(s) {
    let max = ['',0]
    let counter = 1
    s.split('').map((char, i)=>{
      if(char == s[i+1])
        counter++
      else{
        if(counter > max[1])
          max=[s[i],counter]
        counter = 1
        }
    })
    return max
  }

//solution 3
function longestRepetition(s) {
    let max = ['',0]
    let counter = 1
    for(let i=0; i<s.length; i++){
      if(s[i]==s[i+1]){
        counter +=1
      }
      else{
        if (counter > max[1]){
          max[0]=s[i]
          max[1]=counter
          counter = 1
        }
        else{counter=1}
      }
    }
    
    return max
  }