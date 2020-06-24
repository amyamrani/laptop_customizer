import React, { Component } from 'react';

class ProductCategory extends Component {
  render() {
    return (
      <fieldset className="feature">
        <legend className="feature__name">
          <h3>{this.props.feature}</h3>
        </legend>
        {this.props.options}
      </fieldset>
    )
  }
}

export default ProductCategory;