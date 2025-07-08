// array


// declaracion

let myArray = [2]
let myArray2 = new Array(2)
console.log(myArray)
console.log(myArray2)

// inicializacion

myArray = [2, 3, 4, 5]
myArray2 = new Array(2, 3, 4, 5)

console.log(myArray)
console.log(myArray2)

myArray = [2,"daniel", true]
myArray2 = new Array(2,"daniel", true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[0] = "daniel"
myArray2[1] = "lucas"
myArray2[2] = "villar"

console.log(myArray2)

myArray = []
myArray[0] = "daniel"
//myArray[1] = "lucas"
myArray[2] = "villar"

console.log(myArray)

//metodos comunes

myArray = []

// push y pop

myArray.push("daniel")
myArray.push("lucas")
myArray.push("villar")
myArray.push(30)

console.log(myArray)

myArray.pop() //elimina el ultimo elemento de ala array
myArray.pop()

console.log(myArray)

// shift y unshift

myArray.shift() // elimina el primer elemento de la array
console.log(myArray)

myArray.unshift("daniel", "villar")//agrega elementos al principio
console.log(myArray) 

//  length

console.log(myArray.length) 

// clear

myArray = [] //limpiar todo contenido de la array
console.log(myArray) 

// slices

myArray.push(2,"daniel", true, "lucas", "villar")

let myNewArray = myArray.slice(1, 3)

console.log(myArray) 
console.log(myNewArray) 

// splices

myArray.splice(1, 3)

console.log(myArray)

myArray = ["daniel", "lucas", "villar", 30, true]

myArray.splice(1, 2, 3)
console.log(myArray)

myArray.splice(1, 2, "Nueva entrada")
console.log(myArray)
