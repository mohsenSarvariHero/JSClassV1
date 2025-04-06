console.log("solve4")
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
function fuzzBuzz(n){
    for(let i=0 ; i<=n;i++){
        if(i % 3 === 0 && i % 5 === 0 ){
            console.log(i + " : fuzz&Buzz")
        }else if(i % 5 === 0){
            console.log(i + ": Buzz")
        }else if(i % 3 === 0 ){
            console.log(i + ": fuzz")
        }else{
            console.log(i)
        }
    }
}
fuzzBuzz(20)




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
function mymaped2(array){
    const squared = array.map((item)=> item * item)
    console.log(squared)
}
mymaped2([1, 2, 3, 4, 5])
// const numbers = [1, 2, 3, 4, 5];
// const squared = numbers.map((item)=> item * item)
// console.log(squared)

//more 

function myMap(array, callback) {
    let result = []; 
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i])); 
    }
    return result; 
}

const numbers = [1, 2, 3, 4, 5];
const squared = myMap(numbers, num => num * num);
console.log(squared); 



// 3. Palindrome Checker  
// Write a function `isPalindrome(str)` that checks if a string is a palindrome (reads the same forward and backward).  
// Ignore spaces and capitalization.  


// function isPalindrome(str) {
//    // Your code here
// }


// }
let str1 = "Racecar";
let state = str1.split(""); 
let reversed = [];

while (state.length > 0) { 
    let pops = state.pop(); 
    console.log(state)
    reversed.push(pops);
    console.log(reversed)
}

console.log(reversed.join(""));
 
if(reversed.join("").toLowerCase() === str1.toLowerCase()){
    console.log("palindrom")
}else{
    console.log("not")
}


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

function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

const logMessage = () => console.log("User stopped typing...");
const debouncedFunction = debounce(logMessage, 2000);
console.log(debouncedFunction)
// Example usage:
// document.getElementById("inputField").addEventListener("input", debouncedFunction);



// 5. Deep Clone an Object
// Write a function `deepClone(obj)` that creates a deep copy of a nested object **without using `JSON.parse(JSON.stringify(obj))`**.  


// function deepClone(obj) {
//    // Your code here
// }

// const original = { a: 1, b: { c: 2, d: 3 } };
// const copy = deepClone(original);
// copy.b.c = 42;

// console.log(original.b.c); // Should still be 2
function deepClone(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item));
    }

    const clonedObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = deepClone(obj[key]);
        }
    }

    return clonedObj;
}

// تست
const original = { a: 1, b: { c: 2, d: 3 } };
const copy = deepClone(original);
copy.b.c = 42;

console.log(original.b.c); // خروجی: 2 (اصلی تغییر نمی‌کند)
console.log(copy.b.c);     // خروجی: 42 (فقط کپی تغییر می‌کند)




// 6. Promise-based Delay Function
// Create a function `delay(ms)` that returns a promise, which resolves after `ms` milliseconds.

// js
// function delay(ms) {
//    // Your code here
// }

// delay(2000).then(() => console.log("Executed after 2 seconds"));


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Example usage:
delay(2000).then(() => console.log("Executed after 2 seconds"));


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
console.log("typeof " , Boolean(-1))


let arr = {
    name_lname: "mohsen",
    lname : "sarvari"
}
console.log(arr.name_lname)
for(let i in arr){
    console.log(arr[i])
}