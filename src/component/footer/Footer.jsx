import React from 'react'
import { Button } from 'react-bootstrap'
import "../footer/footer.css"

const Footer = () => {
  return (
    <div>
      <footer>
        <div className='container'>
            <div className='row first_row'>
                <div className='footer_content'>
                    <h6>
                        <span>M</span>utiu
                    </h6>
                    <h5>Subscribe To Our News Letter</h5>
                    <div>
                        <input type='text' className="form-control" placeholder="Your Email" />
                        <Button className='btn'>Subcribe </Button>
                    </div>
                </div>
            </div>
            {/* second Row */}


            <div className='second_row row'>
              <div className='col-sm-3'>
                <h6>Browse</h6>
                <li>Blog</li>
                <li>Price</li>
                <li>Contact</li>
                <li>Courses</li>

              </div>
              <div className='col-sm-3'>
                <h6>Browse</h6>
                <li>Blog</li>
                <li>Price</li>
                <li>Contact</li>
                <li>Courses</li>

              </div>
              <div className='col-sm-3'>
                <h6>Browse</h6>
                <li>Blog</li>
                <li>Price</li>
                <li>Contact</li>
                <li>Courses</li>

              </div>
              <div className='col-sm-3'>
                <h6>Browse</h6>
                <li>Blog</li>
                <li>Price</li>
                <li>Contact</li>
                <li>Courses</li>

              </div>
            </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
