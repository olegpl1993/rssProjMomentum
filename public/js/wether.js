export async function getWeather(lang) {
    const city = document.querySelector('.wether__city'); //инпут (город)
    const weatherIcon = document.querySelector('.wether__icon'); //иконка погоды
    const temperature = document.querySelector('.wether__temperature'); //строка температуры
    const weatherDescription = document.querySelector('.wether__description'); //строка описания
    const wind = document.querySelector('.wether__wind'); //строка скорость ветра
    const wet = document.querySelector('.wether__wet'); //строка влажность
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${lang}&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
    const res = await fetch(url); //fetch запрос
    const data = await res.json(); //Обьект с погодой
    weatherIcon.className = 'wether__icon owf'; //уберает лишние класс с иконкой погоды

    if (data.cod === 200) {
        weatherIcon.classList.add(`owf-${data.weather[0].id}`); //добавляет класс картинки
        weatherDescription.textContent = data.weather[0].description; //меняет строку описания погоды
        temperature.textContent = `${Math.round(data.main.temp)}°C`; //меняет строку температуры
        if (lang === 'en') {
            wind.textContent = `${Math.round(data.wind.speed)} mps`; //меняет строку скорости ветра
        }
        if (lang === 'ru') {
            wind.textContent = `${Math.round(data.wind.speed)} м/с`; //меняет строку скорости ветра
        }
        wet.textContent = `${data.main.humidity} %`; //меняет строку влажность воздуха
    } else {
        if (lang === 'en') {
            weatherDescription.textContent = `City not found`; //меняет строку описания погоды
            temperature.textContent = `Error`; //меняет строку температуры
        }
        if (lang === 'ru') {
            weatherDescription.textContent = `Город не найден`; //меняет строку описания погоды
            temperature.textContent = `Ошибка`; //меняет строку температуры
        }
        wind.textContent = ``; //меняет строку скорости ветра
        wet.textContent = ``; //меняет строку влажность воздуха
    }

}