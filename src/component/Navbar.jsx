// import React, { useState } from 'react'
// import { NavLink } from 'react-bootstrap'
// import "./Navbar/navbar.css"
// const Navbar = () => {
//   const [navbar, setNavbar] = useState(false)
//   const ChangeBg = () => {
//     if (window.scrollY >= 100) {
//       setNavbar(true)

//     } else {
//       setNavbar(false)
//     }
    
//   }
//   window.addEventListener("scroll", ChangeBg)
//   return (
//     <nav className={navbar ? "navbar navbar-expand fixed-top active" : "navbar navbar-expand fixed-top"} >
//       <NavLink className='navbar-brand'>  <span>M</span>utiu</NavLink>
// <div>
// <ul className='navbar-nav'>



// <li className='nav-item'>
// <NavLink className='nav-link'>Home</NavLink>
// </li>


// <li className='nav-item'>
// <NavLink className='nav-link'>About</NavLink>
// </li>

// <li className='nav-item'>
// <NavLink className='nav-link'>Services</NavLink>
// </li>

// <li className='nav-item'>
// <NavLink className='nav-link'>Contact</NavLink>
// </li>


// </ul>
// </div>
//     </nav>
//   )
// }

// export default Navbar


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';

function BasicExample() {
  return (
    <Navbar  expand="lg" className='navbar navbar-expand' style={{ border:"transparent"}} >
      <Container >
        {/* <Navbar.Brand href="#home"  className='navbar-brand '> <span>M</span>utiu</Navbar.Brand> */}
        <NavLink className='navbar-brand' to="/">  <span>M</span>utiu</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-up" >
            <Link className='navbar-brand' to="/">Home</Link>
            <Link to="ourteam" className='navbar-brand'>Our Team</Link>
            <NavDropdown title="click here" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">ABout us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                our mission
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Our History</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
                <Link to ="/login">  Login</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;



// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

// export default function ButtonAppBar() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             Mutiu
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }



