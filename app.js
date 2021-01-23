//selectors
const todoInput = document.querySelector('.todo_input');
const todoButton = document.querySelector('.todo_button');
const todoList = document.querySelector('.todo_list');

//event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//function: add task to list
function addTodo(event) {
    event.preventDefault();

    //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //todo li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo_item');
    todoDiv.appendChild(newTodo);
    if(todoInput.value === "") {
        return null;
    }

    //check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete_btn');
    todoDiv.appendChild(completedButton);

    //delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete_btn');
    todoDiv.appendChild(deleteButton);

    //append to actual list
    todoList.appendChild(todoDiv);

    //clear todo input value
    todoInput.value = "";
}

//function: checkmark and delete tasks
function deleteCheck(e) {
    const item = e.target;

    //delete item
    if(item.classList[0] === "delete_btn") {
        const todo = item.parentElement;
        //animation transition
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function() {
            todo.remove();
        })
    }

    //checkmark item
    if(item.classList[0] === "complete_btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completedItem");
    }
}