import React from "react";

// components
import "./App.css";
import Card from "./components/Card";

// utils

// other
import image from "./images/nike-trainers.jpg";

interface State {
  product: { price: number; image: string };
}

class App extends React.Component<{}, State> {
  render() {
    this.state = {
      product: {
        price: 500,
        image:
          "https://static.highsnobiety.com/thumbor/VbyAvn9l8mFcDAMIs905HxgsJeo=/1600x1067/static.highsnobiety.com/wp-content/uploads/2019/09/09113208/nike-sacai-ldwaffle-main1.jpg",
      },
    };
    const { product } = this.state;

    return (
      <div className="app">
        <Card product={product} />
      </div>
    );
  }
}

export default App;
