import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Dashboard from "./components/Dashboard";
import Add from "./components/Add";
import Contact from "./components/Contact";
import Edit from "./components/Edit";

const App = () => {
  return (
    <div className="w-screen min-h-screen h-auto flex flex-col items-center justify-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
