import "./App.css";
import React from "react";
import { Route, Routes, BrowserRouter} from "react-router-dom";
import Home from "./route/Home";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
