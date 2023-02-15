import React from 'react';
import "./App.css"
import CounterApp from "./Components/CounterApp";



class App extends React.Component {
    styles= {
        color: "teal",
        fontStyle: "bold"
    };
  render() {
    
    return (
      <div className="App">
        <h2 style={this.styles}>Simple Counter App</h2>
        <CounterApp/>
        
      </div>
    )
  }
}

export default App;

