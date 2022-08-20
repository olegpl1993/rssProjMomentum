import playList from "./playlist.js"; //список треков

const audio = new Audio(); //создает обьект музыки
let track = 0; //текущий трек
let trackTime = 0; //сохранение времени начала трека
const playerList = document.querySelector('.player__list'); //блок списка треков
const play = document.querySelector('.player__play'); //кнопка плей/пауза
const progressBar = document.querySelector('.player__progress'); //заполненая часть полосы времени (прогресс бар)
const progressTime = document.querySelector('.player__progressTime'); //полоса вывода времени
const volumeBTN = document.querySelector('.player__volume'); //кнопка громкости
const volumeChange = document.querySelector('.player__volumeChange'); //заполненная часть полосы громкости

//запуск общего рендера (один раз после загрузки страницы)
export function render() {
    setInterval(() => {
        renderPlayList(); //обновляет список треков
        renderNameTrack(); //обновляет название текущего трека
        renderTrackTime(); //обновляет время трека
    }, 500);
}

function playTrack() { //начать музыку
    audio.src = playList[track].src; //ссылка на музыку
    audio.currentTime = trackTime; //устанавливает время начала трека
    audio.play(); //начинает проигрывание
}

function pauseTrack() { //остановить музыку
    trackTime = audio.currentTime; //сохраняет текущее время трека
    audio.pause(); //останавливает проигрывание музыки
}

//переключает на следующий трек при окончании
audio.addEventListener('ended', () => {
    playNext(); //следующий трек
})

// кнопка плей/пауза
export function playAudio() {
    play.classList.toggle('activ'); //добавляет класс activ конопке (меняет картинку)
    if (play.classList.contains('activ')) { //проверка активности кнопки
        playTrack(); //включает текущий трек
    } else {
        pauseTrack(); //останавливает текущий трек
    }
    renderPlayList(); //обновляет список треков на странице
}

//кнопка предыдущий трек
export function playPrev() {
    pauseTrack(); //останавливает текущий трек
    trackTime = 0; //сбрасывает сохранение времени трека
    audio.currentTime = 0; //сбрасывает текущее время трека 
    if (track === 0) {
        track = playList.length - 1; //меняет трек
    } else {
        track -= 1; //меняет трек
    }
    if (play.classList.contains('activ')) { //проверка активности кнопки
        playTrack(); //включает новый трек
    }
    renderPlayList(); //обновляет список треков на странице
}

//кнопка следующий трек
export function playNext() {
    pauseTrack(); //останавливает текущий трек
    trackTime = 0; //сбрасывает сохранение времени трека
    audio.currentTime = 0; //сбрасывает текущее время трека 
    if (track === playList.length - 1) {
        track = 0; //меняет трек
    } else {
        track += 1; //меняет трек
    }
    if (play.classList.contains('activ')) { //проверка активности кнопки
        playTrack(); //включает новый трек
    }
    renderPlayList(); //обновляет список треков на странице
}

//нажатие на трек в списке
export function changeTrack(e) {
    if (track === parseInt((e.target.classList.value).split('').slice(8))) { //нажатие текущего трека
        playAudio(); // кнопка плей/пауза (остановит вовпроизведение)
    } else if (!(e.target.classList.contains('curent')) && !(e.target.classList.contains('player__list'))) { //нажатие НЕ текущего трека
        track = Number((e.target.classList.value).split('').splice(8).join('')); //меняет номер текущего трека
        trackTime = 0; //сбрасывает сохранение времени трека
        audio.currentTime = 0; //сбрасывает текущее время трека;
        if (play.classList.contains('activ')) { //проверка активности кнопки
            playTrack(); //включает новый трек
        } else {
            playAudio(); // кнопка плей/пауза
        }
    }
    renderPlayList(); //обновляет список треков на странице
}

//нажатие по временной шкале
export function clickTimeline(e) {
    const targetTime = e.offsetX / 150 * audio.duration; //определение на какое время нажл пользователь
    audio.currentTime = targetTime; //меняет текущее время воспроизведения
}

//нажатие на кнопку громкости (включить выключить звук)
export function volumeClick() {
    volumeBTN.classList.toggle('off'); //добавляет класс off конопке (меняет картинку)
    if (volumeBTN.classList.contains('off')) { //проверка активности кнопки
        audio.volume = 0; //громкость 0
        volumeChange.style.width = audio.volume * 100 + "%"; //заполняет полосу громкости
    } else {
        audio.volume = 1; //громкость 100%
        volumeChange.style.width = audio.volume * 100 + "%"; //заполняет полосу громкости
    }
}

//нажатие на полосу громкости
export function clickVolumeline(e) {
    const volumePercent = e.offsetX / 100; //определение на каой процент громкости нажал пользователь
    audio.volume = volumePercent; //меняет громкость
    volumeChange.style.width = audio.volume * 100 + "%"; //заполняет полосу громкости
}

//обновляет строку текущего трека
function renderNameTrack() {
    const trackName = document.querySelector('.player__trackName');
    trackName.textContent = playList[track].title;
}

//обновляет список треков
function renderPlayList() {
    playerList.innerHTML = ''; // очищает блок с треками пред заполнением
    for (let i = 0; i < playList.length; i++) { //цикл отрисовки списка треков
        if (i === track && play.classList.contains('activ')) { //проверка активного трека
            playerList.innerHTML += `<li class="trackNum${i} curent">${playList[i].title}</li>`; //дополнительный класс активному треку
        } else {
            playerList.innerHTML += `<li class="trackNum${i}">${playList[i].title}</li>`;
        }
    }
}

//обновляет текущее время трека / заполнение прогресс бара
function renderTrackTime() {
    progressBar.style.width = audio.currentTime / audio.duration * 100 + "%"; //заполняет прогресс бар
    progressTime.textContent = `${getTimeCodeFromNum(audio.currentTime)} / ${getTimeCodeFromNum(audio.duration)}`; //вывод продолжительности трека
}

//форматирует секунды в часы/минуты/секунды (128 => 2:08)
function getTimeCodeFromNum(num) {
    if (isNaN(num)) { //если получает NaN
        return '0:00';
    }
    let seconds = parseInt(num);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    const hours = parseInt(minutes / 60);
    minutes -= hours * 60;
    if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    return `${String(hours).padStart(2, 0)}:${minutes}:${String(
        seconds % 60
    ).padStart(2, 0)}`;
}