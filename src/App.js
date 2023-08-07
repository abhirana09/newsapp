// Import necessary dependencies and components
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import SavedArticles from './components/SavedArticles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import Documentation from './components/Documentation';

export default function App() {
  // API key for accessing news data (Please note that API keys should be kept secure in real-world applications)
  const apikey = "328c910fd35e4a4eb7e7069e164a18f2";
  // Other API keys (commented for reference):
  // const apikey = "489f2005a6964562a10935dc7e79c5b3";
  // const apikey = "663e91b2c77a48fa9a6f894374b0c5e0";
  // const apikey = "7c7ba1c30d384b099428371e0b49c744";

  // State variables for the progress of the loading bar and selected country
  const [progress, setProgress] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState(localStorage.getItem('selectedCountry') || 'in'); // Set the default country as 'in' (India)

  // Function to handle changes in the selected country and save it to localStorage
  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    localStorage.setItem('selectedCountry', country);
  };

  return (
    <div>
      {/* Router to handle different routes */}
      <Router>
        {/* Navbar component with the handleCountryChange prop */}
        <Navbar handleCountryChange={handleCountryChange} />

        {/* LoadingBar component to show the progress of loading */}
        <LoadingBar color='#f11946' height={4} progress={progress} onLoaderFinished={() => setProgress(0)} />

        {/* Define routes and components for each route */}
        <Routes>
          <Route path="/" element={<News setProgress={setProgress} key="general" category="general" country={selectedCountry} pageSize={9} apikey={apikey} exact />} />
          <Route path="/business" element={<News setProgress={setProgress} key="business" category="business" country={selectedCountry} pageSize={9} apikey={apikey} />} />
          <Route path="/entertainment" element={<News setProgress={setProgress} key="entertainment" category="entertainment" country={selectedCountry} pageSize={9} apikey={apikey} />} />
          <Route path="/health" element={<News setProgress={setProgress} key="health" category="health" country={selectedCountry} pageSize={9} apikey={apikey} />} />
          <Route path="/science" element={<News setProgress={setProgress} key="science" category="science" country={selectedCountry} pageSize={9} apikey={apikey} />} />
          <Route path="/sports" element={<News setProgress={setProgress} key="sports" category="sports" country={selectedCountry} pageSize={9} apikey={apikey} />} />
          <Route path="/technology" element={<News setProgress={setProgress} key="technology" category="technology" country={selectedCountry} pageSize={9} apikey={apikey} />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/saved" element={<SavedArticles category="saved" />} />
        </Routes>
      </Router>
    </div>
  );
}
