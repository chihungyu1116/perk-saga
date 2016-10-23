import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './HomePage.scss'; // eslint-disable-line
import { SearchHero } from 'components';

const SLIDE_IMAGE = [
  'images/hero_slide.jpg',
  'images/hero_slide-1.jpg',
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
          <h3 className={'text-center'}>Are you paied fairly?</h3>
          <p>Know your worth and finding your dream job faster by our internal referral program.</p>
        </section>
        <section className={styles.signup}>
          <h3 className={'text-center'}>Sign up today for Perk. It is free and anonymous.</h3>
          <div className={'row'}>
            <div className="col-md-6">
              <div>
                <i className="fa fa-check-circle" aria-hidden="true" />
                <span>Find a job your love. Search for internal referrer.</span>
              </div>
              <div>
                <i className="fa fa-check-circle" aria-hidden="true" />
                <span>Get information directly from your referrer.</span>
              </div>
              <div>
                <i className="fa fa-check-circle" aria-hidden="true" />
                <span>Know your potential package of your dream companies</span>
              </div>
            </div>
            <div className="col-md-6">
              [!!!]social login and signup module
            </div>
          </div>
        </section>
      </div>
      );
  }
}

HomePage.propTypes = {};

export default connect()(HomePage);
