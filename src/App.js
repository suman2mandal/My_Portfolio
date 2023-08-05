import './App.css';
import { BrowserRouter } from "react-router-dom";
import {Routes,Route} from 'react-router';
import React from "react";
import Home from './components/Home.jsx'
import Template from './components/Template.jsx';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Template />}>
              <Route path="/" element={<Home/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
