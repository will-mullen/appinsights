// App.js
import { Routes, Route } from 'react-router-dom';
import FirstPage from './FirstPage';
import Home from './Home';
import React from 'react'
import withAppInsights from './ApplicationInsights';
import Landing from './Landing';


function App() {
 return (
    <>
      {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/firstPage" element={<FirstPage />} />
      </Routes> */}
      <Landing/>
    </>
 );
};

export default App;