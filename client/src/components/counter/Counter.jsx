import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {

  state = {
    number: '',
  };

  const [count, setCount] = useState(0);

  return (
  <div>
    <div className="grid-container">
        <div className="grid-item-title">
          <h1 className="title">A Stateful Counter</h1>
        </div>
        <div className="grid-item grid-item-1">
            <button className="button" onClick={() => setCount(count + 1)}>Increment</button>
        </div>
        <div className="grid-item grid-item-2">
            <span className="number">{this.state.number}</span>
        </div>
        <div className="grid-item grid-item-3">
            <button className="button" onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    </div>
  </div>

  )
}

export default Counter