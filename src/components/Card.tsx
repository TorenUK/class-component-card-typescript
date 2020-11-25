import React from "react";

// components
import "./styles/Card.css";

type Props = {
  totalPrice: number;
  quantity: number;
  product: Array<{ price: number; image: string }>;
};

class Card extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const product = this.props.product;

    return (
      <div className="card">
        {product.map((product) => (
          <div className="card__product">
            <h3>£{product.price}</h3>
            <img src={product.image} />
          </div>
        ))}
        <div className="card__interact">
          <p>total price:{this.props.totalPrice}</p>
          <p>quantity:{this.props.quantity}</p>
        </div>
      </div>
    );
  }
}

export default Card;
