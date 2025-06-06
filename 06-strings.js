// Strings

// Concatenacion de cadenas de texto

let myName = "Daniel"
let greeting = "Hola, " + myName + "!"
console.log(greeting)
console.log(typeof greeting)

// Longitud

console.log(greeting.length)

// Acceso a caracteres

console.log(greeting[0])
console.log(greeting[1])
console.log(greeting[12])

// Métodos comunes

console.log(greeting.toLocaleUpperCase()) // Cambia todo a mayus
console.log(greeting.toLocaleLowerCase()) // Cambia todo a minus
console.log(greeting.indexOf("Daniel")) // Cuenta los caracteres
console.log(greeting.includes("Daniel")) // Detecta si el caracter está
console.log(greeting.slice(0, 10)) // Coge partes de un string
console.log(greeting.replace("Daniel", "Lucas")) // Reemplaza caracteres

// Templates literals

let message = `Hola, este es mi
curso de JavaScript`
let email = "lukas.mune@gmail.com"

console.log(`Hola, ${myName}, tu email es: ${email}!`)