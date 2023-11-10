
import React from "react";
import { Route, Routes, BrowserRouter} from "react-router-dom";
import Home from "./route/Home";
import Products from "./route/Products";
import ProductDetails from "./route/ProductDetails";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/products" element={<Products/>}/>
      <Route path="/products/:id" element={<ProductDetails/>} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
