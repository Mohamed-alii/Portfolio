import React, { useLayoutEffect } from "react";
import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes, Navigate } from "react-router-dom";
import { Home, About, Contact, Portfolio } from "./pages";
import ColorSwitcher from "./components/ColorSwitcher/ColorSwitcher";

const App = () => {

  useLayoutEffect(() => {
    const root = document.documentElement;
    // changing helpers colors 
    // root.style.setProperty('--helpers-success' , 'red')
    // root.style.setProperty('--helpers-success' , 'red')
    // root.style.setProperty('--helpers-success' , 'red')
    // root.style.setProperty('--helpers-success' , 'red')
  

  }, []);
  

  return (
    <div className="page-container">
      <Sidebar />
      <ColorSwitcher />
      <main className="main">
        <Routes>
          <Route path='/' element={<Navigate to='/Home'/>} />
          <Route path='/Home' element={<Home/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/Portfolio' element={<Portfolio/>} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
