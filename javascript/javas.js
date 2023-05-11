//Var
const apiKey = "64479b627ebc607319574a76b165ce0b";
const apiCountryURL = "https://flagsapi.com/BR/shiny/64.png";


const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#Temperature-span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const umidityElement = document.querySelector("#umidity span");
const windElement = document.querySelector("#wind span");


// funções
const getWeatherData = async(city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid${apiKey}&lang=pt_br`
 
    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    console.log(data);

};

const showWeatherData = (city) => {
    
    getWeatherData(city);

};


//Eventos
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const city = cityInput.value;

    showWeatherData(city);
});








