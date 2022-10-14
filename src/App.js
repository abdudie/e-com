import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./store/Store.js";

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
