import React from "react";

// components
import "./styles/Card.css";

// utils
import { getTotal } from "../utils";

type Props = {
  product: { price: number; image: string };
};

interface State {
  totalPrice: number;
  quantity: number;
}

class Card extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);

    this.state = {
      totalPrice: 0,
      quantity: 1,
    };
  }

  handlePlus() {
    this.setState({
      quantity: this.state.quantity + 1,
    });
  }

  handleMinus() {
    this.setState({
      quantity: this.state.quantity - 1,
    });
  }

  componentDidMount() {
    const { price } = this.props.product;
    this.setState({
      totalPrice: this.state.quantity * price,
    });
  }

  render() {
    const { price, image } = this.props.product;
    const { quantity, totalPrice } = this.state;

    return (
      <div className="card">
        <div className="card__product">
          <h3>£ {price}</h3>
          <img src={image} />
        </div>
        <div className="card__interact">
          <h3>total price: £{totalPrice}</h3>
          <h3>quantity: {quantity}</h3>
          <div className="card__buttons">
            <button>+</button>
            <button>-</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
