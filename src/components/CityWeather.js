// CityWeather component to show hard-coded information for the moment
import React from 'react';

const CityWeather = (props) => {

    return (
        <div>
            <h3>{props.name}</h3>
            <h2>{props.temperature}</h2>
            <img src={props.image} width="25px" alt="weather icon" />
            <div>low: {props.lowTemp}</div>
            <div>high: {props.highTemp}</div>
            <div>humidity: {props.humidity}%</div>
        </div>
    )
}

export default CityWeather;