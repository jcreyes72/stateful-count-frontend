import React from 'react'
import './Counter.css'
import axios from 'axios';

export default class Counter extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
        currentCount: 0,
        everyState: []
    }
  } 

  componentDidMount = () => {
    this.getCurrentState();
  };
  
  getCurrentState = () => {
    axios.get('http://localhost:8080/')
      .then((response) => {
        const data = response.data;
        this.setState({everyState: data})
        console.log("Got the data: ");
      })
      .catch(() => {
        alert('Error retrieving data');
      });
  }



  submit = (plusOrMinus) => {

    var payload;

    // Our payload is determined by which button is pressed
    if (plusOrMinus === "plus"){
      payload = {
        currentCount: this.state.currentCount+1
      };
    }
    else {
      payload = {
        currentCount: this.state.currentCount-1
      };
    }

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


  increment = () => {
    const plusOrMinus = "plus"
    this.setState({
      currentCount: this.state.currentCount + 1
    });
    this.submit(plusOrMinus);
  }

  decrement = () => {
    const plusOrMinus = "minus"
    this.setState({
      currentCount: this.state.currentCount - 1
    });
    this.submit(plusOrMinus);
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
