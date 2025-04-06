console.log("session6")


let array = [1,12,3,4,"mohsen","reza",12]

console.log(array.filter(Number))
console.log(array.filter(String))

//DOM = document object model 
console.log(document.querySelector("div")) //first
console.log(document.querySelector("div").outerText)

console.log(document.querySelectorAll("div")) //all
console.log(document.querySelectorAll("div")[1].innerText)

console.log(document.querySelector(".divf"))
console.log(document.querySelector(".divf").innerHTML)

console.log(document.querySelector("#idSecond"))
console.log(document.querySelector("#idSecond").innerHTML)
console.log("----")


console.log(document.head)
console.log(document.body)
console.log(document.body.getElementsByClassName('divf'))
console.log(document.body.getElementsByClassName('divf')[0].innerText)

const valueSecond = document.getElementById('idSecond');
console.log(valueSecond)


//adding

const divSecond = document.querySelectorAll('div')[1];
console.log("second: " + divSecond)
const newP = document.createElement('p');
// newP.textContent = "new paragraph created"
// divSecond.append(newP)
newP.innerText = "new paragraph created"
divSecond.append(newP)


//

const newDiv = document.getElementById('second');
console.log(newDiv)
console.log(newDiv.innerText)
console.log(newDiv.textContent)


const thirdDiv = document.getElementById('third');
console.log(thirdDiv.innerHTML)
const newDivs = document.createElement('div');
//newDivs.innerText=" <h1>hello</h1>hello third"
newDivs.innerHTML=" <h1>hello</h1>hello third"
thirdDiv.append(newDivs)


//remove 
newDivs.remove()

// thirdDiv.removeChild(newDivs)

//

const sectionF = document.getElementsByClassName('sectionF')[0];
console.log(sectionF)

const divSection = document.createElement('div');
divSection.innerHTML =`<p>html</p>
    <p>css</p>
    <p>js</p>
`
sectionF.append(divSection)
console.log(sectionF.lastChild.firstElementChild.innerText);

while(sectionF.firstChild){
    sectionF.removeChild(sectionF.firstChild)
}