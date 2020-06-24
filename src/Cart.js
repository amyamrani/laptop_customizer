import React, { Component } from 'react';
import CartItem from './CartItem';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class Cart extends Component {
  total = () => Object.keys(this.props.selected).reduce(
    (acc, curr) => acc + this.props.selected[curr].cost,
    0
  );

  summary = () => Object.keys(this.props.selected).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const selectedOption = this.props.selected[feature];

    return (
      <CartItem 
        key={featureHash}
        feature={feature}
        selectedOption={selectedOption}
      />
    );
  });
  
  
  render() {
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {this.summary()}
        <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <div className="summary__total__value">
            {USCurrencyFormat.format(this.total())}
          </div>
        </div>
      </section>
    )
  }
}

export default Cart;