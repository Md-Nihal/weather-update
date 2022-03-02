// personal API
const API_KEY = `11d2e8fefee623f22dcd1422d0d21117`;
// searching temperature
const searchTemperature = () =>{
    const cityName = document.getElementById('city-input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
}
// callback for inner
const textInner = (id, text)=>{
    document.getElementById(id).innerText = text;
}
// display function
const displayTemperature = temperature =>{
    // city name set
    textInner('city-name', temperature.name);
    // temperature set
    textInner('city-temperature', temperature.main.temp);
    // condition set
    textInner('city-condition', temperature.weather[0].main);
    // icon set
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('icon');
    imgIcon.setAttribute('src', url);
}