# Weather App - Real Time Application

## About the project :
A simple and interactive Weather Application built using HTML, CSS, and JavaScript that fetches real-time weather data from the OpenWeather API based on user input.
The application allows users to search for any city and view live weather details such as:
    City Name
    Temperature
    Weather Condition
    Weather Description
    Humidity
    Wind Speed
    Weather Icon
It also handles invalid input and network/API errors gracefully.

# Project Flow: 
1. User enters city name
The user types a city name in the input field.
Example:
Goa

2. Input validation
JavaScript checks whether the input is empty or contains only spaces using trim().
Example:
search.trim()
If invalid, an error message is shown.

3. API URL creation
A dynamic URL is created using:
Base URL
City name
API Key
Example:
https://api.openweathermap.org/data/2.5/weather?q=Goa&appid=API_KEY

4. Fetch request
The app sends a request to OpenWeather server using:
fetch(url)
This request is asynchronous.

5. Server response
The API returns a response object containing:
Status code
Headers
Response body
Example status codes:
200 → Success
404 → City not found
401 → Invalid API key

6. JSON conversion
The response body is converted into a usable JavaScript object using:
response.json()

7. Data extraction
Required weather data is extracted from nested objects.
Examples:
data.name
data.main.temp
data.main.humidity
data.weather[0].main
data.wind.speed

8. UI update
Extracted values are displayed dynamically by updating DOM elements.
Example:
element.innerText = value

9. Error handling
The app uses:
Validation
To handle empty input.

if conditions
To handle API errors like invalid city.

try-catch
To handle:
No internet
Server failure
Fetch errors