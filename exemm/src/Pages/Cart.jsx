import React, {useEffect} from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import './pages.css'

function Cart({cart, setCart}) {

  useEffect(()=> {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart]);

  useEffect(()=> {
    const local = localStorage.getItem('cart');
    if(local) {
      setCart(JSON.parse(local));
    }
  }, [setCart])

  function removeFromCart(index) {
    const remove = cart.filter((_, i) => i !== index);
    setCart(remove)
  }

  return (
    <div>
      <NavBar />
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ): (
        <div className='cart-container'>
          <p className='length-of-cart'>In Cart is {cart.length} Item</p>
          <div className="carts">
          {cart.map((i, index) => (
            <div key={index} className='dish-card02' >
              <img src={i.image} alt={i.name} />
              <h2>{i.name}</h2>
              <h4>{i.category}</h4>
              <p>{i.description}</p>
              <button onClick={()=> {
                removeFromCart(index)
              }}>Remove</button>
            </div>
          ))}
          </div>
        </div>
      )}
      <Footer />
    </div>
  )
}

export default Cart