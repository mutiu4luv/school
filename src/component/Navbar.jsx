import React, { useState } from 'react'
import { NavLink } from 'react-bootstrap'
import "./Navbar/navbar.css"
const Navbar = () => {
  const [navbar, setNavbar] = useState(false)
  const ChangeBg = () => {
    if (window.scrollY >= 100) {
      setNavbar(true)

    } else {
      setNavbar(false)
    }
    
  }
  window.addEventListener("scroll", ChangeBg)
  return (
    <nav className={navbar ? "navbar navbar-expand fixed-top active" : "navbar navbar-expand fixed-top"} >
      <NavLink className='navbar-brand'>  <span>M</span>utiu</NavLink>
<div>
<ul className='navbar-nav'>



<li className='nav-item'>
<NavLink className='nav-link'>Home</NavLink>
</li>


<li className='nav-item'>
<NavLink className='nav-link'>About</NavLink>
</li>

<li className='nav-item'>
<NavLink className='nav-link'>Services</NavLink>
</li>

<li className='nav-item'>
<NavLink className='nav-link'>Contact</NavLink>
</li>


</ul>
</div>
    </nav>
  )
}

export default Navbar
