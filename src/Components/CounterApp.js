import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleReset = () => {
    this.setState({ count: 0 });
  };

  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 5 }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 5 }));
  };

  render() {
    return (
      
        <div className="card">
          
          <div className="counter-container">
            <p className="counter">Counter: {this.state.count}</p>
            <div className = "btns">
              <button onClick={this.handleReset}>
                Reset
              </button>
              <button onClick={this.handleIncrement}>
                Increment
              </button>
              <button onClick={this.handleDecrement}>
                Decrement</button>
            </div>
          </div>
        </div>
      
    );
  }
}

export default Counter;
