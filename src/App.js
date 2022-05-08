//
import React, {useState} from 'react';
//
import NavBar from './Components/Nav';
// CSS
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Homepage from './Pages/Homepage';
import Customers from './Pages/Customers';

const App = () => {
  //let [customers, setCustomers] = useState([]);
  
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/homepage' element={<Homepage/>}/>
          <Route path='/customers' element={<Customers/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
