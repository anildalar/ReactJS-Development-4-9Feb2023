//1. Import Area
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import something from somelocation/somelibary
import MyComp1 from './components/MyComp1';

//2. Function Defination area



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyComp1 />
);



//3. Export Area