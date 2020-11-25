import React from "react";

// components

type Props = {
  totalPrice: number;
  quantity: number;
};

class Card extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <p>total price:{this.props.totalPrice}</p>
        <p>quantity:{this.props.quantity}</p>
      </div>
    );
  }
}

export default Card;
