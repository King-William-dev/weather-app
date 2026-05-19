<<<<<<< HEAD
const apiKey = 'b8ad3a8206a92749b006495ca7e01e76';

async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const result = document.getElementById('result');
  const loader = document.getElementById('loader');
  const forecastContainer = document.getElementById('forecast');

  if (!city) {
    result.innerHTML = '⚠️ Please enter a city name';
    return;
  }

  loader.classList.remove('hidden');
  result.innerHTML = '';
  forecastContainer.innerHTML = '';

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (Number(data.cod) !== 200) {
      result.innerHTML = `❌ ${data.message}`;
      return;
    }

    // FORECAST (correct usage)
    const forecastData = data.list.slice(0, 5);

    forecastData.forEach(item => {
      const time = item.dt_txt.split(' ')[1].slice(0, 5);
      const temp = item.main.temp;
      const desc = item.weather[0].description;

      forecastContainer.innerHTML += `
        <div class="forecast-card">
          <p>${time}</p>
          <p>🌡 ${temp}°C</p>
          <p>${desc}</p>
        </div>
      `;
    });

    // CURRENT WEATHER = use FIRST item
    const current = data.list[0];

    const icon = current.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    result.innerHTML = `
      <h2>${data.city.name}</h2>
      <img src="${iconUrl}" />
      <p>🌡 Temperature: ${current.main.temp}°C</p>
      <p>☁ Condition: ${current.weather[0].description}</p>
      <p>💧 Humidity: ${current.main.humidity}%</p>
      <p>🌬 Wind: ${current.wind.speed} m/s</p>
    `;
  } catch (error) {
    result.innerHTML = '❌ Error fetching weather data';
  } finally {
    loader.classList.add('hidden');
  }
}
=======
const apiKey = 'b8ad3a8206a92749b006495ca7e01e76';

async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const result = document.getElementById('result');
  const loader = document.getElementById('loader');
  const forecastContainer = document.getElementById('forecast');

  if (!city) {
    result.innerHTML = '⚠️ Please enter a city name';
    return;
  }

  loader.classList.remove('hidden');
  result.innerHTML = '';
  forecastContainer.innerHTML = '';

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (Number(data.cod) !== 200) {
      result.innerHTML = `❌ ${data.message}`;
      return;
    }

    // FORECAST (correct usage)
    const forecastData = data.list.slice(0, 5);

    forecastData.forEach(item => {
      const time = item.dt_txt.split(' ')[1].slice(0, 5);
      const temp = item.main.temp;
      const desc = item.weather[0].description;

      forecastContainer.innerHTML += `
        <div class="forecast-card">
          <p>${time}</p>
          <p>🌡 ${temp}°C</p>
          <p>${desc}</p>
        </div>
      `;
    });

    // CURRENT WEATHER = use FIRST item
    const current = data.list[0];

    const icon = current.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    result.innerHTML = `
      <h2>${data.city.name}</h2>
      <img src="${iconUrl}" />
      <p>🌡 Temperature: ${current.main.temp}°C</p>
      <p>☁ Condition: ${current.weather[0].description}</p>
      <p>💧 Humidity: ${current.main.humidity}%</p>
      <p>🌬 Wind: ${current.wind.speed} m/s</p>
    `;
  } catch (error) {
    result.innerHTML = '❌ Error fetching weather data';
  } finally {
    loader.classList.add('hidden');
  }
}
>>>>>>> 412c28e97025ac89cccb2b45a4be6f6f9a90dc31
