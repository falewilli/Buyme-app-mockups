import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
        <Route exact path= "/" element = {<Landing/>}></Route>
        {/* <Route path= "/product/:id" element = {<Product/>}></Route>
        <Route path= "/products" element = {<Products/>}></Route> */}
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
