// Map

// Declaraciòn

let myMap = new Map()

console.log(myMap)

// Inicializaciòn

myMap = new Map([
    ["name", "daniel"],
    ["email", "daniel.mune@gmail.com"],
    ["age", "30"]
])
console.log(myMap)

// Mètodos y propiedades

// Set

myMap.set("alias", "lukas")
myMap.set("name", "dani")

console.log(myMap)

// get

console.log(myMap.get("name"))
console.log(myMap.get("surname"))


// has

console.log(myMap.has("surname"))
console.log(myMap.has("age"))

// delete

myMap.delete("email")

console.log(myMap)

// Keys, values y entries

console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())

// size

console.log(myMap.size)

// clear

myMap.clear()
console.log(myMap)

console.log(myMap.keys())






