const apiKey = "daf674e6c13939233411367cd526c757";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";


const searchBox = document.querySelector('.searchBox input')
const searchBtn = document.querySelector('.searchBox button')

const weatherImg = document.querySelector('.weatherImg');

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    var data = await response.json();

    console.log(data)

    document.querySelector('.cityName').innerHTML = data.name; 
    document.getElementById('temperature').innerHTML = Math.floor(data.main.temp) + "°C"; 
    document.querySelector('.hum').innerHTML = data.main.humidity + "%";
    document.querySelector('.windunit').innerHTML = data.main.humidity + " Km/h";

    if(data.weather[0].main == 'Clouds'){
        weatherImg.src = 'images/clouds.png'
    }
    else if(data.weather[0].main == 'Clear'){
            weatherImg.src = 'images/clear.png'
    }
    else if(data.weather[0].main == 'Rain'){
            weatherImg.src = 'images/rain.png'
    }    
    else if(data.weather[0].main == 'Drizzle'){
            weatherImg.src = 'images/drizzle.png'
    }
    else if(data.weather[0].main == 'Mist'){
            weatherImg.src = 'images/mist.png'
    }
}


searchBtn.addEventListener('click',() =>{
    checkWeather(searchBox.value)     
})