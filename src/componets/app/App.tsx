import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="image.jpg" className="App-webcam" alt="webcam" />
        <p>
          Heptonstall Weather Station and Webcam
        </p>
      </header>
      <p className="App-body">
        This image is taken from a live feed of a home security camera looking out from Heptonstall at the valley.
        An image is taken every 15 minutes and uploaded to this website, if you stay on this page long enough the
        image will automatically refresh within the page
      </p>
      <a
          className="WeatherUnderground-link"
          href="https://www.wunderground.com/personal-weather-station/dashboard?ID=IHEPTONS2#history"
          target="_blank"
          rel="noopener noreferrer"
      >
        WeatherUnderground Station
      </a>
    </div>
  );
}

export default App;
