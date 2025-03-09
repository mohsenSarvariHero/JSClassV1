//ternary



// let number = 4
// if(number === 4  ){
//     console.log("four")
// }else{
//     console.log("No four")
// }
//four

// number === 4 ? true:false
// number === 4 ? console.log("four"):console.log("No four")




// number===4 ? console.log("four") : console.log("No Four")



// function information(name = "mohsen" , age = 23 , city="mashhad"){
//     console.log(`The name is ${name} \n the age is ${age} \n the city is ${city} `);

// }
function information(name = "mohsen" , age = 23 , city="mashhad"){
    return (` The name is ${name} \n the age is ${age} \n the city is ${city} `);
}

console.log(information("zahra",23,"mashhad"))
information("faeze",22,"mashhad")

// وردی تابع جمع میخوام خروجی تابع های تقسیم و ضرب 
//sum(c,g) => c , g
// divided(10,5)  => c
//multip(2,5) => g 

function divided(a , b){
    let divi = a / b
    return divi
}
console.log(divided(10,5))

function multip(a,b){
    let multi = a * b;
    return multi
}
console.log(multip(2,5))

function sum(a , b ){
    let sums = a + b 
    console.log(sums)
}
console.log(sum(4,5))
sum(divided(10,5),multip(2,5))
// console.log(sum(2,10))
//iyuiyui

// console.log(information())

// let aa = "mohsen"
// console.log(aa)


    // console.log("The name is zahra");
    // console.log("the age is 23");
    // console.log("the city is mashhad");

    // //5864534565 vhvg
    // console.log("The name is zahra");
    // console.log("the age is 23");
    // console.log("the city is mashhad");

    // //
    // console.log("The name is zahra");
    // console.log("the age is 23");
    // console.log("the city is mashhad");
// console.log("session one")
//
//
//
//
//
//
//

// console.log("session one")
// function happyNewyear(){
//     console.log("happy newyear dear ali i hope have nice year")
//     console.log("happy newyear dear zahra i hope have nice year")
//     console.log("happy newyear dear faeze i hope have nice year")
//     console.log("happy newyear dear reza i hope have nice year")
//     console.log("happy newyear dear sara i hope have nice year")
// }
// happyNewyear();
//happyNewyear();


function happyNewyear(user1,user2,user3){
    console.log(`happy newyear dear ${user1} i hope have nice year`)
    console.log(`happy newyear dear ${user2} i hope have nice year`)
    console.log(`happy newyear dear ${user3} i hope have nice year`)
    console.log(`happy newyear dear ${user1} i hope have nice year`)
    console.log(`happy newyear dear ${user1} i hope have nice year`)
}

happyNewyear("ali","reza","zahra");

//happyNewyear();

function happyNewyear(user, age){
    console.log(`happy newyear dear ${user} i hope have nice year ${age}`)
}
happyNewyear("ali",23);
happyNewyear("reza",22);
happyNewyear("mohsen",24);

//personal info

// function saySession(){
//     console.log("session one")
//     console.log("session two")

// }

// saySession();
// saySession();

// function saySession(input){
//     console.log(`session ${input}`)
// }

// saySession("one")


// function sum(a , b){
//     console.log(a)
//     console.log(b)
//     console.log(a + b)
// }

//sum(4,5)
//sum(4) 
// ==
// const a = 4 ;
// const b = 5;
// console.log(a+b)


//console.log(sum() )




function sum(a,b){
    const sum = a+b;
    console.log(sum)

}
const valueFunction = sum(4,5) //9
console.log(valueFunction)

//sum = ()=>{}
// console.log(sum(4,5))
//FUNCTION -
//FUNCTION *
//calculator

//function odd and even


let string = "mohsen is deve;oper"
console.log(string.includes("mohsen"))

let array = ["apple",'peach',true]
console.log(array.includes("peach2"))

// //function email

// function isValid(email){
//     if(email.includes("@")){
//         if(email.includes("yahoo") || email.includes("gmail")){
//             if(email.includes(".com")){
//                 console.log("valid email")
//             }else{
//                 console.log("not valid")
//             }
//         }else{
//             console.log("not valid")
//         }
        
//     }else{
//         console.log("not valid")
//     }
// }
// isValid("mohsen@yahoo.com")






