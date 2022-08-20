import { getQuotes } from './quotes.js'; //цитаты
import { showDate, showGreeting } from './time.js'//время, дата, приветствие
import { getWeather } from './wether.js'; //погода

const optionBTN = document.querySelector('.optionBTN'); //кнопка настройки
const todoBTN = document.querySelector('.todoBTN'); //кнопка список дел
const strTodolist = document.querySelector('.strTodolist'); //список дел
const strEnglish = document.querySelector('.strEnglish'); //английский
const strRussian = document.querySelector('.strRussian'); //русский
const searchBTN = document.querySelector('.optionBox__searchBTN'); //кнопка поиска картинок
const strTime = document.querySelector('.strTime'); //часы
const strDate = document.querySelector('.strDate'); //дата
const strGreeting = document.querySelector('.strGreeting'); //приветствие
const strQuote = document.querySelector('.strQuote'); //цитата
const strWeather = document.querySelector('.strWeather'); //погода
const strAudio = document.querySelector('.strAudio'); //Плеер
const wetherCity = document.querySelector('.wether__city'); //инпут погода
const centerName = document.querySelector('.center__name'); //инпут имени
const searchBG = document.querySelector('.optionBox__searchBG'); //инпут поиска картинок
const inputTodo = document.querySelector('.todoBox__inputTodo'); //инпут списка дел


//меняет язык на странице
export function changeLang(lang) {
    getQuotes(lang); //обновляет блок цитат
    showDate(); //обновляет дату
    showGreeting(); //обновляет приветствие
    getWeather(lang); //обновляет погоду
    instalLang(lang); //установка языка приложения (строки текста)
}

//установка языка приложения (строки текста)
export function instalLang(lang) {
    if (lang === 'en') {
        if (wetherCity.value === 'Минск') wetherCity.value = 'Minsk';
        inputTodo.placeholder = 'new todo';
        searchBG.placeholder = 'search image';
        centerName.placeholder = 'your name';
        optionBTN.textContent = 'Options';
        todoBTN.textContent = 'Todo list';
        strTodolist.textContent = 'Todo list';
        strEnglish.textContent = 'English';
        strRussian.textContent = 'Russian';
        searchBTN.textContent = 'Search';
        strTime.textContent = 'Time';
        strDate.textContent = 'Date';
        strGreeting.textContent = 'Greeting';
        strQuote.textContent = 'Quote';
        strWeather.textContent = 'Weather';
        strAudio.textContent = 'Player';
    }
    if (lang === 'ru') {
        if (wetherCity.value === 'Minsk') wetherCity.value = 'Минск';
        inputTodo.placeholder = 'добавить дело';
        searchBG.placeholder = 'поиск картинок';
        centerName.placeholder = 'ваше имя';
        optionBTN.textContent = 'Настройки';
        todoBTN.textContent = 'Список дел';
        strTodolist.textContent = 'Список дел';
        strEnglish.textContent = 'Английский';
        strRussian.textContent = 'Русский';
        searchBTN.textContent = 'Найти';
        strTime.textContent = 'Часы';
        strDate.textContent = 'Дата';
        strGreeting.textContent = 'Приветствие';
        strQuote.textContent = 'Цитата';
        strWeather.textContent = 'Погода';
        strAudio.textContent = 'Плеер';
    }
}