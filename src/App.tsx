import React from "react";

// components
import Card from "./components/Card";

// utils
import { getTotal } from "./utils";

interface State {
  totalPrice: number;
  quantity: number;
}

class App extends React.Component<{}, State> {
  render() {
    this.state = {
      totalPrice: 0,
      quantity: 0,
    };
    const { totalPrice, quantity } = this.state;

    return (
      <div className="app">
        <Card totalPrice={totalPrice} quantity={quantity} />
      </div>
    );
  }
}

export default App;
