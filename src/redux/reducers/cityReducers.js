import {
    ADD_CITY,
    LOAD_CITIES,
    LOAD_GEO_LOCATION_SUCCESS,
    LOAD_WEATHER_DATA_SUCCESS,
} from '../actions/actionTypes';
import initialState from './initialState';

export const cityReducer = (state = initialState.cities, action) => {
    switch (action.type) {
        case LOAD_CITIES:
            return action.cities;
        case ADD_CITY:
            return [action.cityName, ...state];
        default:
            return state;
    }
}

export const geoLocationReducer = (state = initialState.location, action) => {
    switch (action.type) {
        case LOAD_GEO_LOCATION_SUCCESS:
            return action.location;
        default:
            return state;
    }
}

export const weatherDataReducer = (
    state = initialState.weatherData,
    action
 ) => {
    switch (action.type) {
        case LOAD_WEATHER_DATA_SUCCESS:
            return action.data;
        default:
            return state;
    }
 }