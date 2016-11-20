import React, { Component, PropTypes } from 'react';

const BUTTON_IMAGE_DEFAULT = require('../../../../static/images/linkedin/signin_default.png');
const BUTTON_IMAGE_HOVER = require('../../../../static/images/linkedin/signin_hover.png');

export default class LinkedInLoginButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: BUTTON_IMAGE_DEFAULT
    };
    this.onClick = this.onClick.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onClick() {
    window.IN.User.authorize((res) => {
      console.log('res', res);
    }, window);
  }

  onMouseEnter() {
    this.setState({
      src: BUTTON_IMAGE_HOVER,
    });
  }

  onMouseLeave() {
    this.setState({
      src: BUTTON_IMAGE_DEFAULT,
    });
  }

  render() {
    return (
      <div>
        <img
          {...this.props}
          src={this.state.src}
          onClick={this.onClick}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          alt="Linkedin Signin"
        />
      </div>
    );
  }
}

LinkedInLoginButton.propTypes = {
  classNames: PropTypes.string,
};
