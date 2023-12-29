import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Apropos from "./pages/Apropos";
import NotFound from "./pages/NotFound";
import Projets from "./pages/Projets";
import Contact from "./pages/Contact";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );

};

export default App;
