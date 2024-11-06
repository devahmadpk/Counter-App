import React, {useState} from 'react';
import './app.css';
import Counter from './components/Counter';
import Buttons from './components/Buttons';

function App() {

  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const decrement = () => {
    
    if (count > 0) {
      setCount(count - 1);
    }

    else {
      alert(`Cannot decrement further. Count already equals zero!`);
    }
  }

  const reset = () => {
    setCount(0);
  }

  return (
    <div className="app">
      <div className='count-div'>
      <Counter count = {count}/>
      </div>

      <div className='button-div'>
      <Buttons increment = {increment} decrement = {decrement} reset = {reset}/>
      </div>
      
      
      
    </div>
  )
}

export default App;
