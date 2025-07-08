// if, else

//if (si)

let age = 10

if (age == 30) {
    console.log("La edad es 30")
}

// else (sino)

if (age == 30) {
    console.log("La edad es 30")
}
else{
    console.log("La edad no es 30")
}

//else if (si no,si)

if (age == 30) {
    console.log("La edad es 30")
}
else if (age < 18 ){
    console.log("es menor de edad")
}
else{
    console.log("La edad no es 30")
}

// Operadores ternatios

const message = age == 30 ? "La edad es 30" : "La edad no es 30"

console.log(message)

// switch

let day = 7
let dayName

switch (day){
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miercoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sabado"
        break
    case 6:
        dayName = "Domingo"
        break
    default:
        dayName = "Numero de dia incorrecto"
}

console.log(dayName)