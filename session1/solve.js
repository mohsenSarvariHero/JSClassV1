//exercise
  
console.log("solve")

// ### **Exercise: JavaScript Basics**  
// 1. **Create an object** named `student` with the following properties:  
//    - `name`: Your name  
//    - `age`: Your age  
//    - `courses`: An array containing 3 programming languages you're interested in  
//    - `address`: An object with `city` and `country`  

const course1 = "html"
const student = {
    name : "mohsen",
    age : 24,
    courses: [course1 , "css" , "js"],
    address : {
        city : "Tehran",
        country : "IRAN"
    }
}
console.log(student)

// 2. **Modify the object:**  
//    - Add a new property `email` to the `student` object  
//    - Change the `city` value in `address`  


student.email = "mohsen.sarvari@ut.ac.ir"
console.log(student)
student.address.city = "Mashhad"
console.log(student)
console.log(student.address.city)
// 3. **Array Operations:**  
//    - Create an array `numbers` with values `[10, 20, 30, 40, 50]`  
//    - Add `60` to the end of the array  
//    - Remove the first element from the array  
//    - Find the index of `30`  


const numbers = [10,20,30,40,50];
numbers.push(60);
numbers.shift();
console.log(numbers.indexOf(30))
console.log(numbers)

// 5. **String Manipulation:**  
//    - Create a string `sentence = "JavaScript is awesome!"`  
//    - Convert it to uppercase  
//    - Find the length of the string  
//    - Replace `"awesome"` with `"powerful"`  

const sentence = "Javascript is awesome!";
console.log(sentence.toUpperCase())
console.log(sentence.toUpperCase().length)
console.log(sentence.replace('awesome','powerful'))



// let email1 = "mohsenesarvari1379@gmail.com";
// moh...@gmail.com

const email = "mohsenesarvari1379@gmail.com"
const pos = email.indexOf("@")
console.log(pos)
const end = email.slice(pos)
console.log(end)
const start = email.slice(0,3)
console.log(start)
console.log(`${start}...${end}`)


 
const obj1 = {
    name : "mohsen",
    lname : "sarvari",
    age : 20
}

console.log(Object.keys(obj1))
console.log(Object.values(obj1))
const keys = Object.keys(obj1);
const values = Object.values(obj1);
console.log(Object.entries(obj1))
const newObjs = {}
newObjs.name = "ali"

for (let key in obj1){
    newObjs[obj1[key]] = key
}
console.log(newObjs)

delete obj1.age;
 
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


const numbers2 = [10,20,30,40,50];
numbers2.push([80,60]);
console.log(numbers2)
for(let key in numbers2){
    console.log(numbers2[key])
    console.log(Array.isArray(numbers2[key]))
}

const str = "mohsen nan  mohsen wedaj  efoijseo  654161  mohsen."

// output : mohsen repeated : 3

// const indexWord = str.indexOf("mohsen");
// // const lengthWord = "mohsen".length;
// console.log(str.indexOf("mohsen",indexWord + lengthWord))
// console.log(lengthWord)
// console.log(indexWord)

const word = "mohsen";
const lengthWord = word.length;
let count = 0;
let offset = 0;
let position = str.indexOf(word,offset);

while(position !== -1){

    count = count + 1;
    offset = position + lengthWord;
    position = str.indexOf(word,offset);

}
console.log(`${word} occured in sentence is : ${count}`)


//
//  input:
//    array1 = [ 1, 2, 'red'];
//    array2 = [ 3, 4, 'orange'];
//    array3 = [ 5, 6, 'pink'];
//    array4 = [ 7, 8, 'blue'];

//  output : 
//    a:    array5 = [ 1, 2, 'red', 3, 4, 'orange', 5, 6, 'pink', 7, 8, 'blue']
//    b:    numbers = [1, 2, 3, 4, 5, 6, 7, 8]
//contact
let  array1 = [ 1, 2, 'red'];
let  array2 = [ 3, 4, 'orange'];
let  array3 = [ 5, 6, 'pink'];
let  array4 = [ 7, 8, 'blue'];

let array5 = [...array1,...array2,...array3,...array4] ;
console.log(array5)

let numberst = []
for(let i of array5){
    if(typeof i === "number"){
        numberst.push(i)
    }
}
console.log(numberst)

//  input:
//        fruits = ['apple' , 111 , 222 , 333 , 'orange' , 'grapes' , 'watermelon']
//  output:
//        fruits = ['apple' , 'the numbers is deleted' , 'orange' , 'grapes' , 'watermelon']
//splice
let fruits = ['apple' , 111 , 222 , 333 , 'orange' , 'grapes' , 'watermelon']

for(let i=0 ; i < fruits.length; i++){
    if(typeof fruits[i]=== "number"){
        fruits[i] = "the number is deleted";
    }
}
console.log(fruits)

//  input:
//        sentence = "That cat is very cute and smart. ";
//  output:
//        very qute

let sentences = "That cat is very cute and smart. ";
let words = sentences.split(" ")
console.log(words)
console.log(words[3]+" "+words[4].replace('c','q'))


//  input:
//  We have an object wizard with the following structure:
//        firstName: "Harry", lastName: "potter", schoolName: "Hogwarts"
//  Convert the product wizard into a pretty JSON string (with indentation) using JSON.stringify().
//  Use an indentation of 4 spaces(or tab) to make the JSON more readable.
//  output:
//        {
//            "firstName": "harry",
//            "lastName": "potter",
//            "schoolName": "Hogwarts"
//        }

let wizard = {
    firstName: "Harry",
    lastName: "potter",
    schoolName: "Hogwarts"
};

// Convert firstName to lowercase
wizard.firstName = wizard.firstName.toLowerCase();

// Convert the object to a JSON string with an indentation of 4 spaces
let prettyJSON = JSON.stringify(wizard, null, 4);

console.log(prettyJSON);

//  Create an object that contains information about employee
//  Get and display all the keys of this object.
//  Get and display all the values of this object.
//  Add a new property called experience with the value 5 years to the object and then display the updated object.
//  Display the employee object again.

// Step 1: Create an object that contains information about an employee
let employee = {
    firstName: "John",
    lastName: "Doe",
    position: "Software Engineer",
    department: "Engineering",
    salary: 50000
};

// Step 2: Get and display all the keys of this object
let keyss = Object.keys(employee);
console.log("Employee Keys:", keyss);  // Output: ['firstName', 'lastName', 'position', 'department', 'salary']

// Step 3: Get and display all the values of this object
let valuess = Object.values(employee);
console.log("Employee Values:", valuess);  // Output: ['John', 'Doe', 'Software Engineer', 'Engineering', 50000]

// Step 4: Add a new property called 'experience' with the value '5 years' to the object
employee.experience = "5 years";

// Step 5: Display the updated object
console.log("Updated Employee Object:", employee);

// Step 6: Display the employee object again
console.log("Final Employee Object:", employee);
