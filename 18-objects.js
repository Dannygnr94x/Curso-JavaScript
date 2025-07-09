// objects

// sintaxis

let person = {
    name: "Daniel",
    age: 30,
    alias: "Lukas"
}

// acceso a propiedades

// notacion por punto

console.log(person.name)

//notacion de corchetes

console.log(person["name"])

// modificacion 

person.name = "Daniel Lucas" // podemos cambiar el dato

console.log(person.name)

person.age = "30" // podemos tambien cambiar el tipo de dato

console.log(person.age)


//eliminacion

delete person.age

console.log(person)

//nueva propiedad

person.email = "lukas,mune@gmail.com"

console.log(person)

person["age"] = 30

console.log(person)

// metodos (funciones)

let person2 = {
    name: "Daniel",
    age: 30,
    alias: "Lukas",
    walk: function(){
        console.log("La persona camina.")
    }
}
person2.walk()

// anidacion de objects

let person3 = {
    name: "Daniel",
    age: 30,
    alias: "Lukas",
    walk: function(){
        console.log("La persona camina.")
    },
    job: {
        name: "programador",
        exp: -3,
        work: function(){
            console.log(`La persona de ${this.exp} años de experiencia trabaja`)
        }
    }
}
console.log(person3)
console.log(person3.job)
console.log(person3.job.name)
person3.job.work()

// igualdad de objects



let person4 = {
  name: 'Daniel Lucas',
  alias: 'Lukas',
  email: 'lukas.mune@gmail.com',
  age: 30
}

console.log(person)
console.log(person4)


console.log(person == person4)
console.log(person === person4)

console.log(person.name == person4.name)

// iteraciom

for (let key in person4){
    console.log(key + ": " + person4[key])
}

// funciones como objects

function Person(name, age){
    this.name = name
    this.age = age
}

let persona5 = new Person("Daniel", 30)
console.log(persona5)