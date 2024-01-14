import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter,  Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"
import Home from "./components/pages/Home"
import Services from "./components/pages/Services"
import Products from "./components/pages/Products"
import SignUp from "./components/pages/SignUp"
import Footer from "./components/Footer";

function App() {
    return (
        <BrowserRouter>
        <Navbar />
            <Routes>
                <Route index element={<Home />} />
                <Route path="services" element={<Services />} />
                <Route path="products" element={<Products />} />
                <Route path="sign-up" element={<SignUp />} />
            </Routes>
        {/* <Footer /> */}
        </BrowserRouter>
    );
}

export default App;