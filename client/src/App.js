import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Resume from "./Resume";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}/>
            <Route path="/resume" element={<Resume />} />
            {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
