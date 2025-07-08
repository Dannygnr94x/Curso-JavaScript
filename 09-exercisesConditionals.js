// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let myName = "Daniel"
if (myName == "Daniel"){
    console.log ("Es igual")
} else{
    console.log ("No es igual")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let user = "Lucas"
let password = 1234

if (user == "Lucas" && password == 1234){
    console.log("Usuario y contraseña correcta")
}
else if (user != "Lucas" && password == 1234){
    console.log("Usuario incorrecto")
}
else if (user == "Lucas" && password != 1234){
    console.log("Contraseña incorrecta")
}
else {
    console.log ("usuario y contraseña incorrecta")
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let myNumber = 0

if (myNumber > 0){
    console.log("Numero positivo")
}
else if (myNumber < 0){
    console.log("Numero negativo")
}
else{
    console.log("El numero es 0")
}
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edad = 17 
let mensaje

if (edad >= 18) {
    mensaje = "Puedes votar."
} else {
    let faltan = 18 - edad
    mensaje = `No puedes votar. Te faltan ${faltan} año${faltan > 1 ? "s" : ""}`
}

console.log(mensaje)


// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

const edad2 = edad >= 18 ? "Adulto" : "Menor"

console.log(edad2)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = 2
let estacion

if (mes === 12 || mes === 1 || mes === 2) {
  estacion = "Invierno"
} else if (mes >= 3 && mes <= 5) {
  estacion = "Primavera"
} else if (mes >= 6 && mes <= 8) {
  estacion = "Verano"
} else if (mes >= 9 && mes <= 11) {
  estacion = "Otoño"
} else {
  estacion = "Mes inválido"
}

console.log(estacion)


// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

let dia
if (mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12){
    dia = 31
}
else if (mes === 4 || mes === 6 || mes === 9 || mes === 11){
    dia = 30
}
else {
    dia = 28
}

console.log(dia)
// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma = "frances"
let saludo
switch (idioma){
    case "español":
        saludo = "hola"
        break
    case "aleman":
        saludo = "hallo"
        break
    case "ingles":
        saludo = "hellow"
        break
    case "frances":
        saludo = "bonjour"

}
console.log(saludo)

// 9. Usa un switch para hacer de nuevo el ejercicio 6


switch (mes){
    case "Marzo":
        estacion = "Primavera"
        break
    case "Abril":
        estacion = "Primavera"
        break
    case "Mayo":
        estacion = "Primavera"
        break
    case "Junio":
        estacion = "Verano"
        break
    case "Julio":
        estacion = "Verano"
        break
    case "Agosto":
        estacion = "Verano"
        break
    case "Septiembre":
        estacion = "Otoño"
        break
    case "Octubre":
        estacion = "Otoño"
        break
    case "Noviembre":
        estacion = "Otoño"
        break
    case "Diciembre":
        estacion = "Invierno"
        break
    case "Enero":
        estacion = "Invierno"
        break
    case "Febrero":
        estacion = "Invierno"
}
console.log(estacion)

// 10. Usa un switch para hacer de nuevo el ejercicio 7

switch (mes){
    case "Marzo":
        dia = 31
        break
    case "Abril":
        dia = 30
        break
    case "Mayo":
        dia = 31
        break
    case "Junio":
        dia = 30
        break
    case "Julio":
        dia = 31
        break
    case "Agosto":
        dia = 31
        break
    case "Septiembre":
        dia = 30
        break
    case "Octubre":
        dia = 31
        break
    case "Noviembre":
        dia = 30
        break
    case "Diciembre":
        dia = 31
        break
    case "Enero":
        dia = 31
        break
    case "Febrero":
        dia = 28
}
console.log(dia)