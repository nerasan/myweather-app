import React from "react";

import CityWeather from "./CityWeather";

const CityWeatherContainer = (props) => {

    const cities = props.cityData;

    return (
            <div className="row">
                {cities.map(city => {
                    return (
                        <div key={city.id} className="col">
                            <CityWeather
                                name={city.name}
                                temperature={city.temperature}
                                image={city.image}
                                lowTemp={city.lowTemp}
                                highTemp={city.highTemp}
                                humidity={city.humidity}
                            />
                        </div>
                    )
                })}
            </div>
    )
}

export default CityWeatherContainer;