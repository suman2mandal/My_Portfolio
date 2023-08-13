import './App.css';
import { BrowserRouter } from "react-router-dom";
import {Routes,Route} from 'react-router';
import React from "react";
import Home from './components/Home.jsx'
import Template from './components/Template.jsx';


import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './components/styles.css';

// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';

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
