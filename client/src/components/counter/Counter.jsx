import React from 'react'
import './Counter.css'
import axios from 'axios';

export default class Counter extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
        currentCount: 0
    }
  } 

  // Here I have two separate submit functions, which depend on whether the "increment" or "decrement" button
  // has been pressed. The reason is because I need to keep track of what the count is AFTER the button has
  // been pressed. So if the count is 0, and decrement gets pressed, we need to store -1. But if the 
  // count is 0, and increment is pressed, we need to store 1. The only difference between these
  // two functions is the payload. One sets currentCount to the state minus 1, the other plus 1. This is a
  // pretty inefficient way to handle this, and it could probably be done using a single function, but I
  // dont know how at the moment, so I did this.
  incrementSubmit = (event) => {

    const payload = {
      currentCount: this.state.currentCount+1
    };

    axios({
      url: 'http://localhost:8080',
      method: 'POST',
      data: payload
    })

    .then(() => {
      console.log('Data has been sent to the server')
    })
    .catch(() => {
      console.log('Internal Server Error')
    })

  };

  decrementSubmit = (event) => {

    const payload = {
      currentCount: this.state.currentCount-1
    };

    axios({
      url: 'http://localhost:8080',
      method: 'POST',
      data: payload
    })

    .then(() => {
      console.log('Data has been sent to the server')
    })
    .catch(() => {
      console.log('Internal Server Error')
    })

  };

  increment = (event) => {
    event.preventDefault();
    var clickedId = event.target.id;
    console.log(clickedId);
    this.setState({
      currentCount: this.state.currentCount + 1
    });
    this.incrementSubmit(clickedId);
  }

  decrement = () => {
    this.setState({
      currentCount: this.state.currentCount - 1
    });
    this.decrementSubmit();
  }


  render(){

    return (
    <div>
      <div className="grid-container">
          <div className="grid-item-title">
            <h1 className="title">A Stateful Counter</h1>
          </div>
          <div className="grid-item grid-item-1">
              <button className="button" onClick={this.increment}>Increment</button>
          </div>
          <div className="grid-item grid-item-2">
              <span className="number">{this.state.currentCount}</span>
          </div>
          <div className="grid-item grid-item-3">
              <button className="button" onClick={this.decrement}>Decrement</button>
          </div>
      </div>
    </div> 
    )
    }
  }
