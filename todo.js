const todoInput = document.getElementById("todoInput");
const todoForm = document.getElementById("todoForm");
const todoList = document.getElementById("todoList");
const storegeTodos = JSON.parse(localStorage.getItem('todos'));
let todos = [];

todoForm.addEventListener('submit', handleTodoFormSubmit);

function handleTodoButtonClick(e) {
    // storege에서 삭제할 id 찾기
    const targetLi = e.target.parentElement;
    const targetLiId = targetLi.id;

    targetLi.remove();
    // filter : 조건에 맞는 내용을 todo에 담아서 todos에 반환.
    todos = todos.filter((todo)=> todo.id != targetLiId);
    saveTodos(todos);
}

function saveTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function paintTodo(todo) {
    todos.push(todo);
    const li = document.createElement('li');
    const button = document.createElement('button');
    const span = document.createElement('span');

    li.id = todo.id;
    span.textContent = todo.text;
    button.textContent = 'Delete';
    button.addEventListener('click', handleTodoButtonClick);

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleTodoFormSubmit(e) {
    e.preventDefault();
    const newTodo = {
        id : Date.now(),
        text : todoInput.value
    }

    paintTodo(newTodo);

    todos.push(newTodo);
    saveTodos(todos);
    todoInput.value = '';
}

if(storegeTodos != undefined || storegeTodos.length != 0) {
    storegeTodos.forEach((todo) => {
        paintTodo(todo);
    });
}


/*
 * const : 상수. 재할당 불가능.
 * let : 변수. 재할당 가능.
 * var : ...
*/