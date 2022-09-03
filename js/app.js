// Api
const API_KEY = `8f74759bf4601e4d45b75574a7fe05f5`;
// Load Data by API
const loadTemperature = async city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayTemperature(data);
    } catch (error) {
        console.log(error);
    }
}

// Display Temperature
const displayTemperature = data => {
    setInnerTextById('temp', data.main.temp);
    setInnerTextById('condition', data.weather[0].main);
}

// Set Inner Text Function
const setInnerTextById = (id, text) => {
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}

// Get Value Input Field by .value
document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('input-field');
    const city = searchField.value;
    // Set city
    document.getElementById('city').innerText = city;
    loadTemperature(city);
})


loadTemperature('dhaka');