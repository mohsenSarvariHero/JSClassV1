console.log("session6")


let array = [1,12,3,4,"mohsen","reza",12]

console.log(array.filter(Number))
console.log(array.filter(String))

//DOM = document object model 
// console.log(document.querySelector("div")) //first
// console.log(document.querySelector("div").innerText)

// console.log(document.querySelectorAll("div")) //all
// console.log(document.querySelectorAll("div")[1]) //all
// console.log(document.querySelectorAll("div")[1].innerText)

// console.log(document.querySelector(".divf"))
// console.log(document.querySelector(".divf").innerHTML)

// console.log(document.querySelector("#idSecond"))
// console.log(document.querySelector("#idSecond").innerText)
// console.log("----")


// console.log(document.head)
// console.log(document.body)
// console.log(document.body.getElementsByClassName('divf'))
// console.log(document.body.getElementsByClassName('divf')[0].innerText)

// const valueSecond = document.getElementById('idSecond');
// console.log(valueSecond.innerText)


// // //adding

// const divSecond = document.querySelectorAll('div')[1];
// console.log("second: " + divSecond)
// const newP = document.createElement('p');
// // newP.textContent = "new paragraph created"
// // divSecond.append(newP)
// newP.innerText = "new paragraph created"
// divSecond.append(newP)


// // //

// const newDiv = document.getElementById('second');
// console.log(newDiv)
// console.log(newDiv.innerText = "CHange")
// console.log(newDiv.textContent)


// const thirdDiv = document.getElementById('third');
// console.log(thirdDiv.innerHTML)
// console.log(thirdDiv.innerText)
// console.log(thirdDiv.textContent)
// const newDivs = document.createElement('div');
// // newDivs.innerText=" <h1>hello</h1>hello third"
// newDivs.innerHTML=" <h1>hello</h1>hello third"
// thirdDiv.append(newDivs)


// // //remove 
// // newDivs.remove()

// thirdDiv.removeChild(newDivs)

// // //

// const sectionF = document.getElementsByClassName('sectionF')[0];
// console.log(sectionF)

// const divSection = document.createElement('div');
// divSection.innerHTML =`<p>html</p>
//     <p>css</p>
//     <p>js</p>
// `
// sectionF.append(divSection)
// console.log(sectionF.lastChild.firstElementChild.innerText);

// while(sectionF.firstChild){
//     sectionF.removeChild(sectionF.firstChild)
// }


//

// 1- DOM Selection & Logging
// Select the first <div> element on the page and log it.
// Select all <div> elements and log the second one.
// Select an element with the class "divf" and log its inner HTML.
// Select an element with the id="idSecond" and log its inner text.


// 2. Modifying the DOM
// Select a specific <div> and change its innerText to "Changed Content!".
// Create a new <p> element, set its text to "This is a new paragraph", and append it to the second <div> on the page.
// Create a new <div> with inner HTML containing:

// <h2>Title</h2>
// <p>Some content inside the div</p>
// and append it to the <body>.


// 4. Removing Elements
// Select an existing <div> and remove its last child element.
// Select another element and completely remove it from the page.


// 5. Section Manipulation
// Select a section with class "sectionF".
// Create a new <div> inside this section with inner HTML containing:

// <p>HTML</p>
// <p>CSS</p>
// <p>JavaScript</p>
// Log the text of the first child inside "sectionF".
// Remove all child elements inside "sectionF" using a while loop.



// Bonus Challenge:
// Create a button that, when clicked, adds a new <p> element with "New Paragraph added!" inside a div.
// Add an event listener to remove any paragraph inside a specific div when clicked.
