import React,{useState} from 'react';
import './Aditya.css';
function App()
{

const[MyCar,ChangeMyCar]=useState("BMW");


const ChangeInput=(event)=>
{
  ChangeMyCar(event.target.value);
}

  return(

<div className="main_body">
  <h1> {MyCar}</h1>
  <input 
  
  type="radio"
  
 value="male"
 name="mayur"
  onChange={ChangeInput}
  
  >
  
  </input>Male


  <input 
  
  type="radio"
  
 value="Female"
 name="swati"
  onChange={ChangeInput}
  
  >
  
  </input>Female

  

</div>

  );
}

export default App;