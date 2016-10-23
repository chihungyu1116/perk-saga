import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import styles from './SignUpModule.scss'; // eslint-disable-line

class SignUpCall extends Component {
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
          <div className={classNames('col-sm-6', styles.signUpList)}>
            <SignUpCall>
              <span>Find a job your love. Search for internal referrer.</span>
            </SignUpCall>
            <SignUpCall>
              <span>Get information directly from your referrer.</span>
            </SignUpCall>
            <SignUpCall>
              <span>Know your potential package of your dream companies</span>
            </SignUpCall>
          </div>
          <div className="col-sm-6">
            Linkedin Login and Signup goes here
          </div>
        </div>
      </div>
    );
  }
}

SignUpModule.propTypes = {};

export default connect()(SignUpModule);
