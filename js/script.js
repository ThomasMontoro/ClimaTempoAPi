const apiKey = "59ac15b6587506f33487e1f3d417b656";
const apiCountryURL = "https://countryflagsapi.netlify.app/flag/";

let cityElement, tempElement, descElement, weatherIconElement, countryElement, umidityElement, windElement, weatherContainer;

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");


    cityElement = document.querySelector("#city");
    tempElement = document.querySelector("#temperature span");
    descElement = document.querySelector("#description");
    weatherIconElement = document.querySelector("#weather-icon");
    countryElement = document.querySelector("#country");
    umidityElement = document.querySelector("#umidity span");
    windElement = document.querySelector("#wind span");
    weatherContainer = document.querySelector("#weather-data");

    

    //EVENTOS
    searchBtn.addEventListener("click",(e) =>{
        e.preventDefault();
        const city = cityInput.value;
        showWeatherData(city);
    });

    searchBtn.addEventListener("click",(e)=>{
      ;
    });


//FUNCTIONS

const getWeatherDate = async (city) =>{
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_BR`;

    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    return data;
};

const showWeatherData = async (city) =>{
    const data = await getWeatherDate(city);
    cityElement.innerText = data.name;
    tempElement.innerText = `${parseInt(data.main.temp)}°C`;
    descElement.innerText = data.weather[0].description; 
    umidityElement.innerText = `${data.main.humidity}%`;
    weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    countryElement.setAttribute("src", `${apiCountryURL}${data.sys.country}.png`);
    windElement.innerText = `${data.wind.speed}km/h`;
    weatherContainer.classList.remove("hide");
};
