import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/common/Header';
import HomePage from './components/HomePage';
import DetailsPage from './components/DetailsPage';

const App = () => {

  const data = [];

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/details" exact component={DetailsPage} />
      </Switch>
    </div>
  );
}

export default App;
