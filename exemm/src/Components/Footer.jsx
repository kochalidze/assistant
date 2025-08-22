import React from 'react';
import { Link } from 'react-router-dom';
import './component.css'

function Footer() {
  return (
	<div className='footer'>
		<div>
			<ul className='footer-ul'>
				<p>kochalidzegiga11@gmail.com</p>
				<p>kochalidzegiga11@gmail.com</p>
			</ul>
		</div>
		<div className="line-div"></div>
		<div className="footer-navigate-div">
			<ul className='footer-ul'>
				<li><Link className='link' to={'/'}>Home</Link></li>
				<li><Link className='link' to={'/menu'}>Menu</Link></li>
				<li><Link className='link' to={'/cart'}>Cart</Link></li>
				<li><Link className='link' to={'/contact'}>Contact</Link></li>

			</ul>
		</div>
		<div className="line-div"></div>
		<div className="other-navigate">
			<ul className='footer-ul'>
				<li>Github</li>
				<li><a href="https://www.facebook.com/k.ochalidze.giga/">Facebooke</a></li>
			</ul>
		</div>
	</div>
  )
}

export default Footer