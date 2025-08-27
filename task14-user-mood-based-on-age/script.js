const name = prompt("Enter your NAME");
const age = prompt("Enter your AGE");
const favColor = prompt("Enter your FAVOURITE COLOR");
const hobby = prompt("Enter your HOBBY");
const job = prompt("Enter your DREAM JOB");

let mood = "";

if (age <= 12) {
    mood = "You are curious Kid!";
}
else if (age >= 13 && age <= 18) {
    mood = "Teen energy vibes!";
}
else if (age >= 19 && age <= 25) {
    mood = "Time to chase your dreams!";
}
else {
    mood = "Wise and experienced!";
}

console.log("--------------------------------------");
console.log("            USER INFO CARD            ")
console.log("--------------------------------------");
console.log(`👤 NAME                  : ${name}`);
console.log(`🎂 AGE                   : ${age}`);
console.log(`🎨 FAV COLOR             : ${favColor}`);
console.log(`🎯 HOBBY                 : ${hobby}`);
console.log(`💼 DREAM JOB             : ${job}`);
console.log(`😊 MOOD                  : ${mood}`);
console.log("--------------------------------------");
