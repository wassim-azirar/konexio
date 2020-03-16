import React from 'react';
import './App.css';
import Promo from './components/Promo';
import data from './data/promo.json';

const loadJson = () => JSON.parse(JSON.stringify(data));

const App = () => {
  let { name, startDate, endDate } = loadJson();

  return (
    <>
      <Promo name={name} startDate={startDate} endDate={endDate}></Promo>
      <div>Body</div>
    </>
  );
};

export default App;
