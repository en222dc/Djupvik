export function getWeatherData() {

    return fetch('https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/18.1489/lat/57.3081/data.json')
        .then((response) => response.json())
        .then((data) => data.timeSeries[1])
}
