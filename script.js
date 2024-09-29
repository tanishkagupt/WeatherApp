const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const input = document.querySelector('input');
const button = document.querySelector('.bx-search');

input.addEventListener('keypress', function(event){
    if (event.key === 'Enter'){
        event.preventDefault();
        button.click();
    }
})
search.addEventListener('click', () => {
    let APIKey = "8c1d7057df0d5d57083ad31a99a28660";
    const city = document.querySelector(".search-box input").value;

    if(city == '')
        return;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then((response) => response.json()).then(json => {
        
        const image = document.querySelector('.weather-box img');
        const temprature = document.querySelector('.weather-box .temprature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');
        
        switch(json.weather[0].main){
            case 'clear':
                image.src='sun.png';
                break;
            case 'Rain':
                image.src='rain.png';
                break;
            case 'Snow':
                image.src='snow.png';
                break;
            case 'Clouds':
                image.src='cloud.png';
                break;
            case 'Mist':
                image.src='mist.png';
                break;
            case 'Haze':
                image.src='mist.png';
                break;
            default:
                image.src = 'sun 1.png';
        }

        temprature.innerHTML = `${parseInt(json.main.temp)}<span>°c</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}km/h`;
    })
})
    





