import React from 'react';
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
				<li>Home</li>
				<li>Menu</li>
				<li>Cart</li>
				<li>Contact</li>
			</ul>
		</div>
		<div className="line-div"></div>
		<div className="other-navigate">
			<ul className='footer-ul'>
				<li>Github</li>
				<li>Facebooke</li>
			</ul>
		</div>
	</div>
  )
}

export default Footer