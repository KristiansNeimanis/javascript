const person = {name:"Kris", age:"19", isStudent:"true"};

console.log(person.name);
if(person.age >= 18){
    console.log("Persona ir pilngadīga");
}else{
    console.log("Persona nav pilngadīga");
}

if(person.isStudent == "true"){
    console.log("Persona ir students");
}else{
    console.log("Persona nav students");
}

person.course = "PT2024"

console.log(person);