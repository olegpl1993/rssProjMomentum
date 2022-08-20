const addTodoBTN = document.querySelector('.todoBox__addBTN'); //кнопка добавить дело
const inputTodo = document.querySelector('.todoBox__inputTodo'); //инпут дело
const todoBoxList = document.querySelector('.todoBox__list'); //блок для добавления дел
export let todoList = []; // xранит список дел
export let chackedList = []; //хранит список выполненых дел

//открывает/скрывает окно настроек
export function openTodoBox() {
    const todoBox = document.querySelector('.todoBox'); //окно настроек
    todoBox.classList.toggle('activ'); //добавляет/уберает класс актив окну настроек
}

//обновляет блок со списком дел
export function renderTodoList() {
    todoBoxList.innerHTML = ''; //очищает блок перед рендером
    for (let i = 0; i < todoList.length; i++) {
        if (chackedList.includes(String(i))) { //проверка в списке выполненых
            todoBoxList.innerHTML +=
                `<li class="rower">
            <p class='checked' id='todoString${i}'>${todoList[i]}</p>
            <button class="delBTN" id=delID${i}>X</button>
            </li>`;
        } else {
            todoBoxList.innerHTML +=
                `<li class="rower">
            <p class='todo' id='todoString${i}'>${todoList[i]}</p>
            <button class="delBTN" id=delID${i}>X</button>
            </li>`;
        }
    }
}

//добавляет дело в список
inputTodo.addEventListener('keypress', (e) => { if (e.key === 'Enter') addTodoInList() }); //ввод в строке
addTodoBTN.addEventListener('click', addTodoInList); //нажатие на кнопку добавить
function addTodoInList() {
    todoList.push(inputTodo.value); //добавляет строку из инпута в массив
    inputTodo.value = ''; //очищает строку
    renderTodoList(); //обновляет блок с делами
}

//удаляет дело из списка
todoBoxList.addEventListener("click", e => {
    if (!(e.target.classList.contains('delBTN'))) { //проверка куда нажали
        return;
    }
    const id = e.target.id; //получаем id нажатого элемента
    const numb = id.split('').splice(5).join(''); //номер елемента
    const textEl = document.getElementById(`todoString${numb}`).textContent; //строка под текущим номером
    todoList = todoList.filter(word => word !== textEl); //удаляет строку из массива
    chackedList = chackedList.filter(el => el !== numb); //удаляет число из массива выполненых
    renderTodoList(); //обновляет блок со списком дел
});

//добавляет или убирает дело в список выполненых
todoBoxList.addEventListener("click", e => {
    if ((!(e.target.classList.contains('todo'))) && (!(e.target.classList.contains('checked')))) { //проверка куда нажали
        return;
    }
    const id = e.target.id; //получаем id нажатого элемента
    const numb = id.split('').splice(10).join(''); //номер елемента
    if (chackedList.includes(numb)) {
        chackedList = chackedList.filter(el => el !== numb); //удаляет число из массива выполненых
    } else {
        chackedList.push(numb); //добавляет в список выполненых
    }
    renderTodoList(); //обновляет блок со списком дел
});
