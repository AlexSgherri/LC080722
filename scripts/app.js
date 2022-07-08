const form = document.querySelector(".change-location");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");
const card = document.querySelector(".card");
let LastVisitedCity = localStorage.getItem('LastCity')

window.addEventListener('DOMContentLoaded', (e)=> {
  e.preventDefault();
  console.log(LastVisitedCity);
  updateCity(LastVisitedCity)
  .then((data) => updateUI(data))
    .catch((err) => console.log(err));
})

function keepJustOneCity (city){
  console.log(city)
  localStorage.removeItem('LastCity');
  localStorage.setItem('LastCity', city);
}

//updating city
const updateCity = async (city) => {
    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key);
  
    return { cityDetails, weather };
  };
  

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = form.city.value.trim();
  form.reset();

  updateCity(city)
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
});


//updating UI
const updateUI = (data) => {
//   const cityDetails = data.cityDetails;
//   const weather = data.weather;

const {cityDetails, weather} = data

console.log(data);

  details.innerHTML = `
    <div class="text-muted text-uppercase text-center details">
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
  </div>
    `;

  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }

  let timeSource = !weather.isDayTime ? "images/day.svg" : "images/night.svg"

time.setAttribute("src" , timeSource);

const icons = `images/icons/${weather.WeatherIcon}.svg`
icon.setAttribute('src', icons);

keepJustOneCity(cityDetails.EnglishName);
};


// let timeSouce = null
// if(weather.isDayTime){
//     timeSouce = 'images/day.svg'
// }
// else{
//     timeSouce = 'image/night.svg'
// }


