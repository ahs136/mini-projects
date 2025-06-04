const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');
const apiKey = "57501dec18e99400a91929ba6a401c8e";





searchBtn.addEventListener('click', () => {
    const city = cityInput.value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Log the data to see its structure
            
            if (data.name){
                document.getElementById('city-name').textContent = data.name;
                document.getElementById('temperature').textContent = `${data.main.temp}°F`;
                document.getElementById('weather-description').textContent = data.weather[0].description;
            } else {
                document.getElementById('city-name').textContent = "City not found"; 
                document.getElementById('temperature').textContent = "";
                document.getElementById('weather-description').textContent = "";
            }

        })
      .catch(error => {
            console.error('Error fetching weather data:', error);
            const errorDiv = document.getElementById('error-message');
            errorDiv.textContent = "Error fetching weather data. Please try again.";

            document.getElementById('city-name').textContent = "";
            document.getElementById('temperature').textContent = "";
            document.getElementById('weather-description').textContent = "";
      });
});
