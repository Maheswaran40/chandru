import { BrowserRouter, Route, Routes } from "react-router-dom";
// pages import
import About from "./assets/pages/About";
import Contact from "./assets/pages/Contact";
import Home from "./assets/pages/Home";
import Error from "./assets/pages/Error";

import "./assets/style/style.css";

// bootstrap import
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from "./assets/Common_Comp/Header";
import Footer from "./assets/Common_Comp/Footer";
import Product from "./assets/pages/Product";
import ContextProvider from "./assets/context/ContextProvider";
function App() {
  return (
    <>
      <BrowserRouter>
      <ContextProvider>
        <Header/>

        <Routes>
          <Route path="/" element={<Home/>}/> {/* 1st page "/" */}
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<Error/>}/> {/* error page "*" "/" */}
          <Route path="/product/:navid" element={<Product/>}/>
        </Routes>
        <Footer/>
        </ContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