//arrow
// function hello(){
//     console.log("hello")
// }
// hello()


// hello2()
// const hello2 = ()=>{console.log("hello arrow")}



const hello22 = (name,age)=>{
    console.log(`name is  ${name}`)
}


setTimeout(()=>{console.log("123")}, 3000);

// setTimeout(function(){
//     console.log("hello")
// }, 3000);

// setTimeout(()=>{console.log("hello")}, 3000);


let array4 = [1,2,3,4,5,6]

// let sum=0;
// for(let item of array4){
//     sum = sum + item
// }
// console.log(sum)

let sum2= array4.reduce((sum , item)=>sum + item)
console.log(sum2)

// sum = (a,b) =>{
//     console.log(a+b)
// }

// sum(4 , 5)





// 1. FizzBuzz (Advanced Version) 

// Write a function `fizzBuzz(n)` that prints numbers from `1` to `n`, but:  
// - If the number is divisible by **3**, print `"Fizz"`.  
// - If the number is divisible by **5**, print `"Buzz"`.  
// - If the number is divisible by **both 3 and 5**, print `"FizzBuzz"`.  
// - Otherwise, print the number.  

// js
// function fizzBuzz(n) {
//    // Your code here
// }

// fizzBuzz(20);




// 2. Custom Map Function 
// Create a function `myMap` that mimics the behavior of JavaScript's `.map()` method.  
// It should take an array and a callback function as arguments and return a **new array** with the transformed values.

// js
// function myMap(array, callback) {
//    // Your code here
// }

// const numbers = [1, 2, 3, 4, 5];
// const squared = myMap(numbers, num => num * num);
// console.log(squared); // Output: [1, 4, 9, 16, 25]




// 3. Palindrome Checker  
// Write a function `isPalindrome(str)` that checks if a string is a palindrome (reads the same forward and backward).  
// Ignore spaces and capitalization.  


// function isPalindrome(str) {
//    // Your code here
// }

// console.log(isPalindrome("Racecar")); // true
// console.log(isPalindrome("hello"));   // false

// 4. Debounce Function 
// Implement a debounce function. It should delay the execution of a function until after a specified time has passed.  

// js
// function debounce(func, delay) {
//     // Your code here
// }

// const logMessage = () => console.log("User stopped typing...");
// const debouncedFunction = debounce(logMessage, 2000);

// // Call multiple times quickly
// debouncedFunction();
// debouncedFunction();
// debouncedFunction(); // Only this one should execute after 2s




// 5. Deep Clone an Object
// Write a function `deepClone(obj)` that creates a deep copy of a nested object **without using `JSON.parse(JSON.stringify(obj))`**.  


// function deepClone(obj) {
//    // Your code here
// }

// const original = { a: 1, b: { c: 2, d: 3 } };
// const copy = deepClone(original);
// copy.b.c = 42;

// console.log(original.b.c); // Should still be 2




// 6. Promise-based Delay Function
// Create a function `delay(ms)` that returns a promise, which resolves after `ms` milliseconds.

// js
// function delay(ms) {
//    // Your code here
// }

// delay(2000).then(() => console.log("Executed after 2 seconds"));



// 7. LRU Cache (Least Recently Used Cache) 
// Implement an LRU Cache class with the following methods:  
// - `put(key, value)`: Adds a new key-value pair to the cache. If the cache is full, remove the least recently used key.  
//  `get(key)`: Returns the value for the key if it exists, otherwise `-1`. 


// class LRUCache {
//     constructor(capacity) {
//        // Your code here
//     }
    
//     get(key) {
//         // Your code here
//     }
    
//     put(key, value) {
//         // Your code here
//     }
// }

// const cache = new LRUCache(2);
// cache.put(1, "A");
// cache.put(2, "B");
// console.log(cache.get(1)); // "A"
// cache.put(3, "C"); // Removes key 2
// console.log(cache.get(2)); // -1



// 8. Throttle Function
// Write a function `throttle(func, limit)` that ensures a function is called at most **once every X milliseconds**.

// js
// function throttle(func, limit) {
//    // Your code here
// }

// const expensiveCall = () => console.log("Throttled Call");
// const throttledFunction = throttle(expensiveCall, 2000);

// throttledFunction();
// throttledFunction();
// throttledFunction(); // Only the first one should execute immediately
