import React, { Component } from 'react';
import { Link } from 'react-router';

class Body extends Component {
  render() {
    return (
      <div className="Body">
        <div id="sideBar">
          <div id="accountTabs">
            <Link to="/employee" style={{ textDecoration: 'none', color: '#ffe4b3'}}>
              <div className="menuItems accountTab">
                <span className="tabText">Employee</span>
              </div>
            </Link>
            <Link to="/supervisor" style={{ textDecoration: 'none', color: '#ffe4b3'}}>
              <div className="menuItems accountTab">
                <span className="tabText">Supervisor</span>
              </div>
            </Link>
            <Link to="/quality" style={{ textDecoration: 'none', color: '#ffe4b3'}}>
              <div className="menuItems accountTab">
                <span className="tabText">Quality</span>
              </div>
            </Link>
            <Link to="/director" style={{ textDecoration: 'none', color: '#ffe4b3'}}>
              <div className="menuItems accountTab">
                <span className="tabText">Director</span>
              </div>
            </Link>
          </div>
          <Link to="/dashboard" style={{ textDecoration: 'none', color: '#e69500', backgroundColor:'#ffedcc' }}>
            <div id="dashButton">
              <span className="fa fa-asterisk" aria-hidden="true"></span>
            </div>
          </Link>
        </div>
        <div id="appWindow">
            {this.props.children}
        </div>
      </div>
    );
  }
}

export default Body;