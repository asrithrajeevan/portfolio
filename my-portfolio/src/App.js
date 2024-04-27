import './App.css';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import {Routes, Route, Link, useHistory} from "react-router-dom";
import { useState } from 'react';
import { AppCotext } from './components/common/appContext';
import NavBar from './components/common/navbar';

function App() {
  const [state, setState]=useState(10)
  return (
    <div className="App">
      {/* <button onClick={()=>history.push('/about')} /> */}
      {/* <NavBar /> */}
      <AppCotext.Provider value={{data : state}}>
        {/* <Routes> */}
          {/* <Route element={<Home/>} path='/home' /> */}
          {/* <Route element={<About/>} path='/about' /> */}
        {/* </Routes> */}
        <Home />
        <About />
      </AppCotext.Provider>
    </div>
  );
}

export default App;
