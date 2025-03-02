
// alert("hello")

// console.log("hello js")
// console.error("hello js")
// console.warn("hello js")

// //primitve var , let , const
// let name = "mohsen"
// console.log(name)
// name = "ali"
// name="faeze"
// console.log(name)

// const fname="mohsen2"
// // fname = "ali"
// console.log(fname)
// fname = "ali2"
// console.log(fname)


// alert("hello")

// console.log("hello world")

// console.error("this is an error")

// console.warn("this is an warning")

// //var, let , const

// let age = 30

// console.log(age)

// const age2 = 30
// //age2 = 10
// console.log(age)


//string , number , boolean ,


 
// //primitive dataType
// //string , number , boolean , null, undefind
// const name = 'john';

// const age4= 20;

// const rating = 4.5;
// const name5 = 'mohsen  sarvari';
// const age2 = 30 ;
// const age3 = 30.5;
// const isCool = true;
// const x = null;
// const y = undefined
// let z 
// console.log(typeof age2)
// console.log(typeof age3)
// console.log(typeof isCool)
// console.log(typeof x)
// console.log(typeof y)
// console.log(typeof z)
// console.log(typeof x)


// //string
// //concatenation
// let name = "mohsen"
// const age4 = 20
// console.log("my name is " + name + " my age " + age4)
// // //``
// console.log(`my name is ${name} and my age is ${age4}`)

// const hello = `my name is ${name} and my age is ${age4}`;

// console.log(hello)


// //length
// const str1= "hello wOrld!"
// console.log(str1.slice(0,5))
// console.log(str1.substr(0,5))
// console.log(str1[4])
// console.log(str1.length)

// console.log(str1.toUpperCase())

// console.log(str1.toLowerCase())

// console.log(str1.substring(0,5))

// // const str2 = str1.substring(0,5).toUpperCase()
// // const lengthStr2 = str2.length
// // console.log(`${str2} is : ${lengthStr2}`)
// // console.log(str1.substring(0,5).toUpperCase())

// // console.log(str1.split(''));

// const str2= 'html , css , js ,react , next.js'
// const split2 =str2.split(',')
// console.log(split2)
// console.log(split2.join())

// const elements = ["Fire", "Air", "Water"];

// console.log(typeof elements.join());

// 
//arrays 
/* */
//const numbers = new Array(1,2,3,4,5);
// const numbers = [1,2,3,4,5]
// console.log(numbers)
// // console.log(typeof undefined)
// const fruits = ['apple',2,true,'oranges'];
// // fruits = "fdf"
// console.log(fruits)
// console.log(fruits[0])
// fruits[3] = "ad"
// console.log(fruits)

// fruits[4]= 'grapes';
// console.log(fruits)
// fruits.push("mangose");
// console.log(fruits)

// fruits.unshift("banana");
// console.log(fruits)

// fruits.pop();
// console.log(fruits)

// console.log(Array.isArray(fruits) );

// console.log(Array.isArray('hello') );
// const fruit2 = ['apple',2,"pear",'oranges'];

// console.log(fruit2[3])
// console.log(fruit2.indexOf('oranges'))
// console.log(fruit2[3])
//console.log(fruits.indexOf('apple'));



// console.log(fruits[1])
// console.log(fruits[1])


// //objects
// const person = {
//     firstName : "mohsen",
//     lastName : 'sarvari',
//     age : 30,
//     hubby : ['music','movie'],
//     address: {
//         street:"50 st tehran",
//         city: "tehran",
//         phone : "0920251"
//     }
// }
// //alert(person);

// console.log(person);

// console.log(person.firstName, person.lastName);

// console.log(person.hubby[1]);

// console.log(person.address.city);

// console.log(person.address.city);


// // const firstName = person.firstName
// // console.log(firstName)
// const {firstName , lastName , address : {city}} = person;
// console.log(firstName , lastName , city)

// person.email = 'mohsen@gmail.com';
// console.log(email)

// //
const todos = [
    {
        id : 1,
        text:'Take out crash',
        isCompleted : true
    },
    {
        id : 2,
        text : 'text 2 ',
        isCompleted:false
    },
    {
        id : 3,
        text : 'text 3',
        isCompleted:true
    }
];



console.log(todos)
console.log(todos[1].text)

// //json ""
// //convert Json



const JSONtodo = JSON.stringify(todos)
console.log(JSONtodo)



console.log(JSON.parse(JSONtodo))



//exercise
  


// ### **Exercise: JavaScript Basics**  
// 1. **Create an object** named `student` with the following properties:  
//    - `name`: Your name  
//    - `age`: Your age  
//    - `courses`: An array containing 3 programming languages you're interested in  
//    - `address`: An object with `city` and `country`  

// 2. **Modify the object:**  
//    - Add a new property `email` to the `student` object  
//    - Change the `city` value in `address`  

// 3. **Array Operations:**  
//    - Create an array `numbers` with values `[10, 20, 30, 40, 50]`  
//    - Add `60` to the end of the array  
//    - Remove the first element from the array  
//    - Find the index of `30`  


// 5. **String Manipulation:**  
//    - Create a string `sentence = "JavaScript is awesome!"`  
//    - Convert it to uppercase  
//    - Find the length of the string  
//    - Replace `"awesome"` with `"powerful"`  

// let email1 = "mohsenesarvari1379@gmail.com";
// moh...@gmail.com

// input : 
// const obj1 = {
//     name : "mohsen",
//     lname : "sarvari",
//     age : 20
// }

// output : 
// const newObj = {
//     mohsen : "name",
//     sarvari : "lname",
//     20 : "age"
// }

// 4. **Loops & Conditions:** 
//      - add [80,60] to numbers 
//    - Loop through `numbers` and print only the even numbers  
//     
//    - Check if `[80,60]` is in the array, and if it is, print `"Found array"`  

// str = mohsen nan  mohsen wedaj  efoijseo  654161  mohsen.

// output : mohsen repeated : 3