import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FirstPage from './FirstPage';
import Home from './Home';
import withAppInsights from './ApplicationInsights';


const Landing = () => {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/firstPage" element={<FirstPage />} />
      </Routes>
    </>
  )
}

export default withAppInsights(Landing);