import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserMenu from "./UserMenu";
import faviconyay from "../../img/logo.png";
import placeholder from "../../img/beer.png";
import { css } from "emotion";

export default class Header extends Component {
  render() {
    const { onLogOut, onSignInClick, username } = this.props;
    return (
      <div
        className="topnav"
        style={{
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <div>
          <Link to="/">
            {" "}
            <img src={faviconyay} alt="Home" style={{height : '1.49rem'}} />{" "}
          </Link>
          <Link to="/resources">
            resources
          </Link>
        </div>
        {username && <UserMenu username={username} onLogOut={onLogOut} />}
        {!username && (
          <div className="signin" onClick={onSignInClick}>
            <span>Log In / Sign Up</span>
          </div>
        )}
      </div>
    );
  }
}
