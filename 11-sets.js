// sets

// Declaraciòn

let mySet = new Set()

console.log(mySet)

// Inicialización

mySet = new Set(["daniel", "lucas", "villar", 30, true, "lukas.mune@gmail.com"])

console.log(mySet)

// Metodos comunes

// add y delete

mySet.add("vicalvaro")

console.log(mySet)

mySet.delete("vicalvaro")

console.log(mySet)

console.log(mySet.delete("daniel"))

console.log(mySet)

// has

console.log(mySet.has("lucas"))
console.log(mySet.has("villar"))

// size

console.log(mySet.size)

// convertir set a array

let myArray = Array.from(mySet)
console.log(myArray)

// Convertir array a set

mySet = new Set(myArray)

console.log(mySet)

// No admite duplicados

mySet.add("vicalvaro")
mySet.add("vicalvaro")
mySet.add("vicalvaro")

console.log(mySet)