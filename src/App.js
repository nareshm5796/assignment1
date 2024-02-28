import './App.css';
import React, { Component, useState } from 'react';

function App() {
  return (
    <div className="App">
      <HelloWorld/> 
    </div>
  );
}


// Creating Hello world Component here.........

function HelloWorld(){
  return(
    <div className='card'>
    <h1>Hello, World!</h1>
    <Counter/>
    </div>
  );
};

// Writing Counter Component ............

function Counter(){
  const [count, setCount] = useState(0);
  
  // {increment functionalty}
  const increment = () => {
    setCount(count + 1);
  };

  // {decrement functionalty}
  const decrement = () => {
    if (count>0){
      setCount(count - 1);
    }
    else{
      alert("Please Add Item...")
    }
    
  };

  return(
    <div className='counter-div'>
      <button onClick={decrement}>-</button>
      <input type='text ' value={count}/>
      <button onClick={increment}>+</button>
    </div>
  );
};


export default App;
