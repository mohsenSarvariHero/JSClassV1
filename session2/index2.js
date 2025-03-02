// alert("1321")



//if
let grade = 12
let result;
if(grade < 10 ){
    result = "fail";
} else if (11 < grade < 15 ){
    result = "medium";
}else{
    result = "accept";
}
console.log(result)

console.log("hello")
console.log("hello")
console.log("hello")
console.log("hello")

// let i = 0
// while(i <= 4 ){
//     console.log("hello" , i);
//     i = i+1
// }
let i = 4;
let j = 0;
while(i >= 0 ){
    console.log("hello" , i);
    j = 0
    while(j <= 3){
        console.log("hello while two ", j)
        j = j + 1 
    }
    i = i-1
}

//loop
// console.log("js")
// console.log("js")
// console.log("js")

// let i = 1;
// while(i<=5){
//     console.log("js");
//     i = i+1;
// }
// console.log(i)



// let j = 5;
// while(j>=0){
//     console.log("js");
//     i--;
// }

let k = 6 ;
do{
    console.log("js", k)
    k = k+1
}while(k < 2)


// do{
//     console.log('js');
//     i++

// }while(i<5)


for(let i=0 ; i<=10 ; i = i + 1 ){
    console.log(i)
    for(let j=0 ; j<= 10 ; j = j + 1){
        console.log(`${i} * ${j} =  `, i*j)
    }
}

console.log("end of the loop")


for(let i=1;i<=1;i++){
    console.log("__" )
    for(let k=0 ; k<1 ; k = k + 1 ){
        console.log("***")
    }
}

// for(let i=0 ; i<8;i++){
//     console.log("html", i);
//     for(let j=0 ; j<=2 ; j++){
//         console.log("inner")
//     }
// }
 
// //odd , even

// //
let array1 = ['html','css','js']
console.log(array1.length)
// console.log(array1[3])
for(let i =0 ; i< 3;i++){
    console.log(array1[i]);
}

// //break , continue

for(let i =0 ; i<=10;i++){
    if(i == 7){
        break;
    }
    console.log(i)
}
console.log("continue")
for(let i =0 ; i<=10;i++){
    if(i == 7){
        continue;
    }
    console.log(i)
}

// //for in refrrencess  objects
// //for of item just for array

const persons= {
    name : "mohsen",
    lname : "sarvari",
    id : 1 
}
// for ( in )
for(let key in persons){
    console.log(key , persons[key]);//name ...
    // console.log(persons[key]);
} 

array1 = ['html','css','js']

// //for .. in array 
for(let item in array1){
    
    console.log( item +" " + array1[item])
}
console.log("------")

for(let item of array1){
    console.log(item);
}

let names = ['mohsen',"ali",'zahra',]

// for(let name of names){
//     console.log(name)
// }
for(let name of names){
    if(name === 'mohsen'){
        break;
    }else {
        console.log(name)

    }
}

let name="mohsen";
for(let ch in name){
    console.log(ch+" "+ name[ch] )
}

// 1. If Condition: input = 10 output = pos , input=0 output = zero
// Write a program that checks if a given number is positive, negative, or zero.

// 2. While Loop:
// Write a program that prints numbers from 1 to 10 using a while loop.

// 3. Do-While Loop:
// Write a program that prints numbers from 10 to 1 using a do-while loop.

// 4. For Loop (Nested):
// Write a program that prints the following pattern using nested for loops:


// *
// **
// ***
// ****
// *****

// 5. Even & Odd Numbers:
// Write a program that prints even numbers from 1 to 20 and odd numbers from 1 to 20.

// 6. Loop Through an Array:
// Write a program that takes an array ["apple", "banana", "cherry"] and prints each element using a for loop.

// 7. Break & Continue:
// Print numbers from 1 to 10 but stop when the number 5 is reached.
// Print numbers from 1 to 10 but skip number 5.
// 8. For-in & For-of Loops:
// Create an object {name: "Sara", age: 25, city: "Tehran"} and print its properties using a for-in loop.
// Create an array ["cat", "dog", "rabbit"] and print its elements using a for-of loop.
// 9. String Iteration:
// Write a program that prints each character of "JavaScript" using a for-of loop.


//[4,2,6,8,2,1,7,6,3,9] ==> a+b = 10 count: 4: (4,6)(8,2)(7,3)(9,1)

// {(())}  true
//{{})}   false
//{}{}()  true
//((())  false

// {()()}