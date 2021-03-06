function setup(){   
    temp = new Vue({
        el: '#temp',
        data: {
            message: "",
        }
    })

    humidity = new Vue({
        el: '#humidity',
        data: {
            message: "",
        }
    })

    description = new Vue({
        el: '#description',
        data: {
            message: "",
        }
    })

    wind = new Vue({
        el: '#wind',
        data: {
            message: "",
        }
    })
    setInterval(search(), 300000); 
}

function search(){
    console.log("Searching...")
    let city = document.getElementById('city').value;
    let country = document.getElementById('country').value;
    let url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&units=metric&APPID=7c81d9021f85b56770caa84e0331d8e7";


    if(city != "" || country != ""){
        loadJSON(url, (data)=>{
            temp.message = Math.round(data.main.temp) + "°C";
            humidity.message = data.main.humidity + "%";
            description.message = data.weather[0].description;
            wind.message = data.wind.speed + "mph";
        })
    }
}