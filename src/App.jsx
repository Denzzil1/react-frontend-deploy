import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NyTimes from "./Components/NYTimes/NyTimes";
import Details from "./Components/Details";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NyTimes />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
};

export default App;
