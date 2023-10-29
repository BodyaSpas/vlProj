import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/headerComponent/header.tsx';
import './App.css';
import HomePage from './components/pages/homePage.tsx';
import PredmetPage from './components/pages/predmetPage.tsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/predmet" element={<PredmetPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
