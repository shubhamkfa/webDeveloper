let name = prompt ("What is your name?")
// alert(`Hello ${name.toUpperCase()}, How are you ? `)

// console.log(name.toUpperCase())

//chalenge first letter capital only  with space

let a= name.slice(0,1)
let a1= a.toUpperCase()
let b = name.slice(1,100)
let final= a1+b
// console.log(final)

let second =name.split(" ")
let var1=(second[0])
let varf=(var1.slice(0,1))
let u1=varf.toUpperCase()
let var2=var1.slice(1,100)
let finalzero=u1+var2
// console.log(finalzero)

let sar1=(second[1])
let sarf=(sar1.slice(0,1))
let s1=sarf.toUpperCase()
let sar2=sar1.slice(1,100)
let finalSecond=s1+sar2
// console.log(finalSecond)

let result= finalzero + " "+ finalSecond

// alert(`Hello ${final}, How are you ? `)

alert(`Hello ${result}, How are you ? `)
