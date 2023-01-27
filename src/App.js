
import './App.css';
import Homepage from './component/homepage/Homepage';
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
     {/* <Homepage /> */}

     <Routes>
        <Route path="/" element={<Homepage />} />

      </Routes>


    </div>
  );
}

export default App;
