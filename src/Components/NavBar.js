import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
        <div className="NavBar">
          <div id="dashBtn">
          </div>
        <div className="doMenu">
          <div className="uDoButton">Get Account</div>
          <div className="uDoButton">Submit VR</div>
        </div>
      </div>
    );
  }
}

export default NavBar;