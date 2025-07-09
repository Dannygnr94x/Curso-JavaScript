// 1. Crea un bucle que imprima los números del 1 al 20

for (let i = 1;i < 21; i++){
    console.log(`hola ${i}`)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let suma = 0

for (let i = 1;i <= 100; i++){
    suma += i
}
 console.log(`La suma del 1 al 100 es: ${suma}`)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for (let i = 2; i <= 50; i += 2){
    console.log(i)
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let myArray = ["daniel", "lucas", "jose", "nuria"]
for (let i = 0; i < myArray.length; i++){
    console.log(`nombre; ${myArray[i]}`)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let texto = "daniel"
let contador = 0
let vocales = "aeiou"

for (let i = 0; i < texto.length; i++){
    if (vocales.includes(texto[i])){
        contador++
    }
}
console.log("Numero de vocales: ", contador)
// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let numeros = [2, 2, 5, 5]
let multiplicacion = 1
for (let i = 0; i < numeros.length; i++){
    multiplicacion *= numeros[i]
}
console.log(multiplicacion)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// 8. Usa un bucle para invertir una cadena de texto

let invertido = ""

for (let i = texto.length - 1; i >= 0; i--) {
  invertido += texto[i]
}

console.log(invertido)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let n = 10
let fib = [0, 1]

for (let i = 2; i < n; i++) {
  fib[i] = fib[i - 1] + fib[i - 2]
}

console.log(fib)


// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let numeros2 = [5, 12, 8, 20, 3, 15]
let mayoresA10 = []

for (let i = 0; i < numeros2.length; i++) {
  if (numeros2[i] > 10) {
    mayoresA10.push(numeros2[i])
  }
}

console.log(mayoresA10)
