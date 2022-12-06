import React from 'react';

import Header from './components/common/Header';
import CityWeatherContainer from './components/CityWeatherContainer';

import './App.css';

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

function App() {
  return (
    <div className="App">
      <Header>
        <CityWeatherContainer cityData={cities} />
      </Header>
    </div>
  );
}

export default App;
