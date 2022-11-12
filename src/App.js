import Navbar from './Navbar';
import Home from './Home';
import { useState } from 'react';
 

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Home/>
      </div>
    </div>
  );
}

export default App;
