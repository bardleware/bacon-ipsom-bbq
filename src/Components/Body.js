import React, { Component } from 'react';
import { Link } from 'react-router';

class Body extends Component {
  render() {
    return (
      <div className="Body">
        <div id="sideBar">
          <Link to="/dashboard">
            <div id="dashButton">
              <span className="fa fa-asterisk" aria-hidden="true"></span>
            </div>
          </Link>
          <div id="accountTabs">
            <Link to="/designer">
              <div className="accountTab">
                <span className="tabText">Designer AR</span>
              </div>
            </Link>
            <Link to="/supervisor">
              <div className="accountTab">
                <span className="tabText">Supervisor</span>
              </div>
            </Link>
            <Link to="/quality">
              <div className="accountTab">
                <span className="tabText">QA</span>
              </div>
            </Link>
            <Link to="/director">
              <div className="accountTab">
                <span className="tabText">Director</span>
              </div>
            </Link>
          </div>
          <div id="toolBox">
            <div id="leaderboard"></div>
            <div id="files"></div>
          </div>
        </div>
        <div id="appWindow">
            {this.props.children}
        </div>
      </div>
    );
  }
}

export default Body;