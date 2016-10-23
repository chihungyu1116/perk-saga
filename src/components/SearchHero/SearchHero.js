import React, { Component, PropTypes } from 'react';
import styles from './SearchHero.scss'; // eslint-disable-line
import { SearchHeroBox, SearchHeroSlides, CategoryInfo } from 'components';
import classNames from 'classnames';

export default class SearchHero extends Component {
  // [TODO] should get from server
  getCategoryInfoTags() {
    return [
      { url: '/tag/refer', value: 'Internal Refer' },
      { url: '/tag/interview_questions', value: 'Interview Questions' },
      { url: '/tag/job_faq', value: 'Job FAQ' },
    ];
  }

  // [TODO] should get from server
  getCategoryInfoLinks() {
    return [
      { url: '/thread', value: 'Snap chat interview questions ambicable pair?' },
      { url: '/thread', value: 'Medalia oa eng5 condition?' },
      { url: '/thread', value: 'Facebook Internal referral for 2016.' },
      { url: '/thread', value: 'Walmart Ecommerce internal hiring!' },
    ];
  }

  render() {
    return (
      <div className={styles.container}>
        <div
          className={classNames(
            'col-sm-6',
            'col-sm-offset-3',
            styles.search,
          )}
        >
          <SearchHeroBox
            onSearch={this.props.onSearch}
          />
          <CategoryInfo
            tags={this.getCategoryInfoTags()}
            links={this.getCategoryInfoLinks()}
          />
        </div>
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
