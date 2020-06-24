import React, { Component } from 'react';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class ProductLabel extends Component {
  render() {
    return (
      <label htmlFor={this.props.itemHash} className="feature__label">
        {this.props.item.name} ({USCurrencyFormat.format(this.props.item.cost)})
      </label>
    )
  }
}

export default ProductLabel;