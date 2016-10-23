import React, { Component, PropTypes } from 'react';
import styles from './SearchHero.scss'; // eslint-disable-line
import { SearchHeroBox, SearchHeroSlides } from 'components';

export default class SearchHero extends Component {
  render() {
    return (
      <div className={styles.container}>
        <SearchHeroBox
          onSearch={this.props.onSearch}
        />
        <SearchHeroSlides
          slideImages={this.props.slideImages}
        />
      </div>
    );
  }
}

SearchHero.propTypes = {
  slideImages: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSearch: PropTypes.func.isRequired,
};
