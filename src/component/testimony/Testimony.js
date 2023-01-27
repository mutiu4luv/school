import React from 'react'
import "../testimony/testimony.css"
import mutiu1 from '../../images/mutiu1.jpg'
import testi from '../../images/testi.jpg'
import testi1 from '../../images/testi1.jpg'


const Testimony = () => {
  return (
    <div>
      <div className='testimonial ccontainer'>
      <div className='content'>

<h6> What  <span>The</span> Say </h6>
<p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Voluptate eveniet autem possimus tempore illo labore.
</p>

</div>
<div className='row'>
  <div className='col-sm-4 '>
    <div className='box'>
      <p>
        mutiu's school impacted in me positively, especially in the aspect of academics and social bonding
      </p>
      <h6>Easy Coding</h6>
      <img src={mutiu1} className="img-fluid"  alt='gfx' />
    </div>
  </div>
  <div className='col-sm-4 mid'>
    <div className='box'>
      <p>
        mutiu's school impacted in me positively, especially in the aspect of academics and social bonding
      </p>
      <h6>Easy Coding</h6>
      <img src={testi} className="img-fluid"  alt='qwc' />
    </div>
  </div>
  <div className='col-sm-4'>
    <div className='box'>
      <p>
        mutiu's school impacted in me positively, especially in the aspect of academics and social bonding
      </p>
      <h6>Easy Coding</h6>
      <img src={testi1} className="img-fluid"  alt='qwc' />
    </div>
  </div>
</div>
      </div>
    </div>
  )
}

export default Testimony
