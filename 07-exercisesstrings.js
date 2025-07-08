// 1. Concatena dos cadenas de texto

let myName = "Daniel"
let surName = "Lucas"

console.log(myName +" "+ surName)

// 2. Muestra la longitud de una cadena de texto

console.log(myName.length)

// 3. Muestra el primer y último carácter de un string

console.log(myName[0])
console.log(myName[5])

// 4. Convierte a mayúsculas y minúsculas un string

console.log(myName.toLocaleLowerCase())
console.log(myName.toLocaleUpperCase())

// 5. Crea una cadena de texto en varias líneas

let saludo = `hola
Daniel
Lucas`

console.log(saludo)

// 6. Interpola el valor de una variable en un string

// 7. Reemplaza todos los espacios en blanco de un string por guiones

let saludo2 = "Hola que tal estas"

console.log(saludo2.replace(/ /g, "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(saludo2.includes("Hola"))

// 9. Comprueba si dos strings son iguales

console.log(saludo == saludo2)

// 10. Comprueba si dos strings tienen la misma longitud

if (myName === surName) {
    console.log("tienen la misma longitud")
}
else{
    console.log("no tienen la misma longitud")
}