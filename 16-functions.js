// funciones

// Simple

function myFunc(){
    console.log("Hola función")
}

for (let i = 0; i < 5; i++){
    myFunc()
}

// con paràmetros

function myFuncWithParams(name){
    console.log(`Hola, ${name}`)
}

myFuncWithParams("Daniel")
myFuncWithParams("Lucas")

// Funciones anónimas

const myFunc2 = function(name) {
    console.log(`Hola, ${name}`)
}

myFunc2("Daniel Lucas")

//Arrow functions

const myFunc3 = (name) => {
    console.log(`Hola, ${name}`)
}
myFunc3("Daniel Lucas")

const myFunc4 = (name) => console.log(`Hola, ${name}`)

myFunc4("Daniel Lucas")

// Paràmetros

function sum(a, b){
    console.log(a + b)
}
sum(5, 10)

function defaultsum(a = 0, b = 0){
    console.log(a + b)
}

defaultsum()
defaultsum(5)
defaultsum(5, 10)
defaultsum(b = 5)

// Retorno de valores

function mult(a, b){
    return a * b
}
let result = mult(5, 10)
console.log(result)

// funciones anidadas

function extern(){
    console.log("funcion externa")
    function intern(){
        console.log("Funcion interna")
    }
    intern()
}

extern()
//intern() Error: fuerna del scope


// funciones de orden superior

function applyfunc(func, param){
    func(param)
}

applyfunc(myFunc4, "Funcion de orden superior")

// forEach

let myArray = [1, 2, 3, 4]
myArray.forEach(function(value){
    console.log(value)
} )
myArray.forEach((value) => console.log(value))