import React from "react";
import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <div className="page-container">
      <Sidebar />
      <main></main>
    </div>
  );
};

export default App;
