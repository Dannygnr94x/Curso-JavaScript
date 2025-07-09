// 1. Crea una función que reciba dos números y devuelva su suma

function myFunc(a, b){
    console.log(a + b)
}
myFunc(3, 4)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

function encontrarMayor(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Debes proporcionar un array con al menos un número.")
  }

  let mayor = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > mayor) {
      mayor = arr[i]
    }
  }
  return mayor
}

const numeros2 = [42, 23, 63, 29, 65, 23]
const numeros = [5, 8, 3, 21, 14]
console.log(encontrarMayor(numeros))


// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

function contarVocales(texto) {
  if (typeof texto !== 'string') {
    throw new Error("Debes proporcionar un texto válido.")
  }

  const vocales = texto.match(/[aeiouáéíóúAEIOUÁÉÍÓÚ]/g)
  return vocales ? vocales.length : 0
}

const frase = "Hola, ¿cómo estás?"
const cantidad = contarVocales(frase)
console.log("Número de vocales:", cantidad)


// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

function convertirAMayusculas(array) {
  return array.map(str => str.toUpperCase())
}

const palabras = ["hola", "mundo", "javascript"]
const palabrasMayusculas = convertirAMayusculas(palabras)

console.log(palabrasMayusculas)


// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function esPrimo(numero) {
  if (numero <= 1) return false
  if (numero === 2) return true
  if (numero % 2 === 0) return false

  for (let i = 3; i <= Math.sqrt(numero); i += 2) {
    if (numero % i === 0) return false
  }
  return true
}
console.log(esPrimo(8))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

function elementosComunes(arr1, arr2) {
  return arr1.filter(elemento => arr2.includes(elemento))
}
const array1 = [1, 2, 3, 4, 5]
const array2 = [3, 4, 5, 6, 7]

const comunes = elementosComunes(array1, array2)
console.log(comunes)


// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

function sumaPares(array) {
  let suma = 0
  for (let numero of array) {
    if (numero % 2 === 0) {
      suma += numero
    }
  }
  return suma
}
const numeros3 = [1, 2, 3, 4, 5, 6]
console.log(sumaPares(numeros3))


// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

function elevarCuadrado(array){
    return array.map(numero => numero ** 2)
}
const numeros4 = [1, 2, 3, 4]
const cuadrados = elevarCuadrado(numeros4)
console.log(cuadrados)


// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function invertirPalabras(cadena) {
  return cadena.split(" ").reverse().join(" ")
}

const texto = "Hola mundo desde JavaScript"
const resultado = invertirPalabras(texto)
console.log(resultado)


// 10. Crea una función que calcule el factorial de un número dado

function factorial(n) {
  if (n < 0) return undefined
  if (n === 0 || n === 1) return 1
  return n * factorial(n - 1)
}

console.log(factorial(6))


