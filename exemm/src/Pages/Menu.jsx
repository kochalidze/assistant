import React from 'react'
import DishCard from '../Components/DishCard'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'

function Menu({addToCart}) {
  return (
	<div>
    <NavBar />
    <DishCard addToCart={addToCart} />
    <Footer />
  </div>
  )
}

export default Menu