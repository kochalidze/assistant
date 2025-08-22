import React, {useState} from 'react'
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';
import './pages.css';

function Cotact() {

  const [form, setForm] = useState({
    name: '',
    email: '',
    massage: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you!');
    setForm({
      name: '',
      email: '',
      massage: "",
    })
  }

  return (
	<div>
    <NavBar />
    <div className='contact-container'>
      <form onSubmit={handleSubmit} className='contact-form'>
        <input type="text" name="name" placeholder='Enter name' 
        value={form.name}
        onChange={handleChange}/>

        <input type="email" name="email" placeholder='Enter email' 
        value={form.email}
        onChange={handleChange}/>

        <input type="text" name='massage' placeholder='Enter massage' 
        value={form.massage}
        onChange={handleChange}/>
        <button type='submit'>submit</button>
      </form>
    </div>
    <Footer />
  </div>
  )
}

export default Cotact;