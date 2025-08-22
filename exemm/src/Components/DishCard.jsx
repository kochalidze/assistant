import React from 'react';
import object from './Dishes';

function DishCard({addToCart}) {
  return (
	<div className='dish-card-container'>
		{object.map((e) => {
			return(
				<div key={e.id} className='dish-card'>
					<img src={e.image} alt={e.name} />
					<h2>{e.name}</h2>
					<h4>{e.category}</h4>
					<p>{e.description}</p>
					<button onClick={() => addToCart(e)}>add to Cart</button>
				</div>
			)
		})}
	</div>
  )
}

export default DishCard