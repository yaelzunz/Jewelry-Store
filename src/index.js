import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// 1. import:
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './screens/Home';
import About from './screens/About';
import Items from './screens/Items';
import ContactUs from './screens/ContactUs';
import Header from './components/Header';
import Rings from './screens/items/Rings';
import Earrings from './screens/items/Earrings';
import Chains from './screens/items/Chains';
import MyRing from './components/MyRing';
import MyChain from './components/MyChain';
import MyEarring from './components/MyEarring';
import Add from './components/Add';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemScreen from './components/ItemScreen';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Rings' element={<Rings/>} />
      <Route path='/Chains' element={<Chains/>} />
      <Route path='/Earrings' element={<Earrings/>} />
      <Route path='/about' element={<About/>}/>

      <Route path='/items' element={<Items/>}>
        <Route path='/items/Rings' element={<Rings/>}>
            <Route path=':ringName' element={<MyRing/>}/>
        </Route>
        <Route path='/items/Chains' element={<Chains/>}>
            <Route path=':chainName' element={<MyChain/>}/>
        </Route>
        <Route path='/items/Earrings' element={<Earrings/>}>
            <Route path=':earringName' element={<MyEarring/>}/>
        </Route>
      </Route>

      <Route path='/additem' element={<Add/>}/>

      <Route path='/item/:itemId' element={<ItemScreen/>}/>

      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='*' element={<h3 className='alert alert-danger text-center'>
        404 - PAGE NOT FOUND</h3>}/>
        
    </Routes>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital,wght@0,100;0,300;0,400;0,500;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,700;1,800;1,900&display=swap');
    </style>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();