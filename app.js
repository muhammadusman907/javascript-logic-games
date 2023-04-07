// // Question number 1
let userNumber1 = +prompt ("Enter the larger number")
let userNumber2 = +prompt ("Enter the larger number")

if ( userNumber1 > userNumber2 )
{
console.log(userNumber1 + " larger number")
}
else if (userNumber2 > userNumber1 ){
    console.log(userNumber2 + " larger number")
}
else{
    console.log("equal number")
}

// Questoin numer 2

let userNum = +prompt("Enter the sign (+,-) number");
if  ( userNum > 0 ){ 
    console.log("This sign is +")
}
else{
    console.log("this sign -")
}

// question number 3

let userNum1 = +prompt("Enter the larger number")
let userNum2 = +prompt("Enter the larger number")
let userNum3 = +prompt("Enter the larger number")
let userNum4 = +prompt("Enter the larger number")
let userNum5 = +prompt("Enter the larger number")

if (userNum1 > userNum2) {
    console.log(userNum1 + " larger number")
}

else if (userNum1 > userNum2) {
    console.log(userNum1 + " larger number")
}
else if (userNum2 > userNum3) {
    console.log(userNum2 + " larger number")
}
else if (userNum3 > userNum4) {
    console.log(userNum3 + " larger number")
}
else if (userNum4 > userNum5) {
    console.log(userNum4 + " larger number")
}
else if (userNum5 > userNum1) {
    console.log(userNum5 + " larger number")
}
else {
    console.log("equal number")
}

// question number 4

for ( let i = 0 ; i <= 15 ; i++ ){
if (i%2 ===0){
    console.log(i + " This is  even number")
}
else if (i%2 !== 0){
    console.log(i + " This is odd number"  )
}
}

// question number 5

let marks = +prompt("write a percentage")
if (marks >= 0 && marks <=100)  {
if (marks >= 90 && marks <= 100 ) {
    console.log("A")
}
else if (marks >= 80 && marks <= 90 ) {
    console.log("B")
}
else if (marks >= 70 && marks <= 80) {
    console.log("c")
}
else if (marks >= 60 && marks <= 70) {
    console.log("D")
}
else if (marks >= 50 && marks <= 60) {
    console.log("F")
}
else {
    console.log("fail")
}
}
else{
    console.log("wrong input")
}

// question number 6
for ( let  j = 1; j <= 100; j++) {
    if ( j <= 100 && j%3 !==0 && j%5 !== 0){
        console.log(j)
    }
    else if (j % 3 === 0 && j % 5 === 0) {
        console.log( "FizzBuzz")
    }
    else if (j % 3 === 0) {
        console.log(  "Buzz")
    }
    else if (j%5 === 0) {
        console.log(  "Fizz")
    }
}
// // Question number 7
for ( let a = 1 ; a <= 5 ; a++ ){
    star = "";
    for(let b = 1 ; b <= a ; b++){
        star = star + " *";
    }
    console.log(star)
}
