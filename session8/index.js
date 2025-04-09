

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

let allTodos = getTodos();//[] , [{}.{}]
//console.log(allTodos)
updateTodoList()

todoForm.addEventListener('submit' , (e)=>{
    //e.preventDefault();
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
        const todoObject = {
            text : todoText,
            completed: false,
        }
        allTodos.push(todoObject);  //[{text: exercise, completed:false},{text: exercise, completed:false}]
        // createTodoItem(todoText)
        updateTodoList()
        todoInput.value = "";
    }
}



// function  createTodoItem(todo){
//     const todoLi = document.createElement("li");
//     todoLi.innerText = todo;
//     todoListUl.append(todoLi)
// }
//[{text: exercise, completed:TRUE},{text: exercise, completed:false},{text: exercise2, completed:false}]
function updateTodoList(){
   todoListUl.innerHTML = "";
    allTodos.forEach((todo, todoIndex)=>{
        const todoId = "todo-" + todoIndex;
        const todoLi = document.createElement("li");
        todoLi.className = 'todo';
        todoLi.innerHTML = `
             <input type="checkbox" id="${todoId}">
                <label class="custom-checkbox" for="${todoId}">
                    <img src="icons/check.png"  width="20"/>
                </label>
                <label for="${todoId}" class="todo-text">
                    ${todo.text}
                </label>
                <button class="delete-button">
                    <img  src="icons/delete.png" width="20" />
                </button>
        `;
        const deleteButton = todoLi.querySelector(".delete-button");
        deleteButton.addEventListener("click",()=>{
            deleteTodoItem(todoIndex)
        })
         const checkbox = todoLi.querySelector("input")
         checkbox.addEventListener("change",()=>{
            allTodos[todoIndex].completed = checkbox.checked;
            saveTodos()
         })
         checkbox.checked = todo.completed
        todoListUl.append(todoLi)
        
    })
    saveTodos()
}


// function saveTodos(){
//     localStorage.setItem("test","123fd")
// }
// saveTodos()
function saveTodos(){
    const todoJson = JSON.stringify(allTodos)

    localStorage.setItem("todos",todoJson)
}
saveTodos()

function getTodos(){
    const todos = localStorage.getItem("todos") || "[]" ;
    return JSON.parse(todos)
}

function deleteTodoItem(todoIndex){
    allTodos = allTodos.filter((item,i) => i !== todoIndex)
    saveTodos()
    updateTodoList()
}

function show(){
    const valueInput = document.querySelector("#input2");
    const asdf = valueInput.value;
    console.log(asdf);
    const liNew = document.createElement('li')
    liNew.classList.add("todo")
    liNew.innerHTML = `
        <input type="checkbox" >
        ${asdf}
        <button class="delete-button">
        ❌
        </button>
        `
    const ULLList = document.querySelector(".ULL");
    ULLList.append(liNew);
    valueInput.value = ""

}



