const apiKey = "201e71dba09fe66714320140c26a3f7e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=201e71dba09fe66714320140c26a3f7e&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city){
    const response = await fetch(apiUrl + city + '&appid=${apiKey}');
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{

    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/hr";

    if(data.weather[0].description=="scattered clouds"){
        weatherIcon.src= "images/clouds.png"
    }
    else if(data.weather[0].description=="overcast clouds"){
        weatherIcon.src= "images/cloudd-removebg-preview.png"
    }
    else if(data.weather[0].description=="broken clouds"){
        weatherIcon.src= "images/brokenclouds-removebg-preview.png"
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src= "images/rain.png"
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src= "images/clear.png"
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src= "images/drizzle.png"
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src= "images/mist.png"
    }
    else if(data.weather[0].main=="Snow"){
        weatherIcon.src= "images/snow.png"
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}}

searchBtn.addEventListener("click",()=>{
    checkweather(searchBox.value);
})
