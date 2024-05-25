import React from 'react';
import './App.css';
import { LandingPage } from './store/pages/LandingPage';
import { Routes,Route } from 'react-router-dom';
import { RicePage } from './store/pages/RicePage';
import { DalPage } from './store/pages/DalPage';
import { SpicesPage } from './store/pages/SpicesPage';
import { RiceSolo } from './singles/RiceSolo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/' element = {<LandingPage />}/>
        <Route path = '/Rice' element = {<RicePage />}/>
        <Route path = '/Dal' element = {<DalPage />}/>
        <Route path = '/Spices' element = {<SpicesPage />}/>
        <Route path = '/Rice/:id' element = {<RiceSolo />}/>
      </Routes>
    </div>
  );
}

export default App;
