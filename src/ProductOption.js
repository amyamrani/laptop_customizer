import React, { Component } from 'react';
import ProductLabel from './ProductLabel';
import slugify from 'slugify';

class ProductOption extends Component {
  render() {
    return (
      <div className="feature__item">
        <input
          type="radio"
          id={this.props.itemHash}
          className="feature__option"
          name={slugify(this.props.feature)}
          checked={this.props.item.name === this.props.selected[this.props.feature].name}
          onChange={e => this.props.updateFeature(this.props.feature, this.props.item)}
        />
        
        <ProductLabel
          itemHash={this.props.itemHash}
          item={this.props.item}
        />
      </div>
    )
  }
}

export default ProductOption;