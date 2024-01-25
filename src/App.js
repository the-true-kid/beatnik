import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomePage } from './components/HomePage';
import { PlantProfile } from './components/PlantProfile';
import { Library } from './components/Library';
import { LearnPlant } from './components/LearnPlant';
import { LovePlant } from './components/LovePlant';
import { ListenPlant } from './components/ListenPlant';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Routes>
        {/* Starting page and home page, what is rendered when the website is loaded at the bass of the URL */}
        <Route path="/" element={<HomePage />} />
        {/* The plant profile page, dynamically routed to display the specific profile of the plant selected */}
        <Route path="plant-profile/:plantId" element={<PlantProfile />} />
        {/* Learn plant button, rendered dynamically with the ID of the plant from the profile page */}
        <Route path="/learn-plant/:plantId" element={<LearnPlant />} />
        {/* Love plant button, rendered dynamically with the ID of the plant from the profile page */}
        <Route path="love-plant/:plantId" element={<LovePlant />} />
        {/* Listen plant button, rendered dynamically with the ID of the plant from the profile page */}
        <Route path="listen-plant/:plantId" element={<ListenPlant />} />
        {/* Library that is linked from the homepage */}
        <Route path="/library" element={<Library />} />
      </Routes>
    </div>
  );
}

export default App;


