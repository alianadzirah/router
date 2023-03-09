import React from "react";

// import things from react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
import Number from './Number';
 import Otp from './Otp';
 import Name from './Name';
 import Detail from './Detail';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
              <Route path="/" element={<Number/>} />
              <Route path="/otp" element={<Otp/>} />
              <Route path="/name" element={<Name/>} /> 
              <Route path="/detail" element={<Detail/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
