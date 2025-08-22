import React from 'react';
import { Link } from 'react-router-dom';
import './component.css'

function NavBar() {
  return (
	<div className='header'>
		<h2 className='header-heade'>Dishes</h2>
		<nav>
			<ul className='nav-ul'>
				<li><Link className='link' to={'/'}>Home</Link></li>
				<li><Link className='link' to={'/menu'}>Menu</Link></li>
				<li><Link className='link' to={'/cart'}>Cart</Link></li>
				<li><Link className='link' to={'/contact'}>Contact</Link></li>
			</ul>
		</nav>
	</div>
  )
}

export default NavBar