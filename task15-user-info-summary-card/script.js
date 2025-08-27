let name = prompt("Enter your NAME");
let age = prompt("Enter your AGE");
let color = prompt("Enter your FAVOURITE COLOR");
let hobby = prompt("Enter your HOBBY");
let job = prompt("Enter your DREAM JOB");

let message = `
    <h2>Hello ${name}! </h2>
    <p>You are ${age} years old.</p>
    <p>Your Favourite Color is <strong style ="color:${color}">${color}</strong></p>
    <p>Your hobby is ${hobby} </p>
    <p>Your Dream JOB is ${job} </p>
`;

document.getElementById("info-card").innerHTML = message;
