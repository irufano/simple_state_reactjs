import React, { Component }from "react";
import logo from "./logo.svg";
import "./App.css";

class Timer extends Component {

  // State hanya bisa dibuat di component class
  // supaya dinamis

  // Constructor
  constructor(props) {
    super(props)
    this.state = {
      time : props.start
    }
  }

  // Lifecycle
  componentDidMount(){
    this.addInterval = setInterval(() => this.increase(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.addInterval)
  }

  increase() {
    // update state time each seconds
    this.setState((state, props) => ({
      time : parseInt(state.time) + 1
    }))
  }

  render() {
    return (
    <div><h1>{this.state.time} Detik</h1></div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Timer start="0"/>
        </header>
        
      </div>
    );
  }
}

export default App;
