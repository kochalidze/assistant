import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Cart from "./Pages/Cart";
import Cotact from "./Pages/Cotact";
import { use } from "react";
// import NavBar from "./Components/NavBar"

// import Footer from "./Components/Footer"

function App() {

  const [cart, setCart] = useState(() => {
    const cart01 = localStorage.getItem('cart');
    return cart01 ? JSON.parse(cart01) : []
  });

  useEffect (() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  function addToCart(element) {
      setCart([...cart, element]);
  }

  return(
      <Routes>
        <Route path='/contact' element={<Cotact/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/menu' element={<Menu addToCart={addToCart} />} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
  )
}

export default App
