const numbers =  ['+','7','8','9','-','4','5','6','*','1','2','3','/','0','.','=','C']
const showing = document.querySelector("#key");
numbers.forEach((item , itemIndex)=>{
    const btn = document.createElement('button');
    btn.textContent= item;
    btn.onclick = () => appendToDisplay(item);
    if (['+', '-', '*', '/', '=', 'C'].includes(item)) {
        btn.classList.add('operator-btn');
    }
    showing.append(btn)

})
function appendToDisplay(value) {
    const display = document.getElementById('display');
    
    if (value === 'C') {
      display.value = '';
    } else if (value === '=') {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = 'Error';
      }
    } else {
      display.value += value;
    }
  }