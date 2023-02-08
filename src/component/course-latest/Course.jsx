import React, { useEffect, useState } from 'react'
import "../course-latest/course.css"
import course1 from '../../images/course1.jpg'
import course2 from '../../images/course2.jpg'
import course3 from '../../images/course3.jpg'
import course4 from '../../images/course4.jpg'

import { AiFillStar } from "react-icons/ai";
import { Link } from 'react-router-dom';
import {  Col } from 'react-bootstrap';
import axios from 'axios'
import Carousel from 'react-material-ui-carousel'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import _ from "lodash"

    const Course = () => {
        const pageSize =10
    const [news, setNews] = useState([]);
    const [posts, setPosts] = useState()
    const [paginatedPosts, setPaginatedPosts] = useState()
    const [currentPage, setCurrentPage] = useState(1)

    
    useEffect(() => {
      const fetchNews = async () => {
        const { data } = await axios.get("http://jsonplaceholder.typicode.com/posts");
  
        console.log(data)
        setNews(data);
        setPosts(data)
        setPaginatedPosts(_(data).slice(0).take(pageSize).value())
        
      };
  
      fetchNews();
    }, []);

    const handleChange = (e, p) =>{
        console.log(e, p)
        // setPage(p)
    }

const pageCount = posts? Math.ceil(posts.length/pageSize) :0;
if (pageCount ===1) return null
const pages = _.range(1, pageCount+1)
  

const pagination=(pageNo)=>{
    setCurrentPage(pageNo)
    const startIndex = (pageNo -1)* pageSize
    const paginatedPost = _(posts).slice(startIndex).take(pageSize).value()
    setPaginatedPosts(paginatedPost)
}



return (
    <div className='latest container'>
         <div className='content'>
<h6>  <span>L</span>atest Courses </h6> 
<p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Voluptate eveniet autem possimus tempore illo labore.
</p>

</div>



<div className='grid-item '>{
    !paginatedPosts ? ("No Data Found") : (
  

<div className='row ' >
{paginatedPosts?.map((news) => (
          <div key={news._id} sm={12} md={6} lg={4} xl={3}>
            <news news={news} />
 

    <div className='col-sm-3 '   >

    
        <div className='box'>
            <img src={course1} className="img-fluid" alt='trxyt' />
           

            <div className='boxContent'>
            <h6>{news.title}</h6>
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
            </div> 
            

        </div>
     

    </div>





    
             
</div>
    ))}

</div>  )}




</div>  
<nav className='d-flex justify-content-center'>
    <ul className='pagination'>
{
    pages.map((page)=>(
        <li className={
            page === currentPage ? "page-item active" : "page-item"
        }>
            <p className='page-link' onClick={()=>pagination(page)}>
      {page}
            </p>
            </li>

    ))
}

    
    </ul>
</nav>
    </div>


  )
}

export default Course
