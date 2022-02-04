import React, { useEffect } from "react";
import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes, Navigate } from "react-router-dom";
import { Home, About, Contact, Portfolio } from "./pages";

const App = () => {

  useEffect(() => {
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
      <main className="container">
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
