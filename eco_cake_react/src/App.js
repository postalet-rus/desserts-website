import React from 'react';
import Header from './components/header/Header';
import Preview from './components/preview/Preview';
import Promo from './components/promo/Promo';
import Suitables from './components/suitables/Suitables';
import Stages from './components/stages/Stages';
import Catalog from './components/catalog/Catalog';
import Order from './components/order/Order';
import Location from './components/location/Location';
import './App.css';

function App() {
  return (
    <div id="_app" className="app-container">
      <Header />
      <Preview />
      <Promo />
      <Suitables />
      <Stages />
      <Catalog />
      <Order />
      <Location />
    </div>
  );
}

export default App;