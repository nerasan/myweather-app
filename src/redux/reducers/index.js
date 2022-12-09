import { combineReducers } from "redux";
import {
    cityReducer,
    geoLocationReducer,
    weatherDataReducer,
} from './cityReducers';

const rootReducer = combineReducers({
    cities: cityReducer,
    location: geoLocationReducer,
    weatherData: weatherDataReducer,
})

export default rootReducer;