import React from 'react'
import "../course-latest/course.css"
import course1 from '../../images/course1.jpg'
import course2 from '../../images/course2.jpg'
import course3 from '../../images/course3.jpg'
import course4 from '../../images/course4.jpg'

import { AiFillStar } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';

const Course = () => {
  return (
    <div className='latest container'>
         <div className='content'>
<h6>  <span>L</span>atest Courses </h6> 
<p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Voluptate eveniet autem possimus tempore illo labore.
</p>

</div>

<Carousel>
<div className='row'>

    <div className='col-sm-3'>
    {/* <Carousel.Item> */}
        <div className='box'>
            <img src={course1} className="img-fluid" alt='trxyt' />
           

            <div className='boxContent'>
            {/* <Carousel.Caption> */}
            <h6>Art</h6>
            <h5>20 principles</h5>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, dolorem!</p>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
                <br /> 
            <Link>Buy Now</Link>      
            {/* </Carousel.Caption> */}
            </div> 
            

        </div>
        {/* </Carousel.Item> */}
    </div>
  

    
    

     <div className='col-sm-3'>
        <div className='box'>
            <img src={course2} className="img-fluid" alt='trxyt' />
            <div className='boxContent'>
            <h6>science</h6>
            <h5>16 lecturers</h5>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, dolorem!</p>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
                <br /> 
            <Link>Buy Now</Link>      
            </div> 
        </div>
    </div>
    <div className='col-sm-3'>
        <div className='box'>
            <img src={course3} className="img-fluid" alt='trxyt' />
            <div className='boxContent'>
            <h6>building</h6>
            <h5>27 lecturers</h5>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, dolorem!</p>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
                <br /> 
            <Link>Buy Now</Link>      
            </div> 
        </div>
    </div>
    <div className='col-sm-3'>
        <div className='box'>
            <img src={course4} className="img-fluid" alt='trxyt' />
            <div className='boxContent'>
            <h6>optometery</h6>
            <h5>20 lecturers</h5>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, dolorem!</p>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
                <br /> 
            <Link>Buy Now</Link>      
            </div> 
        </div>
    </div>
    
   






</div>
{/* </Carousel.Item> */}

</Carousel>

    </div>
 

  )
}

export default Course
