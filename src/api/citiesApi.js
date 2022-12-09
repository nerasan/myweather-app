import { handleError, handleResponse } from './apiUtils';

const baseUrl = 'http://api.openweathermap.org';
const appid = process.env.REACT_APP_OPENWEATHER_API_KEY;

export function getGeoLocation(cityName) {
    return fetch(
        `${baseUrl}/geo/1.0/direct?q=${cityName}&limit=1&appid=${appid}`
    )
        .then(handleResponse)
        .then((data) => (Array.isArray(data) ? data.shift() : data))
        .catch(handleError);
}

export function getWeatherData(Coordinates) {
    const { lat, lon } = coordinates;

    return fetch(
        `${baseUrl}/data/2.5/forecast?cnt=5&units=imperial&lat=${lat}&lon=${lon}&appid=${appid}`
    )
        .then(handleResponse)
        .catch(handleError);
}