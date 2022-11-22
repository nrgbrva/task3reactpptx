import React, { Component } from "react";
import Name from "./Name";
import Address from "./Address";
import Personal from "./Persnal";
import Email from "./Email";
class Profile extends Component {
  render() {
    return (
      <div>
        <h1>Student</h1>
        <p>
          <Name name="aydan" />
        </p>
        <p>
          <Email email="aydan2003@aa.com" />
        </p>
        <p>
          <Address adr="baku" />
        </p>
        <p>
          <Personal personal="telebe" />
        </p>
      </div>
    );
  }
}
export default Profile;
