import { useState } from 'react'
import { Navbar, Contact, Home, Portfolio, Services, Footer } from './components/Index';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css'

function App() {
  

  return (
    <div className="App">
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
