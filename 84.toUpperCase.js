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


//method two correct 
//capture the name from user
let name = prompt("Enter your name?")

//2. capitalize first letter of word
//a isolate the first character and uppar case it 
let firstChar=name.slice(0,1).toUpperCase()

//isolate the rest of the name 

let lastChar = name.slice(1,name.length)

//concatinate first char with last char 
alert(`Your name is ${firstChar+ lastChar}`)



//metho 3 if have a space in it 
let name = prompt ("What is your name?")
// alert(`Hello ${name.toUpperCase()}, How are you ? `)

// console.log(name.toUpperCase())

//chalenge first letter capital only 

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
