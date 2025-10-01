import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import React from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/footer";



function App() {
  return (
    <div className="App font-sans">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

