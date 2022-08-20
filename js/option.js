import { changeLang } from "./lang.js";

//чекбоксы
const time = document.getElementById('time');
const date = document.getElementById('date');
const greeting = document.getElementById('greeting');
const quote = document.getElementById('quote');
const weather = document.getElementById('weather');
const audio = document.getElementById('audio');
const todolist = document.getElementById('todolist');
//радио кнопки
const bgSwitchG = document.getElementById('bgSwitchG');
const bgSwitchU = document.getElementById('bgSwitchU');
const bgSwitchF = document.getElementById('bgSwitchF');
const langSwitchE = document.getElementById('langSwitchE');
const langSwitchR = document.getElementById('langSwitchR');

//хранит настройки приложения
export const state = {
    language: 'en',
    photoSource: 'github',
    blocks: ['time', 'date', 'greeting', 'quote', 'weather', 'audio', 'todolist']
}

//открывает/скрывает окно настроек
export function openBox() {
    const optionBox = document.querySelector('.optionBox'); //окно настроек
    optionBox.classList.toggle('activ'); //добавляет/уберает класс актив окну настроек
}

//активирует чекбоксы и радио кнопки после загрузки страницы добавляет класс хайд -----------------------------
export function activCheckBox() {
    if (state.language.includes('en')) { //проверяет наличие в сохраненном обьекте
        langSwitchE.checked = true; //активирует радио кнопку
    }
    if (state.language.includes('ru')) {
        langSwitchR.checked = true;
    }
    if (state.photoSource.includes('github')) {
        bgSwitchG.checked = true;
    }
    if (state.photoSource.includes('unsplash')) {
        bgSwitchU.checked = true;
    }
    if (state.photoSource.includes('flickr')) {
        bgSwitchF.checked = true;
    }

    if (state.blocks.includes('time')) { //проверяет наличие в сохраненном масиве
        time.checked = true; //активирует чеккбокс
    } else {
        document.querySelector('.center__time').classList.add('hide'); //скрывает отображение блока
    }
    if (state.blocks.includes('date')) {
        date.checked = true; //активирует чеккбокс
    } else {
        document.querySelector('.center__date').classList.add('hide'); //скрывает отображение блока
    }
    if (state.blocks.includes('greeting')) {
        greeting.checked = true; //активирует чеккбокс
    } else {
        document.querySelector('.center__row').classList.add('hide'); //скрывает отображение блока
    }
    if (state.blocks.includes('quote')) {
        quote.checked = true; //активирует чеккбокс
    } else {
        document.querySelector('.quote').classList.add('hide'); //скрывает отображение блока
    }
    if (state.blocks.includes('weather')) {
        weather.checked = true; //активирует чеккбокс
    } else {
        document.querySelector('.wether').classList.add('hide'); //скрывает отображение блока
    }
    if (state.blocks.includes('audio')) {
        audio.checked = true; //активирует чеккбокс
    } else {
        document.querySelector('.player').classList.add('hide'); //скрывает отображение блока
    }
    if (state.blocks.includes('todolist')) {
        todolist.checked = true; //активирует чеккбокс
    } else {
        document.querySelector('.todoBTN').classList.add('hide'); //скрывает отображение блока
    }
}

//слушатели переключения чекбоксов ---------------------------------------------------------------------------
time.addEventListener('change', () => {
    document.querySelector('.center__time').classList.toggle('hide'); //отображение блока
    if (document.querySelector('.center__time').classList.contains('hide')) { //проверка наличия класса хайд
        state.blocks = state.blocks.filter(f => f !== 'time'); //удаляет елемент из массива настроек
    } else {
        state.blocks.push('time'); //добавляет елемент в массив настроек
    }
});
date.addEventListener('change', () => {
    document.querySelector('.center__date').classList.toggle('hide');
    if (document.querySelector('.center__date').classList.contains('hide')) {
        state.blocks = state.blocks.filter(f => f !== 'date');
    } else {
        state.blocks.push('date');
    }
});
greeting.addEventListener('change', () => {
    document.querySelector('.center__row').classList.toggle('hide');
    if (document.querySelector('.center__row').classList.contains('hide')) {
        state.blocks = state.blocks.filter(f => f !== 'greeting');
    } else {
        state.blocks.push('greeting');
    }
});
quote.addEventListener('change', () => {
    document.querySelector('.quote').classList.toggle('hide');
    if (document.querySelector('.quote').classList.contains('hide')) {
        state.blocks = state.blocks.filter(f => f !== 'quote');
    } else {
        state.blocks.push('quote');
    }
});
weather.addEventListener('change', () => {
    document.querySelector('.wether').classList.toggle('hide');
    if (document.querySelector('.wether').classList.contains('hide')) {
        state.blocks = state.blocks.filter(f => f !== 'weather');
    } else {
        state.blocks.push('weather');
    }
});
audio.addEventListener('change', () => {
    document.querySelector('.player').classList.toggle('hide');
    if (document.querySelector('.player').classList.contains('hide')) {
        state.blocks = state.blocks.filter(f => f !== 'audio');
    } else {
        state.blocks.push('audio');
    }
});
todolist.addEventListener('change', () => {
    document.querySelector('.todoBTN').classList.toggle('hide');
    if (document.querySelector('.todoBTN').classList.contains('hide')) {
        state.blocks = state.blocks.filter(f => f !== 'todolist');
    } else {
        state.blocks.push('todolist');
    }
});
//----------------------------------------------------------------------------------------------------------------------

//сохранение радио кнопок -------------------------------------------------------------------------------------------------
bgSwitchG.addEventListener('change', optionSeach); //переключение радио кнопки
bgSwitchU.addEventListener('change', optionSeach);
bgSwitchF.addEventListener('change', optionSeach);
langSwitchE.addEventListener('change', optionLang);
langSwitchR.addEventListener('change', optionLang);

function optionSeach() { //записует активные значения в стейт
    if (bgSwitchG.checked) {
        state.photoSource = 'github';
    }
    if (bgSwitchU.checked) {
        state.photoSource = 'unsplash';
    }
    if (bgSwitchF.checked) {
        state.photoSource = 'flickr';
    }
}

function optionLang(){
    if (langSwitchE.checked) {
        state.language = 'en'; //меняет язык в стейте
        changeLang (state.language);  //меняет язык на странице
    }
    if (langSwitchR.checked) {
        state.language = 'ru';
        changeLang (state.language);
    }
}
//-----------------------------------------------------------------------------------------------------------------------