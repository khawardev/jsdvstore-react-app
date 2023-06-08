/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
// import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import { React, useEffect, useContext } from "react";
import { Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import Category from "./components/Category/Category";
import Products from "./components/Products/Products";
import AppContext from './utils/AppContext'
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Cart from './components/Cart/Cart'




function App() {
  return (
    <AppContext>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products ProductHeading={"Popular Products"} />} />
          <Route path="category/:id" element={<Category />} />
          <Route path="category/:cid/Single-Product/:pid" element={<SingleProduct />} />
          {/* <Route path="cart" element={<Cart />} /> */}
        </Routes>
      </div>
    </AppContext>
  )
}

export default App


