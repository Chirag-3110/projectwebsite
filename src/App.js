import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home/pages/Home";
import Services from "./Services/pages/Services";
import ResponsiveAppBar from "./Home/components/Nav";
import Contact from './Contact/Pages/Contact'
import Feedback from "./Feedback/Pages/Feedback";
function App() {
  return (
    <div className="App">
      <div style={{ padding: 10 }}>
        <ResponsiveAppBar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="service" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="Feedback" element={<Feedback />} />



      </Routes>
    </div>
  );
}
export default App