import React from "react";
import "./App.scss";
import { Helmet } from "react-helmet";
import Sidebar from "./components/Sidebar/Sidebar";
import BottomNavBar from "./components/BottomNavBar/BottomNavBar";
import { Route, Routes, Navigate } from "react-router-dom";
import { Home, About, Contact, Portfolio } from "./pages";
import ColorSwitcher from "./components/ColorSwitcher/ColorSwitcher";

const App = () => {

  return (
    <div className="page-container">
      <Helmet>
        <meta name="description" content="Frontend Developer personal website" />
      </Helmet>
      <Sidebar />
      <BottomNavBar />
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
