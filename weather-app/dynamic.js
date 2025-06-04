const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');
const apiKey = "57501dec18e99400a91929ba6a401c8e";

const weatherContainer = document.getElementById('weather-container');

searchBtn.addEventListener('click', () => {
    const city = cityInput.value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Log the data to see its structure
            
            if (data.name){
                // Check if the city is already displayed
                const existingCities = document.querySelectorAll('.city-weather h2');
                for (let existingCity of existingCities) {
                    if (existingCity.textContent.toLowerCase() === data.name.toLowerCase()) {
                    alert(`Weather for ${data.name} is already displayed.`);
                    cityInput.value = ''; 
                    return; 
                    }
                }
                // Create a new city weather entry
                const cityDiv = document.createElement('div');
                cityDiv.classList.add('city-weather');
                const cityName = document.createElement('h2');
                const cityTemp = document.createElement('p');
                const cityDescription = document.createElement('p');
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.classList.add('delete-btn');

                // Add event listener to delete the city weather entry
                deleteBtn.addEventListener('click', () => {
                    cityDiv.remove();
                });

                // add text content to the city weather entry
                cityName.textContent = data.name;
                cityTemp.textContent = `${data.main.temp}°F`;
                cityDescription.textContent= data.weather[0].description;

                // append the city weather entry to the weather container
                cityDiv.append(cityName, cityTemp, cityDescription, deleteBtn);
                weatherContainer.appendChild(cityDiv);
                cityInput.value = '';

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
