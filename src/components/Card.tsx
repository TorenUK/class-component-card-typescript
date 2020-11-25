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
  constructor(props: Props) {
    super(props);

    this.state = {
      totalPrice: 0,
      quantity: 1,
    };
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
            <button
              onClick={(event: any) => {
                getTotal(quantity, price);
              }}
            >
              +
            </button>
            <button
              onClick={(event: any) => {
                getTotal(quantity, price);
              }}
            >
              -
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
