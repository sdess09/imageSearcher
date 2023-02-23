import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImageSearchScreen from "./ImageSearchScreen";
import ImageDetailScreen from "./ImageDetailScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ImageSearchScreen />} />
        <Route path="/image/:id" element={<ImageDetailScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
