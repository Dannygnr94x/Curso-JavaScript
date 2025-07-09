// 1. Crea un objeto con 3 propiedades

let person = {
    name: "Daniel",
    surname: "Lucas",
    age: 30
}

// 2. Accede y muestra su valor

console.log(person)

// 3. Agrega una nueva propiedad

person.email = "lukas.mune@gmail.com"
console.log(person)

// 4. Elimina una de las 3 primeras propiedades

delete person.surname
console.log(person)

// 5. Agrega una función e invócala

let person2 = {
    name: "Daniel",
    surname: "Lucas",
    age: 30,
    pet: function(){
        console.log("gato")
    }
}

person2.pet()

// 6. Itera las propiedades del objeto

for (let key in person){
    console.log(key + ": " + person[key])
}

// 7. Crea un objeto anidado

person2 = {
    name: "Daniel",
    surname: "Lucas",
    age: 30,
    job: {
        name: "mamporrero",
        exp: 20
    },
    pet: function(){
        console.log("gato")
    }
}

// 8. Accede y muestra el valor de las propiedades anidadas

console.log(person2.job.name)
console.log(person2.job.exp)

// 9. Comprueba si los dos objetos creados son iguales

console.log(person == person2)

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(person.name == person2.name)