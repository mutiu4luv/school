import React from 'react'
import { Button } from 'react-bootstrap'
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
<h5> Easy <br/>University </h5>
<p> We Aim To Create An Extraordinary Universty</p>
<Button className='btn'>Discover More </Button>

    </div>
</div>
      
    </div>
  )
}

export default Home
