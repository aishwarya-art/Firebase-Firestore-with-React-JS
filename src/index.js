import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import CollectionPage from './CollectionPage';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/collection" element={<CollectionPage />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
