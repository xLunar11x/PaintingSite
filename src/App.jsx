import { useState } from 'react'
import { Navbar, Contact, Home, Portfolio, Services, Footer } from './components/Index';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css'

function App() {
  

  return (
    <div className="App">
      <div id='top-container'>
        <div>Free Estimates</div>
        <div>Call Now! <a id="telephone" href="tel:2244690328">(224)469-0328</a></div>
      </div>
      <Navbar id="navbar"/>
      <div>
        <Routes>
          <Route element={<Home/>} path="/"/>
          <Route element={<Portfolio/>} path='portfolio'/>
          <Route element={<Services/>} path="services"/>
          <Route element={<Contact/>} path="contact"/>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
