 const input = document.querySelector('#city');
const form = document.querySelector('form');
const resultDiv = document.querySelector('#weatherResult');

form.addEventListener('submit', async (e) => 
    {
    e.preventDefault();

    const city = input.value.trim();
    const apiKey = 'b744d2963a0cdba7b1bf17e00f3d4c25'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Loading message
    resultDiv.innerHTML = `<p>Fetching weather data...</p>`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) 
            {
            resultDiv.innerHTML = `
                <h2>Weather in  ${data.name}</h2>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity:💧 ${data.main.humidity}%</p>
                <p>Wind Speed:🌬️ ${data.wind.speed} m/s</p>
            `;
        } else 
            {
            resultDiv.innerHTML = `<p>${data.message}</p>`;
        }

    } catch (error) 
    {
        console.error('Error:', error);
        resultDiv.innerHTML = `<p>Failed to fetch data. Please try again later.</p>`;
    }

    input.value = '';
});

