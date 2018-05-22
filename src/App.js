import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



function Text(props) {
  const style = {
    color: props.color,
  };
  return <h1> Hello, <span style={style}>{props.value}</span></h1>
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Text color="red" value="Ashton"/>
      </div>
    );
  }
}

export default App;
