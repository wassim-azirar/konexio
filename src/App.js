import React from 'react';
import './App.scss';
import Promo from './components/Promo';
import SignUp from './components/SignUp';
import Subscription from './components/Subscription';
import data from './data/promo.json';

const loadJson = () => JSON.parse(JSON.stringify(data));

const App = () => {
  let { name, startDate, endDate } = loadJson();

  return (
    <>
      <Promo name={name} startDate={startDate} endDate={endDate}></Promo>
      <Subscription name='hello'></Subscription>
      <SignUp></SignUp>
    </>
  );
};

export default App;
