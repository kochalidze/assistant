import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import './pages.css'

function Home() {
  return (
	<div>
		<NavBar />
		<div className="texts">
			<h2>Home</h2>
			<p>Welcome to our kitchen! Explore our carefully crafted dishes, made with fresh ingredients and a lot of love. Whether you crave something light or hearty, we have something to satisfy every taste.</p>
			<p>All our dishes are prepared fresh daily. Ask our staff about chef’s specials and seasonal offerings!</p>
			<p>Can’t decide? Browse our menu, add your favorites to the cart, and enjoy a tasty meal delivered straight to your table.</p>
		</div>
		<Footer />
	</div>
  )
}

export default Home