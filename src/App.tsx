import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import DailyRitual from './components/DailyRitual';
import VisionBoard from './components/VisionBoard';
import AffirmationLibrary from './components/AffirmationLibrary';
import Journal from './components/Journal';
import Visualization from './components/Visualization';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-amber-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/daily-ritual" element={<DailyRitual />} />
          <Route path="/vision-board" element={<VisionBoard />} />
          <Route path="/affirmations" element={<AffirmationLibrary />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/visualization" element={<Visualization />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;