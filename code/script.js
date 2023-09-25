const userInput=document.querySelector("#userInput");
     const userInputBtn=document.querySelector("#searchbtn");
     const weatherIcon=document.querySelector("#weatherIcon");

     const apiKeys="db94ca68448f78f3c86568f0647522a9"
     const apiURL1="https://api.openweathermap.org/data/2.5/weather?q="
     const apiURL2="&appid=db94ca68448f78f3c86568f0647522a9&units=metric"

     async function checkWeather(location){
        const response= await fetch(apiURL1+location+apiURL2);
        const data= await response.json();

        if(response.status==404){
            document.querySelector(".error").style.display="block";
            document.querySelector(".weatherSection").style.display="none";
        }
        else{
              // select element
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector(".condition").innerHTML=data.weather[0].main;
        document.querySelector("#humidityEle").innerHTML=data.main.humidity+"%";
        document.querySelector("#windSpeedEle").innerHTML=data.wind.speed+"Km/h";
        document.querySelector(".cityName").innerHTML=data.name;

        if(data.weather[0].main=="Clouds"){
            weatherIcon.src="../Aseets/images/clouds.png";
        }
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src="../Aseets/images/rain.png";
        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src="../Aseets/images/mist.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="../Aseets/images/drizzle.png";
        }
        else if(data.weather[0].main=="Snow"){
            weatherIcon.src="../Aseets/images/snow.png";
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src="../Aseets/images/clear.png";
        }

        document.querySelector(".weatherSection").style.display="block";
        document.querySelector(".error").style.display="none";

        }
       

     }
 
     userInputBtn.addEventListener("click",()=>{
        checkWeather(userInput.value);
     })