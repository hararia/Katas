//https://www.codewars.com/kata/597cfe0a38015079a0000006

//solution1
function coveredPawns(pawns){

    return pawns.reduce((acc, val, i) => {
    
      let space1 = String.fromCharCode(pawns[i][0].charCodeAt()+1) + (pawns[i][1]-1).toString()
      let space2 = String.fromCharCode(pawns[i][0].charCodeAt()-1) + (pawns[i][1]-1).toString()
        
      if(pawns.includes(space1) || pawns.includes(space2))
        return acc+=1
        
      return acc
    },0)
  }

//solution2
function coveredPawns(pawns){
    let counter = 0
    let space1=''
    let space2=''
    
    pawns.forEach(pawn =>{
      let space1 = String.fromCharCode(pawn[0].charCodeAt()+1) + (pawn[1]-1).toString()
      let space2 =String.fromCharCode(pawn[0].charCodeAt()-1) + (pawn[1]-1).toString()
     
      if(pawns.includes(space1) || pawns.includes(space2))
        counter+=1
    })
  
  return counter
    
    }