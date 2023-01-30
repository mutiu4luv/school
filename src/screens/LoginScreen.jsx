// import { Visibility, VisibilityOff } from '@mui/icons-material'
// import { IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
// import axios from 'axios'
// import "../screens/loginScreen.css"
// import React, { useState } from 'react'
// import { FormControl, Toast, toast, ToastContainer } from 'react-bootstrap'
// import { Link, useNavigate } from 'react-router-dom'

// const LoginScreen = () => {
//   const navigate = useNavigate();
//   const userId = localStorage.getItem("userId");
//   const [email, setEmail] = useState("");

//   const [password, setPassword] = useState("");

//   const [showPassword, setShowPassword] = React.useState(false);



//   const handleClickShowPassword = () => setShowPassword((show) => !show);

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();
//     // setLoading(true);
//     const data = {
//       email: email,

//       password: password,
//     };


//     axios
//       .post("https://sfcoba.herokuapp.com/api/login", data, headers)

//       .then((res) => {
//         console.log(res.data);
//         // setLoading(false);
//         if (res.data) {
//           setEmail("");

//           setPassword("");
//           localStorage.setItem("token", data.token);
//           localStorage.setItem("userId", res.data._id);
//           localStorage.setItem("ProfilePic", res.data.profilePic);
//           localStorage.setItem("isAdmin", res.data.isAdmin);
//           localStorage.setItem("firstName", res.data?.firstName);
//           localStorage.setItem("secondName", res.data.secondName);
//           localStorage.setItem("otherName", res.data.otherName);
//           localStorage.setItem("email", res.data.email);

//           localStorage.setItem("roles", res.data.roles);
//           localStorage.setItem("phoneNumber", res.data.phoneNumber);
//           localStorage.setItem("membershipId", res.data.membershipId);

//           console.log(res.data);
//           Toast.success("Login Sucessful", {
//             position: Toast.POSITION.TOP_LEFT,
//           });
//           {
//             localStorage.getItem("isAdmin") === "true"
//               ? navigate("/Admin/true")
//               : navigate("/about");
//           }
//         } else {
//           Toast.error(res.data.error);
//         }
//       })
//       .catch((err) => {
//         // setLoading(false);
//         Toast.error("Invalid email & Password");
//       });
//   };
  

//   const headers = {
//     "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
//     "Content-Type": "application/json",
//     // Accept: "application/json",
//     // body: JSON.stringify(data),
//   };
  

//   return (
//     <div>
//         <div>
//       {/* <Navbar /> */}
//       <section className="h-100 h-custom" style={{ backgroundColor: "white" }}>
//         <div className="container py-5 h-100">
//           <div className="row d-flex justify-content-center align-items-center h-100">
//             <div className="col-lg-8 col-xl-6">
//               <div className="card rounded-3">
//                 {/* <img
//                   src={Sfc}
//                   class="w-100"
//                   style={{
//                     borderTopLeftRadius: ".3rem",
//                     borderTopRightRadius: ".3rem",
//                     height: "20vh",
//                     objectFit: "contain",
//                   }}
//                   alt="Sample photo"
//                 /> */}
//                 <div className="card-body p-4 p-md-5">
//                   <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2 d-flex justify-content-center">
//                     Login Here
//                   </h3>
//                   <p
//                     className="d-flex justify-content-center"
//                     style={{ marginLeft: "15px" }}
//                   >
//                     *pls all the blanck inputs are been required*
//                   </p>
//                   <form className="px-md-2" onSubmit={submitHandler}>
//                     <div className="form-outline mb-4">
//                       <TextField
//                         required
//                         id="outlined-required"
//                         label="Email "
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         className="input-label-input-div"
//                         //   defaultValue="Match Day"
//                       />
//                     </div>
//                     <div className="form-outline mb-4">
//                       <TextField
//                         required
//                         id="outlined-required"
//                         label="Password "
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         className="input-label-input-div"
//                         //   defaultValue="Match Day"
//                       />
//                     </div>
                 
//                      {/* <div className="form-outline mb-4">
//                       <FormControl>
//                         <InputLabel htmlFor="outlined-adornment-password">
//                           Password
//                         </InputLabel>
//                         <OutlinedInput
//                           className="input-label-input-div"
//                           id="outlined-adornment-password"
//                           value={password}
//                           onChange={(e) => setPassword(e.target.value)}
//                           type={showPassword ? "text" : "password"}
//                           endAdornment={
//                             <InputAdornment position="end">
//                               <IconButton
//                                 aria-label="toggle password visibility"
//                                 onClick={handleClickShowPassword}
//                                 onMouseDown={handleMouseDownPassword}
//                                 edge="end"
//                               >
//                                 {showPassword ? (
//                                   <VisibilityOff />
//                                 ) : (
//                                   <Visibility />
//                                 )}
//                               </IconButton>
//                             </InputAdornment >
//                           }
//                           label="Password"
//                         />
//                       </FormControl>
//                     </div>  */}

