

const key = "LGIsXTolkzQ8Dlo3XpwHSq8TYrZtY6bG";
const baseURL = "http://dataservice.accuweather.com/locations/v1/cities/search";
const currentCondition = `http://dataservice.accuweather.com/currentconditions/v1/`;

//get weather information
const getWeather = async (id) => {
  const base = currentCondition;
  const query = `${id}?apikey=${key}`

  const response = await fetch(base + query)
  const data = await response.json()
  return data[0]
};

//get city information
const getCity = async (city) => {
  const base = baseURL;
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();
  return data[0];
};

// getCity(city)
//   .then((data) => getWeather(data.Key))
//   .then((data) => console.log(data))
//   .catch(err => console.log(err))
