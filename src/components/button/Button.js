import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
  }

  click() {
    const { callback } = this.props;
    callback();
  }

  render() {

    return (
      <input className="Button" type='button' onClick={this.click} value="🔎"></input>
    );

  }

}

export default Button;