//                     {/* {loading && <CircularIndeterminate />} */}
//                     <div class="d-flex justify-content-center">
//                     <Link to="/">
//                        <button
//                         type="submit"
//                         className="btn btn-primary btn-lg mb-1 "
//                         style={{
//                           background: "#0000CD",
//                         }}
//                       >
//                         Login
//                       </button> 
//                       </Link>
//                     </div>
//                     <ToastContainer />
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* <Footer /> */}
//     </div>
//     </div>
//   )
// }

// export default LoginScreen


import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import VisibilityIcon from "@material-ui/icons/Visibility";
// import VisibilityOff from "@material-ui/icons/VisibilityOff";
// import "./Login.css";
// import CircularIndeterminate from "../Components/Progress";
// import Loading from "../components/Loading";
import Loading from "../component/Loading"
import FormContainer from "../component/FormContainer";
import { Button, Col, Form, Row, Toast } from "react-bootstrap";

// toast.configure();

const LoginScreen = () => {
  const navigate = useNavigate();
  // const redirect = location.search ? location.search.split("=")[1] : "/";
  
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [mode, setMode] = useState("password");
  const [loading, setLoading] = useState(false);
  const [message, setMeesage] = useState(false);
  const userId = localStorage.getItem("userId");
  // useEffect(() => {
  //   if (userId) {
  //     navigate("/dashboard");
  //   } else {
  //     navigate("/about");
  //   }
  // }, [navigate, userId]);

  const handleClick = () => {
    if (mode === "password") {
      setMode("text");
    } else {
      setMode("password");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      email: email,

      password: password,
    };

    const headers = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
      // Accept: "application/json",
      // body: JSON.stringify(data),
    };

    axios
      .post("https://sfcoba.herokuapp.com/api/auth/login", data, headers)
      .then((res) => {
        console.log(res.data);
        setLoading(false);

        if (res.data) {
          setEmail("");

          setPassword("");







          localStorage.setItem("token", data.token);
                    localStorage.setItem("userId", res.data._id);
                    localStorage.setItem("ProfilePic", res.data.profilePic);
                    localStorage.setItem("isAdmin", res.data.isAdmin);
                    localStorage.setItem("firstName", res.data?.firstName);
                    localStorage.setItem("secondName", res.data.secondName);
                    localStorage.setItem("otherName", res.data.otherName);
                    localStorage.setItem("email", res.data.email);
          
                    localStorage.setItem("roles", res.data.roles);
                    localStorage.setItem("phoneNumber", res.data.phoneNumber);
                    localStorage.setItem("membershipId", res.data.membershipId);
          
                    console.log(res.data);
            //         Toast.success("Login Sucessful", {
            //           position: Toast.POSITION.TOP_LEFT,
            //         });
            //         {
            //           localStorage.getItem("isAdmin") === "true"
            //             ? navigate("/Admin/true")
            //             : navigate("/about");
            //         }
            //       } else {
            //         Toast.error(res.data.error);
            //       }
            //     })
            //     .catch((err) => {
            //       setLoading(false);
            //       Toast.error("Invalid email & Password");
            //     });
            // };
            
          









          //   const items = data;
          //   localStorage.setItem("User-Info", JSON.stringify(items));

          // localStorage.setItem("token", res.data.token);

          // localStorage.setItem("name", res.data.name);
          // localStorage.setItem("userId", res.data._id);
          // localStorage.setItem("isAdmin", res.data.isAdmin);
          // localStorage.setItem("email", res.data.email);
          // localStorage.setItem("phoneNumber", res.data.phoneNumber);
          // localStorage.setItem("username", res.data.username);
          // localStorage.setItem("city", res.data.city);
          // localStorage.setItem("country", res.data.country);
          // localStorage.setItem("profilePicture", res.data.profilePicture);
          // localStorage.setItem("coverPicture", res.data.coverPicture);
          // localStorage.setItem("Verified", res.data.Verified);
          // localStorage.setItem("Followers", res.data.followers);
          // localStorage.setItem("Following", res.data.following);






          console.log(res.data);
          // toast.success("Login successful");
          navigate("/about");
        } else {
          alert("Login sucessful");
          // toast.error(res.data.error);
        }
      })
      .catch((err) => {
        setLoading(false);
        alert("invalid Email and Password or check Network");
        // toast.error("Invalid email & Password");
      });
  };
  return (
    // <div className="split">

    <FormContainer>
      <h1>Login </h1>
      {/* {Loading && <div style={{ color: "orange" }}>Loading...</div>} */}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Email  "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type={mode}
            required
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
          {/* {mode === "password" ? (
            <VisibilityIcon
              style={{
                display: "flex",
                position: "relative",
                top: "-30px",
                float: "right",
              }}
              onClick={handleClick}
            />
          ) : (
            <VisibilityOff onClick={handleClick} />
          )} */}
        </Form.Group>

        <Button type="submit" variant="primary">
          Login In
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          New User?<Link to="/signup">Signup </Link>{" "}
        </Col>
      </Row>
    </FormContainer>
    // </div>
  );
};

export default LoginScreen;