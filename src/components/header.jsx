import React from "react";
import {NavLink} from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      value: ""
    };
  }

  render() {
    return (
      <div>
      <h1>App name</h1>
      <NavLink to="/" activeClassName="is-active" exact>App</NavLink>
      <NavLink to="/Add" activeClassName="is-active">Add</NavLink>
      </div>
      
    );
  }
}

export default Header;
