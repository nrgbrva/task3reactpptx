import React, { Component } from "react";
class Email extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.email}</h1>
      </div>
    );
  }
}
export default Email;
