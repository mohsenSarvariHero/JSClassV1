//Dom 

console.log("session6")

console.log(document.querySelector("div"))
console.log(document.querySelector("div").innerText)


console.log(document.querySelectorAll("div"))
const arr2 = document.querySelectorAll("div")
console.log(arr2[2].innerText)

const divF = document.querySelector(".divf")
console.log(divF.innerText)

const divId = document.querySelector("#divId")
console.log(divId.innerText)


console.log("-------")

console.log(document)
console.log(document.head)
console.log(document.body)
console.log(document.body.getElementsByClassName("divf"))
console.log(document.body.getElementsByClassName("divf")[0])
console.log(document.body.getElementsByClassName("divf")[0].innerText)

console.log("id------")

console.log(document.getElementById('divId'))
console.log(document.getElementById('divId').innerText )
console.log(document.getElementById('divId').innerHTML)
console.log(document.getElementById('divId').textContent)


//queryselector + All ; getEleclass , +Id 



const divFAll = document.body.getElementsByClassName('divf');
console.log(divFAll)
console.log(divFAll[1])
const divFSecond = divFAll[1]

const newP = document.createElement('P'); //<p></p>
// newP.textContent = "<h1>hello </h1> <br> <a > link</a>  new paragraph adding Dom"//<p>paragraph</p>
// newP.innerText = "<h1>hello </h1> <br> <a > link</a>  new paragraph adding Dom"
newP.innerHTML = "<h1>hello </h1> <br> <a> link</a>  new paragraph adding Dom"


;//<p>paragraph</p>
divFSecond.append(newP)
{/* <p>new paragraph adding Dom</p> */}

// newP.remove()
divFSecond.removeChild(newP)


//

//1 - select div first 
// select all div 
//select div with class 
// select with id 
//text in select by id show

//2-
/*
    select div class 
    show text 
    change text == javascript
    create ul : <li>Html</li><li>css</li><li>js</li>
*/

//3-

/*
    create div
    create  3 p 
    remove last child

*/


//4-
/*
create 

<section >
     <div>
        <h2>zahra</h2>
        <h2>hojatii</h2>
        <h2>moghadam</h2>
    </div>
</section>
    <div>
        <h2>zahra</h2>
        <h2>hojatii</h2>
        <h2>moghadam</h2>
    </div>

    remove with while (section.firstchild ){
        section.remove(section.firstChild)

    }

*/