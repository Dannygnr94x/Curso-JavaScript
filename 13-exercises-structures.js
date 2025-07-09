// 1. Crea un array que almacene cinco animales

let myArray = ["perro", "gato", "caballo", "leon", "tortuga"]
console.log(myArray)

// 2. Añade dos más. Uno al principio y otro al final

myArray.push("ciervo")
myArray.unshift("camaleon")
console.log(myArray)

// 3. Elimina el que se encuentra en tercera posición

myArray.splice(2, 1)
console.log(myArray)

// 4. Crea un set que almacene cinco libros

let mySet = new Set(["el padrino", "warhammer", "la fundacion", "1984", "my camp"])
console.log(mySet)

// 5. Añade dos más. Uno de ellos repetido

mySet.add("reveldes")
console.log(mySet)

// 6. Elimina uno concreto a tu elección

mySet.delete("my camp")
console.log(mySet)

// 7. Crea un mapa que asocie el número del mes a su nombre

let myMap = new Map([
    [1, "enero"],
    [2, "febrero"],
    [3, "marzo"],
    [4,"abril"],
    [5, "mayo"],
    [6, "junio"],
    [7, "julio"],
    [8, "agosto"],
    [9, "septiembre"],
    [10, "octubre"],
    [11, "noviembre"],
    [12, "diciembre"]
])
console.log(myMap)
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log(myMap.has(5))

// 9. Añade al mapa una clave con un array que almacene los meses de verano
let myArray2 = [6, 7, 8]
myMap.set("verano", myArray2)
console.log(myMap)
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let myArray3 = [666]
console.log(myArray3)
let mySet2 = myArray3

myMap.set("number beast", mySet2)
console.log(myMap)


