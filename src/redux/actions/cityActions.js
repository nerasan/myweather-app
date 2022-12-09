import { getGeoLocation, getWeatherData } from "../../api/citiesApi";
import {
    ADD_CITY,
    LOAD_CITIES,
    LOAD_GEO_LOCATION_SUCCESS,
    LOAD_GEO_LOCATION_SUCCESS,
    LOAD_WEATHER_DATA_SUCCESS,
} from './actionTypes';
import { apiCallError, beginApiCall } from "./apiStatusActions";

export const loadCitiesSuccess = () => {
    return { type: LOAD_CITIES }
}

export const addCity = (cityName) => {
    return { type: ADD_CITY, cityName }
}

export const loadGeoLocationSuccess = (location) => {
    return { type: LOAD_GEO_LOCATION_SUCCESS, location }
}

export const loadWeatherDataSuccess = (data) => {
    return { type: LOAD_WEATHER_DATA_SUCCESS, data }
}

export function loadCities() {
    return (dispatch) => {
        const cities = [];
        dispatch(loadCitiesSuccess(cities))
    }
}

export function addCity(cityName) {
    return (dispatch) => {
        dispatch(addCity(cityName))
    }
}

export function loadGeoLocation(cityName) {
    return (dispatch) => {
        dispatch(beginApiCall())

        return getGeoLocation(cityName)
            .then((location) => dispatch(loadGeoLocationSuccess(location)))
            .catch((error) => {
                dispatch(apiCallError(error))
                throw error;
            })
    }
}

export function loadWeatherData(coordinates) {
    return (dispatch) => {
        dispatch(beginApiCall())

        return getWeatherData(Coordinates)
            .then((data) => dispatch(loadWeatherDataSuccess(data)))
            .catch((error) => {
                dispatch(apiCallError(error))
                throw error;
            })
    }
}