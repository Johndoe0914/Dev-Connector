import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar bg-dark">
        <h1>
          <Link to="index.html">
            <i class="fas fa-code" /> DevConnector
          </Link>
        </h1>
        <ul>
          <li>
            <Link to="/developers">Developers</Link>
          </li>
          <li>
            <Link to="register.html">Register</Link>
          </li>
          <li>
            <Link to="login.html">Login</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
