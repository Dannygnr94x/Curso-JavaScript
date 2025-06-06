// Operadores

// Operadores aritmeticos

let a = 5
let b = 10
console.log(a + b) //suma
console.log(a - b) //resta
console.log(a * b) //multiplicacion
console.log(a / b) //division

console.log(a % b) //modulo
console.log(a ** b) //Exponente

a++ //incrementar +1
console.log(a)
b-- //decrementar -1
console.log(b)

// Operadores de asignacion

let myVariable = 2
console.log(myVariable)
myVariable += 2
console.log(myVariable)

myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2

// Operadores de comparacion

console.log(a)
console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b) // Igualdad por valor
console.log(a === b) //igualdad por tipo y valor
console.log(a != b)
console.log(a !== b)

// Operadores logicos

// and (&&)

console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)
console.log(5 < 10 && 15 < 20 && 30 > 40)

// or (||)

console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)
console.log(5 < 10 || 15 < 20 || 30 > 40)
console.log(5 < 10 && 15 < 20 || 30 > 40)

// not (!)
// imbierte los booleanos

console.log(!(5 > 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))

// Operadores ternarios

const isRaining = true

isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo")