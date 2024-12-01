import './App.css';
import Navbar from './Navbar';
// import AboutUs from './AboutUs';
import Input from './Input';
import { useState } from 'react';
 
// import { BrowserRouter as Router, 
//   Route,                                         // change page data without reload    instant
//   Routes
//  } from "react-router-dom";

function App() {
  const [mode , setmodes] = useState('light');
  const [txtmode , settextmode] = useState('dark');
  
  const togglemode = ()=>{
      if(mode === 'light'){
        setmodes('dark');
        document.body.style.backgroundColor=" #430653";
        document.body.style.color = "white";
      }else{
        setmodes('light');
        document.body.style.backgroundColor=" white";
        document.body.style.color = 'black';
      }
      if(txtmode === 'light'){
        settextmode('dark');
      }else{
        settextmode('light');
      }
  }

  return (
    <div className="App">
      <Navbar title="Text Optimization" mode={mode} txtmode={txtmode} togglemode={togglemode}/>
      <Input />
    {/* <Router>
      <Navbar title="Text Optimization"/>
        <Routes>
          <Route path="/AboutUs" element={<AboutUs />}/>  

          <Route path="/" element={<Input />}/>
     
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
