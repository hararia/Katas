//https://www.codewars.com/kata/525c65e51bf619685c000059

//solution 2
function cakes(recipe, available) {
    let cakeCount = []
    
    for (const ingridient in recipe)
      cakeCount.push(~~(available[ingridient]/recipe[ingridient]) || 0)
    
    return Math.min(...cakeCount)
  }

  //solution 1
  function cakes(recipe, available) {
    let cakeCount = []
    
    for (const ingridient in recipe){
      if(!available.hasOwnProperty(ingridient))
        return 0
      
      cakeCount.push(~~(available[ingridient]/recipe[ingridient]))
    }
    return Math.min(...cakeCount)
  }