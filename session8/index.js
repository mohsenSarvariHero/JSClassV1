

function getInputValue() {
    const inputValue = document.getElementById("myInput").value;

    console.log("مقدار ورودی:", inputValue);

     document.getElementById("output").textContent = "نوشتید: " + inputValue;
  }


  function showButtonValues(button) {
    console.log(button); 
    console.log(button.textContent); 
    // const value = button.textContent; 

    // console.log("متن دکمه:", value);

    // document.getElementById("output").textContent = "شما زدید: " + value;
  }


  function showButtonValue(param) {
    console.log(param)
    const clickedButton = param.target;
    console.log(clickedButton);
    console.log(clickedButton.textContent);
  }
  

const todoForm = document.querySelector('form');
const todoInput = document.getElementById('todoInput')
const todoListUl = document.getElementById('todoList')

let allTodos = [];
todoForm.addEventListener('submit' , (e)=>{
    e.preventDefault();
    addTodo();
    // alert("test")
    // console.log(e)
})
function addTodo(){
    const todoText = todoInput.value.trim();
    // alert(todoText)

    //allTodos.push(todoText);
    console.log(allTodos);
    if(todoText.length > 0){
        allTodos.push(todoText);
        createTodoItem(todoText)
        // updateTodoList(todoText)
        todoInput.value = "";
    }
}



function  createTodoItem(todo){
    const todoLi = document.createElement("li");
    todoLi.innerText = todo;
    todoListUl.append(todoLi)
}

function updateTodoList(){
    todoListUl.innerHTML = "";
    allTodos.forEach((todo, todoIndex)=>{
        const todoLi = document.createElement("li");
        todoLi.innerText = todo;
        todoListUl.append(todoLi)
    })
}
