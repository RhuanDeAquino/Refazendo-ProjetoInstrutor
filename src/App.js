import React from 'react';
import './App.css';

import Test from './screens/header';
import Home from './screens/home';
import Sobre from './screens/sobre';
import Adote from './screens/adote';
import Footer from './screens/footer';

function App() {
  return (
    <div className="App">
      <Test/>
      <Home />
      <Sobre />
      <Adote />
      <Footer />
    </div>
  );
}

export default App;
