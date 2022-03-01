// // 4 + 3;
// // if (4+3===7){
// //     console.log("Helloo");
// // }

// // function sayHello(){
// //     console.log("Hello");
// // }

// // sayHello();


// // var sayBye = function() {
// //     console.log("Bye");
// // }

// // sayBye();

// // function sing(song) {
// //    console.log(song);
// // }

// // sing("Laa di da");
// // sing("Hello");

// // function multiply(a ,b) {
// //     if (a > 10 || b > 10) {
// //         return "Thats too hard"
// //     }else {
// //         return a * b;
// //     }   
// // }

// // multiply(5, 10);


// // function multiply(a ,b) {
// //    return a * b;
// // }

// // alert(multiply(4,5));

// // n 

// // var car = prompt("how old are you? ")

// // function checkdriveage() {
// //     if (car < 23) {
// //         return alert("Your not old enough drive power off!!");
// //     }else if (car >= 23){
// //        return alert("Power on!!")
// //     }
// // }

// // checkdriveage();

// // function checkDriveage2() {
// //     if (car === 18){
// //         return alert("Congratulation You can now drive! POWER ON");
// //     }else{
// //         return alert("You did not pass the driving test");
// //     }
// // }

// // checkDriveage2();


// var list = ["tiger", "cat","bear", "bird"];

// console.log(list[1]);


// var functionlist = [function apple() {
//     console.log("apple");
// }];

// var mixedlist = [];

// list.shift();
// list.push("elephant");

// list.concat(["eye", "boy"]);

// list.sort();


// var user = {
//     name: "john",
//     age: 33,
//     hobby: "Soccer",
//     isMarried: false,
//     spells: ["shazam", "abaraca", "boo"],
//     shout: function () {
//         console.log("Ahhhhhh");
//     }
// }; 
// user.name 
// user.isMarried = true;
// user.age = 34;
// user.spells[1];
// user.shout();

// //function inside an object is a method
// var list = ["apple", "mango", "banana"];

// var userlist = [
//     {
//         username: "andy",
//         password: "serce"
//     },
//     {
//         username: "jess",
//         password: "123"

//     }
// ]

// userlist[0].password;

var database = [
    {
        username: "winner",
        password: "qwerty"
    }
];

var newsfeed = [
    {
        username: "bob",
        timeline: "so tired i wanna to go and sleep"
    },

    {
        username: "sally",
        timeline: "Javascript is so hard"
    }
];

var usernamePrompt = prompt("What's your username: ");
var passwordPrompt = prompt("What's your password: ")

if (usernamePrompt === database){
    return alert("Welcome")
}

function signin(user, pass) {
    if (user === database[0].username && pass === database[0].password) {
        console.log(newsfeed)
    }else{
        alert("sorry, wrong username and password")
    }
}

signin(usernamePrompt, passwordPrompt);