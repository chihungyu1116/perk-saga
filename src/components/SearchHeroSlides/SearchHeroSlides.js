import React, { Component, PropTypes } from 'react';
import styles from './SearchHeroSlides.scss'; // eslint-disable-line

export default class SearchHeroSlides extends Component {
  render() {
    return (
      <div>
        <img
          className={styles.bkgnd}
          src={this.props.slideImages[1]}
          role="presentation"
        />
      </div>
    );
  }
}

SearchHeroSlides.propTypes = {
  slideImages: PropTypes.arrayOf(PropTypes.string).isRequired
};
