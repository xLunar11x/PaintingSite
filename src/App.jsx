import { useState } from 'react'
import { Navbar, About, Contact, Home, Portfolio, Services } from './components/Index';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css'

function App() {
  

  return (
    <div className="App">
      <Navbar />
      <div>
        <Routes>
          <Route element={<Home/>} path="/"/>
          <Route element={<Portfolio/>} path='portfolio'/>
          <Route element={<About/>} path="about"/>
          <Route element={<Services/>} path="services"/>
          <Route element={<Contact/>} path="contact"/>
        </Routes>
      </div>
    </div>
  )
}

export default App
