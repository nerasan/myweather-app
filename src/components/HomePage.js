import { useEffect } from "react";
import { connect } from 'react-redux';
import { loadCities } from '../../redux/actions/cityActions';

import AddCityForm from "./AddCityForm";
import CityWeatherContainer from './CityWeatherContainer';

const cities = [
    {
      id: 1,  
      name: "New York",
      temperature: 82,
      image: "https://cdn-icons-png.flaticon.com/512/4005/4005793.png",
      lowTemp: 70,
      highTemp: 87,
      humidity: 48
    },
    {
      id: 2,
      name: "Dallas",
      temperature: 82,
      image: "https://cdn-icons-png.flaticon.com/512/4005/4005793.png",
      lowTemp: 70,
      highTemp: 87,
      humidity: 48
    },
    {
      id: 3,
      name: "Seattle",
      temperature: 82,
      image: "https://cdn-icons-png.flaticon.com/512/4005/4005793.png",
      lowTemp: 70,
      highTemp: 87,
      humidity: 48
    },
  ]

const HomePage = () => {

    return (
      <div className="homepage">
        <h2>Weather Overview</h2>
        <AddCityForm />
        <CityWeatherContainer cityData={cities} />
      </div>
    )
}

export default HomePage;