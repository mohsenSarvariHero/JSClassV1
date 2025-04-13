const display = document.getElementById("display");
const numbers = ['+','7','8','9','-','4','5','6','*','1','2','3','/','0','.','=','C']
const showBtn = document.querySelector("#key");
numbers.forEach((item)=>{
    let btn = document.createElement('button');
    if(['+','-','*','/','=','C'].includes(item)){
        btn.classList.add('operator-btn');
    }
  
    btn.innerHTML = `
                    <button  onclick="appendToDisplay('${item}')">${item}</button>

    `
    showBtn.append(btn)
})
// let string = "12" + "12"
// string = string + "12"
// alert(string)
function appendToDisplay(input){
    if(input === 'C'){
        display.value = ""
    }else if(input === "="){
        try{
            display.value = eval(display.value)

        }catch(error){
            display.value = "Error Syntax"

            // setInterval(()=>{
            //     display.value = ""

            // },3000)
        }
    }else{
        display.value = display.value + input

    }
   
}

// function clearDisplay(){
//     display.value = ""

// }
// function calculate(){
//     display.value = eval(display.value)
// }
// function calculate(){
//     try{
//         display.value = eval(display.value)

//     }catch(error){
//         display.value="Error Syntax"
//     }
// }

