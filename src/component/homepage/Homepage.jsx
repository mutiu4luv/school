import React from 'react'
import Course from '../course-latest/Course'
import Custom from '../custom/Custom'
import Footer from '../footer/Footer'
import Home from '../home/Home'
import Navbar from '../Navbar'
import NewCourse from '../new-course/NewCourse'
import Testimony from '../testimony/Testimony'



const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Custom />
      <Course />
      <NewCourse />
      <Testimony />
      <Footer />
    </div>
  )
}

export default Homepage
