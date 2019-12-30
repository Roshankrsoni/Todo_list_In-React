import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header style={headerStyle}>
      <h1> Todo List </h1>
      <Link style={linkStyle} to="/">
        Home{" "}
      </Link>{" "}
      |
      <Link style={linkStyle} to="/about">
        {" "}
        About
      </Link>
    </header>
  );
};
const headerStyle = {
  background: "#333",
  padding: "2px",
  textAlign: "center",
  color: "white"
};
const linkStyle = {
  color: "white",
  textDecoration: "none"
};
export default Header;
