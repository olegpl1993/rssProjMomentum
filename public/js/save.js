import { state, activCheckBox } from './option.js'; //настройки приложения
import { todoList, renderTodoList, chackedList } from './todo.js'; //список дел

const name = document.querySelector(".center__name"); //инпут с именем
const city = document.querySelector('.wether__city'); //инпут город
const searchBG = document.querySelector('.optionBox__searchBG'); //инпут поиска картинки

//сохранение в local storage
export function setLocalStorage() {
    localStorage.setItem('city', city.value);//сохранение города в local storage
    localStorage.setItem('name', name.value); //сохранение имени в local storage
    localStorage.setItem('searchBG', searchBG.value); //сохранение поиска картинок в local storage
    localStorage.setItem('language', state.language); //язык сайта
    localStorage.setItem('photoSource', state.photoSource); //источник фотографий
    localStorage.setItem('blocks', state.blocks); //включекнные модули
    const todoListRow = todoList.join('*%'); //делает из массива дел строку с разделителем
    localStorage.setItem('todoList', todoListRow); //сохраняет список дел
    const chackedListRow = chackedList.join('*%'); //делает из массива выполненых дел строку с разделителем
    localStorage.setItem('chackedList', chackedListRow); //сохраняет список дел
}

//загрузка из local storage
export function getLocalStorage() {
    if (localStorage.getItem('name')) { // проверяет наличие сохраненния
        name.value = localStorage.getItem('name'); //заполняет значение инпута именем из local storage
    }
    if (localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
    }
    if (localStorage.getItem('searchBG')) {
        searchBG.value = localStorage.getItem('searchBG');
    }
    if (localStorage.getItem('language')) {
        state.language = localStorage.getItem('language');
    }
    if (localStorage.getItem('photoSource')) {
        state.photoSource = localStorage.getItem('photoSource');
    }
    if (localStorage.getItem('blocks')) {
        state.blocks = localStorage.getItem('blocks').split(','); //массив из строки
    }
    if (localStorage.getItem('todoList')) {
        const todoListarr = localStorage.getItem('todoList').split('*%'); //загружает из LS и делает массив из строки
        //копирует значение из сохраненого массива в массив списка дел
        for (let i = 0; i < todoListarr.length; i++) { 
            todoList.push(todoListarr[i]); //заполняет значениями
        }
    }
    if (localStorage.getItem('chackedList')) {
        const chackedListarr = localStorage.getItem('chackedList').split('*%'); //загружает из LS и делает массив из строки
        //копирует значение из сохраненого массива в массив списка выполненых дел
        for (let i = 0; i < chackedListarr.length; i++) { 
            chackedList.push(chackedListarr[i]); //заполняет значениями
        }
    }
    renderTodoList(); //обновляет блок со списком дел
    activCheckBox(); //делает активными чекбоксы после загрузки из локал сторедж, добавляет класс хайд
}