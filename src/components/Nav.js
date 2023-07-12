import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "./money-on-piggy-bank-.png";

function Nav() {
  return (
    <header>
      <nav>
        <ul>
          <li className="logo">
            <Link to="/">
              <img src={logo} alt="Budget App" width={"75px"} height={"75px"} />
            </Link>
          </li>

          <li className="index">
            <Link to="/transactions">
              <button>Transactions</button>
            </Link>
          </li>

          <li className="new-form">
            <Link to="/transactions/new">
              <button>New Transaction</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
