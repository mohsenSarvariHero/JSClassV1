// and = && / or = || / not = !


// let grade = window.prompt("number : ");
// console.log(typeof grade )
// console.log(typeof Number(grade))
// // const inputNumber = Number(grade)
// grade = Number(grade)
// console.log(grade + 12)
// let grade= 10;
// if( grade<0 ){
//     console.log("fail")
// }else if (grade>10 || grade<=15){
//     console.log("medium")
// }else {
//     console.log("perfect")
// }


// console.log( true || false || 12)
// console.log(Boolean(true && 0 && true) )

// console.log( Boolean(0))
// if(temp > 0 && temp <= 30){
//     console.log("good")
// }else{
//     console.log('warm')
// }

// let grade= 12

// if( grade < 0 && grade > 0 ){
//     console.log("yes")
// }else{
//     console.log("not")
// }
// let temp = -10
// if(temp > 30|| temp <= 0 ){
//     console.log("bad")
// }else{
//     console.log('good')
// }


// const isCold = false;
// console.log(isCold)
// console.log(!isCold)

// // typeof !true;

// if(!isCold){
//     console.log("it is not cold")
// }else{
//     console.log("it is  cold")
// }

// const isCold = true;
// typeof !true;
// if(!isCold){
//     console.log("it is not cold")
// }else{
//     console.log("it is  cold")
// }

//= assign  -  == compare value - === compare value and datatype -- != not equall - !== 

//==

// const age = 24 ; 
// const age2 = "24"
// console.log(typeof age)
// console.log(typeof age2)
// if(age === "24"){
//     console.log("the age is 24")
// }else{
//     console.log("age not 24")
// }


// if(age === "24"){
//     console.log("the age is 24")
// }else{
//     console.log("age not 24")
// }

// if(age === 24){
//     console.log("the age is 24")
// }else{
//     console.log("age not 24")
// }

let age = '23'
if(age != '24'){
    console.log("that is not 24")
}else{
    console.log("age is 24")
}

if(age !='24'){
    console.log("that is not 24")
}else{
    console.log("age is 24")
}

//operator => * - / + ; operand = values

let students = 25;

students = students + 1 ; // students += 5 , students++ students += 1
students = students - 1 ;// student-- , student -= 1 , 
students = students * 2 ;//students *= 2
students = students / 2 ;//students /= 2 

students = students ** 2;
students = students ** 3;
console.log(2 ** 4)
students = students % 2 ;
console.log(24%2)
console.log(24/2)

// for(let i=0 ; i<=20 ; i++){
//     if(i%2 == 0){
//         Array.push(i)
//     }else{
//         array2.push(i)
//     }
// }

students = students % 3 ;

//augmentant

students  += 1;
students  += 2;
students  -= 2;
students  *= 2;
students  /= 2;
students  **= 2;
students  %=2;

//

students++ ; //+=1
students-- ; //-=1

//prority () , exponents , multipilication & division & module , addition & subtractions

let results = ( (1 * 4) + ((5 * 2) ** 2))/ 12;


// Exercise 1: Logical Operators
// Write a program that checks if a number is between 10 and 50 (inclusive).
// Write a program that checks if a number is less than 10 or greater than 50.
// Write a program that negates a boolean variable and prints the result.



// Exercise 2: Comparison Operators
// Declare a variable x = "10". Compare it with 10 using == and ===, then log the results.
// Check if 20 is not equal to "20" using != and !==.



// Exercise 3: Mathematical Operators
// Write a program that takes a number and:

// number = number * 5
// Multiplies it by 5
// Adds 10
// Divides by 2
// Subtracts 3
// Logs the final result


// Declare a variable num = 10. Using shorthand operators (+=, -=, *=, /=, %=, **=), perform the following operations and log the result each time:

// Add 5
// Multiply by 3
// Divide by 2
// Find the remainder when divided by 4
// Raise to the power of 2


// Exercise 4: Operator Precedence
// What will be the output of the following expressions? Predict the result before running them:

// let res = 5 + 2 * 3;
// let res = (5 + 2) * 3;
// let res = 10 / 2 + 3 * 4 - 1;
// let res = 2 ** 3 + 4 / 2;


