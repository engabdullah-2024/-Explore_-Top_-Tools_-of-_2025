// create modern app routes with Home route
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
};

export default App;
