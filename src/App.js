// import react from 'react';
import './App.css';

import Sidebar from './Components/Sidebar';
import ImageGrid from './Components/ImageGrid';
import  './ComponentsCss/Sidebar.css'
import "./ComponentsCss/Button.css"
import TheGrid from './Components/TheGrid';
import './ComponentsCss/TheGrid.css';


function App() {

  
  return (
  
     <div className="App">
    
        <div className="homepage">
        <Sidebar />
        <ImageGrid />
        
        </div>
        <TheGrid />

        
        
     
       
   </div>
   
  );
}

export default App;
