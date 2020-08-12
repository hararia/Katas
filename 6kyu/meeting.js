// https://www.codewars.com/kata/59df2f8f08c6cec835000012

// solution 1

function meeting(s) {
    let a = s.toUpperCase().split(';').map(name=>{ 
                                          name=name.split(':')
                                          return `(${name[1]}, ${name[0]})`})
   
    return a.sort().join('')
}

// solution 2

function meeting(s) {
    let b = ''
    let a = s.toUpperCase().split(';').map(name=>{ 
                                        name=name.split(':')
                                        return `(${name[1]}, ${name[0]})`})
    a.sort()
    for(const name of a)
        b+=name
    
    return b
  }