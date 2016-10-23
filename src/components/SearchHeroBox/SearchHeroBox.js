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
    this.onTabClick = this.onTabClick.bind(this);
    this.state = {
      keyword: '',
      searchType: 'jobs',
    };
  }

  onSearch() {

  }

  onTabClick(searchType) {
    this.setState({ searchType });
  }

  render() {
    const { searchType } = this.state;
    let placeholder;

    switch (searchType) {
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

    return (
      <div className={styles.container}>
        <h3 className={styles.title}>Ganhoo Grows With You</h3>
        <div className={styles.tabContainer}>
          <ul className="nav nav-pills">
            {
              Object.keys(SEARCH_TYPES).map((key, index) => {
                const tabValue = SEARCH_TYPES[key];
                const isActive = tabValue === searchType;

                return (
                  <li
                    key={index}
                    role="presentation"
                    onClick={() => this.onTabClick(tabValue)}
                    className={
                      classNames({
                        active: isActive,
                        [styles.tab]: true,
                      })
                    }
                  >
                    <a href="#">{tabValue}</a>
                  </li>
                );
              })
            }
          </ul>
        </div>
        <form className="input-group">
          <input type="hidden" name="searchType" />
          <input
            name="searchValue"
            type="text"
            className="form-control input-lg"
            placeholder={placeholder}
          />
          <span className="input-group-btn">
            <button className="btn btn-lg btn-warning" type="button">
              <i className="fa fa-search" aria-hidden="true" />
            </button>
          </span>
        </form>
      </div>
    );
  }
}

SearchHeroBox.propTypes = {
  onSearch: PropTypes.func.isRequired
};
