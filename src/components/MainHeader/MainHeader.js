import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './MainHeader.scss'; // eslint-disable-line
import classNames from 'classnames';

export default class MainHeader extends Component {
  render() {
    return (
      <header className={styles.headerContainer}>
        <section className={classNames(styles.header, 'clearfix')}>
          <div className={classNames(styles.brand, 'pull-left')}>
            <Link to="/">Perk</Link>
          </div>
          <div className="pull-right">
            <div className={styles.headerBtns}>
              <div className={styles.headerBtn}>
                <span>Post a Job</span>
              </div>
              <div className={styles.headerBtn}>
                <i className="fa fa-search" aria-hidden="true"></i>
              </div>
              <div className={styles.headerBtn}>
                <i className="fa fa-bell-o" aria-hidden="true"></i>
              </div>
              <div className={styles.headerBtn}>
                <i className="fa fa-user" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </section>
        <nav className={styles.metabar}>
          <div className={styles.metabarBtn}>
            <Link to="/">Jobs</Link>
          </div>
          <div className={styles.metabarBtn}>
            <Link to="/company">Companies</Link>
          </div>
          <div className={styles.metabarBtn}>
            <Link to="/company">Schools</Link>
          </div>
          <div className={styles.metabarBtn}>
            <Link to="/company">Locals</Link>
          </div>
        </nav>
      </header>
    );
  }
}

MainHeader.propTypes = {
  isLogin: PropTypes.bool.isRequired,
};
