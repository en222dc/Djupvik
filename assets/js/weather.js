import { getWeatherData } from './json.js';

getTemp();

const SHOW_TEMP = document.getElementById('temp');

async function getTemp() {
    let weatherData = await getWeatherData();

    let tempCel = weatherData.parameters[11].values[0];

    let paragraph = document.createElement("p");
    let tempMessage = document.createTextNode(`${tempCel}°`);
    paragraph.appendChild(tempMessage);

    let element = document.getElementById("temp");
    element.appendChild(paragraph);
}
