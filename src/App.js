
import './App.css';
import { useState } from 'react';

function App() {

 const [counter, setCounter]= useState(0);
 
 const increment=(data)=>{
  setCounter(counter+data);
 }
 const decrement=(data)=>{
   setCounter(counter-data)
 }


  return (
    <div className="App">
      <div className='counter'>
        <p>The Value Of Counter Is {counter}</p>
        <button onClick={()=> increment(10)}>Increment by 10 </button>
        <button onClick={()=> increment(50)}>Increment by 50 </button>
        <button onClick={()=> decrement(50)}>Decrement by 50 </button>
          
      </div>
    </div>
  );
}

export default App;
