// https://www.codewars.com/kata/5727bb0fe81185ae62000ae3

//solution 1
function cleanString(s) {
    let result = []
    for (const char of s){
      if (char == '#'){
        result.pop()
      }
      else{
        result.push(char)
      }
    }
    return result.join('')
  };

//solution 2
function cleanString(s) {
    s=s.split('')
    for (let i=0;i<s.length;i++){
      if (s[i]=='#'){
        s[i]=''
        s[i-1]=''
        s=s.join('').split('')
        i=i-2
      }
  }
  return s.join('')
};

