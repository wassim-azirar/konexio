import React from 'react';
import './App.scss';
import Promo from './components/Promo/Promo';
import Subscription from './components/Subscription/Subscription';
import data from './data/promo.json';

const loadJson = () => JSON.parse(JSON.stringify(data));

const App = () => {
  let { name, startDate, endDate } = loadJson();

  return (
    <>
      <Promo name={name} startDate={startDate} endDate={endDate}></Promo>
      <hr></hr>
      <Subscription></Subscription>
    </>
  );
};

export default App;
