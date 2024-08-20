let name = prompt ("what is your name?")
// alert(`Hello ${name.toUpperCase()}, How are you ? `)

// console.log(name.toUpperCase())

//chalenge first letter capital only 

let a= name.slice(0,1)
let a1= a.toUpperCase()
let b = name.slice(1,100)
let final= a1+b
console.log(final)

alert(`Hello ${final}, How are you ? `)
