console.log("session7")
const listItems = document.getElementsByTagName("li"); // Gets all <li> elements
for (let item of listItems) {
    console.log(item.innerHTML);
}


const linkF = document.createElement('a')
linkF.href="#"
//linkF.setAttribute('href', '#');
linkF.innerHTML = 'link1'
document.body.append(linkF)







const headOne = document.body.getElementsByClassName("hOne");
console.log(headOne)
const hfirst = headOne[0]
console.log(hfirst)

hfirst.style.backgroundColor = "red"
hfirst.style.color = "blue"
hfirst.style.margin = "10px"

//hfirst.style.cssText = "background-color: red; color: blue; margin: 10px;";


const btn = document.getElementsByClassName("btnHide");
console.log(btn)

const btnHide = btn[0]
console.log(btnHide)

// btnHide.addEventListener("click",()=>{
//     const textMohsen = document.getElementById('textMohsen');
//     console.log(textMohsen)
//     textMohsen.style.display="none"
// })

btnHide.addEventListener("click",()=>{
    const textMohsen = document.getElementById('textMohsen');
    console.log(textMohsen)
    textMohsen.classList.add("hidden")
})



const btnSh = document.getElementsByClassName("btnShow");
console.log(btnSh)

const btnShow = btnSh[0]
console.log(btnShow)

// btnShow.addEventListener("click",()=>{
//     const textMohsen = document.getElementById('textMohsen');
//     console.log(textMohsen)
//     textMohsen.style.display="block"
// })

btnShow.addEventListener("click",()=>{
    const textMohsen = document.getElementById('textMohsen');
    console.log(textMohsen)
    textMohsen.classList.remove("hidden")
})


const btnT = document.getElementsByClassName("btnToggle");
console.log(btnT)

const btnToggle = btnT[0]
console.log(btnToggle)

// btnToggle.addEventListener("click",()=>{
//     const textMohsen = document.getElementById('textMohsen');
//     if (textMohsen) { // Ensure the element exists
//         if (textMohsen.style.display === "none") {
//             textMohsen.style.display = "block"; // Show the element
//         } else {
//             textMohsen.style.display = "none"; // Hide the element
//         }
//     }
// })

btnToggle.addEventListener("click",()=>{
    const textMohsen = document.getElementById('textMohsen');
    textMohsen.classList.toggle("hidden")
})





const links = [
    {
        title : "link1",
        href : "scholar"
    },
    {
        title : "link2",
        href : "scholar2"
    },
    {
        title : "link3",
        href : "scholar3"
    }
]


const ull = document.createElement('ul')
links.forEach((item)=>{
    const lii = document.createElement('li')
    const link = document.createElement('a')
    link.innerHTML = item.title
    link.href = item.href
    lii.append(link)
    ull.append(lii)
})
document.body.append(ull)

