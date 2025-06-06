// 1. Crea una variable para cada operación aritmetica

let a = 5
let b = 10

// 2. Imprime 5 comparaciones verdades con diferentes operadores de comparación

console.log(10 < 11)
console.log(20 > 10)
console.log(20 == 20)
console.log(20 >= 10)
console.log(10 <= 20)

// 3. Imprime 5 comparaciones falsas con diferentes tipos de operadores de comparación

console.log(10 > 11)
console.log(20 < 10)
console.log(10 == 11)
console.log(10 != 10)
console.log(10 === 11)

// 4. Utiliza el operador logico and

console.log(10 < 20 && 20 < 10)

// 5. Utiliza el operador logico or

console.log(10 < 20 || 20 < 10)

// 6. Combina los operadores logicos

console.log(10 < 20 && 20 < 10 || 10 == 10 )

// 7. Añade alguna negación

console.log(!(10 == 10))

// 8. Utiliza en comparador ternario

const estaEncendido = false

estaEncendido ? console.log("esta encencido") : console.log("esta apagado")

// 9. Combina operadores aritmeticos, de comparación y lógicos

console.log(30 * 2 > 30 * 3 && 30 * 2 < 30 * 3)