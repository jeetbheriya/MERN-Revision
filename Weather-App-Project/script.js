const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "c14adabfaa015161e0aac848918c249c";

weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const city = cityInput.value;

  if (city) {
    try {
      await getWeatherData(city);
    } catch (error) {
      console.error(error);
      displayError(error);
    }
  } else {
    displayError("Please enter a city");
  }
});

async function getWeatherData(city) {
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c14adabfaa015161e0aac848918c249c`;

  const response = await fetch(API_URL);
  const data = await response.json();

  if (!response.ok) {
    // This will jump straight to the .catch() block in your event listener
    throw new Error("City not found. Please check the spelling.");
  } 

  const name = data.name;
  const humidity = data.main.humidity;
  const temp = data.main.temp;
  const description = data.weather[0].description;
  const id = data.weather[0].id;

  displayData(name, temp, humidity, description, id);
}

function displayData(name, temp, humidity, description, id) {
  const cityDisplay = document.querySelector(".cityDisplay");
  const tempDisplay = document.querySelector(".tempDisplay");
  const humidDisplay = document.querySelector(".humidDisplay");
  const descDisplay = document.querySelector(".descDisplay");
  const emoji = document.querySelector(".weatherEmoji");

  cityDisplay.textContent = name;
  tempDisplay.textContent = `${(Math.round(temp) - 273.15).toFixed(1)}°C`;
  humidDisplay.textContent = `Humidity: ${humidity}%`;
  descDisplay.textContent = description;
  emoji.textContent = getWeatherEmoji(id);

  card.textContent = "";
  card.style.display = "flex";

  card.append(cityDisplay, tempDisplay, humidDisplay, descDisplay, emoji);
}

function getWeatherEmoji(weatherId) {
    if (weatherId >= 200 && weatherId < 300) {
        return "⛈️"; 
    } else if (weatherId >= 300 && weatherId < 400) {
        return "🌧️"; 
    } else if (weatherId >= 500 && weatherId < 600) {
        return "☔"; 
    } else if (weatherId >= 600 && weatherId < 700) {
        return "❄️";
    } else if (weatherId >= 700 && weatherId < 800) {
        return "🌫️"; 
    } else if (weatherId === 800) {
        return "☀️"; 
    } else if (weatherId >= 801 && weatherId < 810) {
        return "☁️"; 
    } else {
        return "❓"; 
    }
}

function displayError(message) {
  // Clear the card and show only the error message
  card.textContent = "";
  card.style.display = "flex";

  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay"); // Uses your red CSS styling

  card.appendChild(errorDisplay);
}