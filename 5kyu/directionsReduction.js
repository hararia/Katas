// https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript

//solution 1

function dirReduc(arr){
    const oppositeDirs ={
      'NORTH':'SOUTH',
      'SOUTH':'NORTH',
      'EAST':'WEST',
      'WEST':'EAST'
    }
    for(let i=0; i<arr.length; i++){
      if(arr[i+1]==oppositeDirs[arr[i]]){
        arr.splice(i,2)
        i >= 1 ? i-=2 : i--
    }
      }
    return arr
  }

//solution 2

function dirReduc(arr){
    for (let i=0; i<arr.length;i++){
      if(arr[i]=='WEST' && arr[i+1]=='EAST'){
        arr.splice(i, 2)
        i-=2 || i--
      }
      if(arr[i]=='EAST' && arr[i+1]=='WEST'){
        arr.splice(i, 2)
        i-=2 || i--
      }
      if(arr[i]=='NORTH' && arr[i+1]=='SOUTH'){
        arr.splice(i, 2)
        i-=2 || i--
      }
      if(arr[i]=='SOUTH' && arr[i+1]=='NORTH'){
        arr.splice(i, 2)
        i-=2 || i--
      }
    }
    return arr
  }