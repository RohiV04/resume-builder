import { useState } from "react";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Resume from "./Resume";
import Landing from "./Landing";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
