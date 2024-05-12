import './App.css';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import {Routes, Route, Link, useHistory} from "react-router-dom";
import { useState } from 'react';
import { AppCotext } from './components/common/appContext';
import NavBar from './components/common/navbar';

function App() {
  const [state, setState]=useState(10)
  const [goToContact, setGoToContact] = useState(false)
  return (
    <div className="App">
      {/* <button onClick={()=>history.push('/about')} /> */}
      {/* <NavBar /> */}
      <AppCotext.Provider value={{data : state}}>
        {/* <Routes> */}
          {/* <Route element={<Home/>} path='/home' /> */}
          {/* <Route element={<About/>} path='/about' /> */}
        {/* </Routes> */}
        <Home goToContact={goToContact} setGoToContact={setGoToContact}/>
        <About goToContact={goToContact}/>
      </AppCotext.Provider>
    </div>
  );
}

export default App;
