import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import Alert from './component/Alert';
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('dark');
  const[alert,setAlert]=useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    

  }
 

  const toggleMode =(cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if ( mode ==='light') {
      setMode('dark');
      document.body.style.backgroundColor ='#4357ab';
      showAlert("Dark mode has been enabled","success")
      document.title = 'texxtutills - Dark Mode';
 
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Dark mode has been enabled","success")
      document.title = 'texxtutills - light Mode';
    }
  }
  return (
    <> 
    <Router> 
     
     <Navbar title="texxtutils" mode={mode}  toggleMode={toggleMode}/>
     <Alert alert="this is alert"/>
     <div className="container my-8">
     <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Textform showAlert={showAlert} heading="Try texttutils-correct and uppercase,lowercase" mode={mode} />} />
        </Routes>
      </div>
    </Router> 
    </>
    );
}

export default App;




 








