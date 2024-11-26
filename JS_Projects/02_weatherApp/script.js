document.addEventListener('DOMContentLoaded',
  () => {
    let getWeatherbtn = document.getElementById('get-weather-btn');
    let cityInput = document.getElementById('city-input');
    let weatherInfo = document.getElementById("weather-info")
    let cityNameDisplay = document.getElementById("city-name")
    let temperatureDisplay = document.getElementById("temperature")
    let descriptionDisplay = document.getElementById("description")
    let errorMessage = document.getElementById('error-message')
    let myerror = false;

    const API_KEY = 'b6db78abf68a56ec7e40f40791d0a9c9'; //keep this in ENV variable

    getWeatherbtn.addEventListener('click',
      async () => {
        const cityName = cityInput.value.trim();

        if (!cityName) showError();

        //Whenever you're calling to someone else's server always remember
        //Server might not respond
        //Server may ligh in the other continent

        try {
          const weatherData = await fetchWeatherData(cityName)
          console.log(weatherData);
          displayWeatherData(weatherData)
          
        } catch (error) {
          showError();
        }

      })
    //Fetch weather data
    async function fetchWeatherData(city) {

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`

      const response = await fetch(url);
      console.log(response);

      const data = response.json();
      return data;
    }
    //Fetch Display Data
    function displayWeatherData(weatherData) {
      console.log(weatherData);

      const { name, main, weather } = weatherData;
      cityNameDisplay.textContent = name;
      temperatureDisplay.textContent = `Temperature : ${main.temp}`
      descriptionDisplay.textContent = `Description: ${weather[0].description} degrees`

      weatherInfo.classList.remove('hidden');
      errorMessage.classList.add('hidden')
    }
    //Show error 
    function showError() {
      errorMessage.classList.remove("hidden");
      weatherInfo.classList.add('hidden')
    }
  }
)