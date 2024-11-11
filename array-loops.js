for(i=11;i<=20;i++){
    console.log(i);
}

console.log("");

for(i=20;i>=11;i--){
    console.log(i);
}

console.log("");
console.log("========");
console.log("");
const friends = ["Jack", "Mark", "Arthur", "Kyle", "Rick"];

console.log("1: ",friends[0], " 3:", friends[2] );

console.log("");

let size = friends.length
console.log("friend amount: ", size);

console.log("");

for(i=0;i<size;i++){
    console.log(i+1, ". ", friends[i]);
}