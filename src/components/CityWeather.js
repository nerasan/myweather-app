// CityWeather component to show hard-coded information for the moment
import React from 'react';

const CityWeather = (props) => {

    return (
        <div>
            <h4>{props.name}</h4>
            <h3>{props.temperature}</h3>
            <img src={props.image} width="25px" alt="weather icon" />
            <div>low: {props.lowTemp}</div>
            <div>high: {props.highTemp}</div>
            <div>humidity: {props.humidity}%</div>
        </div>
    )
}

export default CityWeather;