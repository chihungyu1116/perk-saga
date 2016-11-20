import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import styles from './SignUpModule.scss'; // eslint-disable-line
import LinkedInLoginButton from '../LinkedIn/buttons/LoginButton.js';

class SignUpCTA extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  }

  render() {
    return (
      <div
        className={classNames(
          'col-sm-offset-3',
          'col-sm-9',
          styles.signUpItem,
        )}
      >
        <i
          className={classNames(
            'fa',
            'fa-check-circle',
            styles.signUpIcon,
          )}
          aria-hidden="true"
        />
        {this.props.children}
      </div>
    );
  }
}

class SignUpModule extends Component {
  render() {
    return (
      <div>
        <h3 className={'text-center'}>Sign up today for Ganhoo. It is free and anonymous.</h3>
        <div className={'row'}>
          <div className={classNames('col-sm-6', styles.signUpCTA)}>
            <SignUpCTA>
              <span>Find a job your love. Search for internal referrer.</span>
            </SignUpCTA>
            <SignUpCTA>
              <span>Get information directly from your referrer.</span>
            </SignUpCTA>
            <SignUpCTA>
              <span>Know your potential package of your dream companies</span>
            </SignUpCTA>
          </div>
          <div className="col-sm-6">
            <div className={classNames(styles.signUpButtons)}>
              <LinkedInLoginButton />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SignUpModule.propTypes = {};

export default connect()(SignUpModule);
