import React, { Component, PropTypes } from 'react';
import styles from './SearchHeroBox.scss'; // eslint-disable-line
import classNames from 'classnames';

const SEARCH_TYPES = {
  JOBS: 'jobs',
  COMPANYS: 'companies',
  SCHOOLS: 'schools',
  LOCALS: 'locals',
};

export default class SearchHeroBox extends Component {
  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
    this.state = {
      keyword: '',
      type: 'jobs',
    };
  }

  onSearch() {

  }

  render() {
    const { type } = this.state;
    let placeholder;

    switch (type) {
      case SEARCH_TYPES.JOBS:
        placeholder = 'Enter job title or keywords';
        break;
      case SEARCH_TYPES.COMPANYS:
        placeholder = 'Enter company name or keywords';
        break;
      case SEARCH_TYPES.SCHOOLS:
        placeholder = 'Enter school name or keywords';
        break;
      case SEARCH_TYPES.LOCALS:
        placeholder = 'Enter area name or keywords';
        break;
      default:
        break;
    }

    console.log('placeholder', placeholder, type, SEARCH_TYPES.JOBS);

    return (
      <div className="col-sm-6 col-sm-offset-3">
        <div className={styles.container}>
          <h3 className={styles.title}>Perk Grows With You</h3>
          <div className={styles.typesContainer}>
            <button className={classNames('btn btn-default', styles.typeBtn)}>Jobs</button>
            <button className={classNames('btn btn-default', styles.typeBtn)}>Companies</button>
            <button className={classNames('btn btn-default', styles.typeBtn)}>Schools</button>
            <button className={classNames('btn btn-default', styles.typeBtn)}>Locals</button>
          </div>
          <div className="input-group">
            <input
              type="text"
              className={classNames('form-control', 'input-lg')}
              placeholder={placeholder}
            />
            <span className="input-group-btn">
              <button className="btn btn-lg btn-warning" type="button">
                <i className="fa fa-search" aria-hidden="true" />
              </button>
            </span>
          </div>

          <div className={styles.infoContainer}>

          </div>
        </div>
      </div>
    );
  }
}

SearchHeroBox.propTypes = {
  onSearch: PropTypes.func.isRequired
};
