const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c948375f14msha1c885927ab2792p14ea53jsn2577862295ee',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const epochToHrMin = (epoch)=>{
	date = new Date(epoch);
	const time = date.toLocaleTimeString('en-US', {
	// en-US can be set to 'default' to use user's browser settings
	hour: '2-digit',
	minute: '2-digit',
	});
	console.log(time)
	return time
}

epochToHrMin(1672233448)

const getWeather = (city) => {	
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)	
		.then(response => response.json())
		.then((response) => {
			console.log(response)			
			feels_like.innerHTML = response.feels_like			
			document.getElementById("humidity").innerHTML = response.humidity
			document.getElementById("max_temp").innerHTML = response.max_temp
			document.getElementById("min_temp").innerHTML = response.min_temp						
			document.getElementById("sunrise").innerHTML = epochToHrMin(response.sunrise)
			document.getElementById("sunset").innerHTML = epochToHrMin(response.sunset)
			document.getElementById("temp").innerHTML = response.temp
			document.getElementById("wind_degrees").innerHTML = response.wind_degrees
			document.getElementById("wind_speed").innerHTML = response.wind_speed
			document.getElementById("feels_like").innerHTML = response.feels_like
		})
		.catch(err => console.error(err));
}

submit.addEventListener("click", (e) =>{
	e.preventDefault()
	getWeather(city.value)	
})

getWeather('Delhi')


let cities = ["Noida", "Shimla", "Dehradun", "Halifax", "Bangalore", "Chicago"]
const getCityWeather = (cities) => {
	
	for (let i = 0; i < cities.length; i++) {
		
		fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + cities[i], options)	
		.then(response => response.json())
		.then((response) => {
			console.log(response)

			temp = "temp"+i			
			document.getElementById(temp).innerHTML = response.temp						
			
			max_temp = "max_temp"+i
			document.getElementById(max_temp).innerHTML = response.max_temp

			min_temp = "min_temp"+i
			document.getElementById(min_temp).innerHTML = response.min_temp

			humidity = "humidity"+i
			document.getElementById(humidity).innerHTML = response.humidity

			sunrise = "sunrise"+i
			document.getElementById(sunrise).innerHTML = epochToHrMin(response.sunrise)

			sunset = "sunset"+i
			document.getElementById(sunset).innerHTML = epochToHrMin(response.sunset)

			wind_degrees = "wind_degrees"+i
			document.getElementById(wind_degrees).innerHTML = response.wind_degrees
			
			wind_speed = "wind_speed"+i
			document.getElementById(wind_speed).innerHTML = response.wind_speed

			feels_like = "feels_like"+i
			document.getElementById(feels_like).innerHTML = response.feels_like
			
		})
		.catch(err => console.error(err));
	  }
}

getCityWeather(cities)
