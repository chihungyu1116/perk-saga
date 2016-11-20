import React, { Component } from 'react';
import { SearchHero, SignUpModule } from 'components';
import { connect } from 'react-redux';
import styles from './HomePage.scss'; // eslint-disable-line

const SLIDE1 = require('../../../static/images/hero_slide-1.jpg');
const SLIDE2 = require('../../../static/images/hero_slide-2.jpg');
const SLIDE_IMAGE = [
  SLIDE1,
  SLIDE2,
];

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(keyword) {
    console.log('onSearch', keyword);
  }

  render() {
    return (
      <div>
        <section>
          <SearchHero
            slideImages={SLIDE_IMAGE}
            onSearch={this.onSearch}
          />
        </section>
        <section>
          <SignUpModule />
        </section>
      </div>
      );
  }
}

HomePage.propTypes = {};

export default connect()(HomePage);
