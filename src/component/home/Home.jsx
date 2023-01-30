import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import mute from "../../images/mute.jpg"
import "../home/home.css"
const Home = () => {
  return (
    <div>
      
<div className='header'>
    <div>
        <div className='img'>
<img src={ mute} alt="tdy" className='img-img'/>
        </div>
        <div className='overlay'>  </div>
    </div>
    <div className='HeaderContent'>

<h6>Welcome</h6>
<h5> Mutiu <br/>University </h5>
<p> We Aim To Create An Extraordinary Universty</p>
   <Link to="/login" ><Button className='btn'>Sign up / Sing in </Button> </Link> 

    </div>
</div>
      
    </div>
  )
}

export default Home
