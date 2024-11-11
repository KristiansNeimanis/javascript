let inputString = "sveiki";
function reverseString(str) {
    // izmantot reverse metodi
    str = inputString.split('').reverse().join('');
    return str
}

console.log("Oriģināls: " + inputString);
console.log("Apgriezts: " + reverseString());