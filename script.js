const Weather = document.getElementById("weather");
const City = document.getElementById("city");
const Temp = document.getElementById("temp");
const Humidity = document.getElementById("humidity");
const Wind = document.getElementById("wind");
const Show = document.getElementById("h");
const Show1 = document.getElementById("ws");
const Show2 = document.getElementById("imgw");
const Show3 = document.getElementById("imgh");
const inputfield = document.getElementById("i1");
const btn = document.getElementById("i2");
const ApiKey = "2152aa3bc59eefc4a88e666602ceabbf";
const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
async function f1(city) {
    Show.style.display = "none";
    Show1.style.display = "none";
    Show2.style.display = "none";
    Show3.style.display = "none";
    City.style.display = "none";
    Temp.style.display = "none";
    Humidity.style.display = "none";
    Wind.style.display = "none";
    Weather.style.display = "none";
    document.getElementById("p1").style.display = "none";
    const response = await fetch(ApiUrl + city + `&appid=${ApiKey}`);
    if (response.status == 404) {
        document.getElementById("p1").style.display = "block";
    } else {
        let data = await response.json();
        console.log(data);
        City.style.display = "block";
        Temp.style.display = "block";
        Humidity.style.display = "block";
        Wind.style.display = "block";
        Weather.style.display = "block";
        City.innerHTML = data.name;
        Temp.innerHTML = Math.round(data.main.temp) + "°C";
        Humidity.innerHTML = data.main.humidity + "%";
        Wind.innerHTML = data.wind.speed + " km/h";
        Show.style.display = "block";
        Show1.style.display = "block";
        Show2.style.display = "block";
        Show3.style.display = "block";

        if (data.weather[0].main == "Clouds") {
            Weather.src = "clouds.png";
        } else if (data.weather[0].main == "Clear") {
            Weather.src = "clear.png";
        } else if (data.weather[0].main == "Drizzle") {
            Weather.src = "drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            Weather.src = "mist.png";
        } else if (data.weather[0].main == "Rain") {
            Weather.src = "rain.png";
        } else if (data.weather[0].main == "Snow") {
            Weather.src = "snow.png";
        } else {
            Weather.src = "clouds.png";
        }
    }
}
btn.addEventListener("click", function () {
    f1(inputfield.value);
});