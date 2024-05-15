const APP_ID = '107c8e220ad62c426f965e7fc0693a2a'; // key
const DEFAULT_VALUE = '--';
const searchInput = document.querySelector('#search-input');//tìm kiếm

const cityName = document.querySelector('.city-name');//tên thành phôs
const weatherState = document.querySelector('.weather-state');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');


const sunrise = document.querySelector('.sunrise');
const sunset = document.querySelector('.sunset');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind-speed');


searchInput.addEventListener('change', (e) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${APP_ID}&units=metric&lang=vi`)
  .then(async res =>{
    const data = await res.json();
    console.log('[Search Input]', data);
  
            cityName.innerHTML = data.name || DEFAULT_VALUE;
            weatherState.innerHTML = data.weather[0].description || DEFAULT_VALUE;
            weatherIcon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
            temperature.innerHTML = Math.round(data.main.temp) || DEFAULT_VALUE;

            sunrise.innerHTML = data.sys.sunrise    || DEFAULT_VALUE;
            sunset.innerHTML = data.sys.sunset || DEFAULT_VALUE;
            humidity.innerHTML = data.main.humidity || DEFAULT_VALUE;
            windSpeed.innerHTML = (data.wind.speed * 3.6).toFixed(2) || DEFAULT_VALUE;
  })
});


