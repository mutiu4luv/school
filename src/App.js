
import './App.css';
import Homepage from './component/homepage/Homepage';
import { Route, Routes } from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import About from './screens/About';
import RegisterScreen from './screens/RegisterScreen';


function App() {
  return (
    <div className="App">
     {/* <Homepage /> */}



     <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<RegisterScreen />} />

      </Routes>


    </div>
  );
}

export default App;
