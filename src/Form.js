import React, { Component } from 'react';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';
import ProductOption from './ProductOption';
import ProductCategory from './ProductCategory';

class Form extends Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = this.props.features[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        
        return (
          <ProductOption 
            key={itemHash}
            itemHash={itemHash}
            feature={feature}
            item={item}
            selected={this.props.selected}
            updateFeature={this.props.updateFeature}
          />
        );
      });

      return (
        <ProductCategory
          key={featureHash}
          feature={feature}
          options={options}
        />
      );
    });

    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
    )
  }
}

export default Form;