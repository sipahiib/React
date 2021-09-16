//rfc Enter yaparak aşağıdakini yazabiliriz.

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div>
      <h3>{props.gonder}</h3>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add">Add User</Link>
        </li>
        <li>
          <Link to="/github">Project Files</Link>
        </li>
      </ul>
    </div>
  );
}

Navbar.propTypes = {
  gonder: PropTypes.string.isRequired, //Navbar içinde artık title gönderilmek zorunda ve string olmalı
};
Navbar.defaultProps = {
  gonder: "Default App Prop",
};

export default Navbar;
