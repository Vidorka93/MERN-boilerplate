import React, { Component } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import "./App.css";
import GaborMainComponent from "./gabor/_mainComponent/gabor.component";
import Navbar from "./Dorina/navbar";

import GergoMainComponent from "./gergo/GergoMain.component";
import ZsofiComponent from "./Zsofia/Zsofikomponens";

const App = ({ children }) => {
 return (
  <>
  <Header />
  <Navbar />
      <GaborMainComponent />
      <ZsofiComponent />
      <div className="App">
        <div>test</div>
        <h1>💘Zsófia🐶🤓💐💍💅🏼💕</h1>
        <img alt="random-dog"></img>
      </div>
      <GergoMainComponent />
  <main>
    {children}
  </main>

  <Footer />
</>

 );


};



export default App;
