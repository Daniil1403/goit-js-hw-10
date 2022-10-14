const API_KEY = '3cc925506e89005bc434ff86cbdc5ae6';

export function fetchWeather(city) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  ).then(res => res.json());
}
