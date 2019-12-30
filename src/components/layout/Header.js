import React, { Component } from "react";

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1> Todo List </h1>
    </header>
  );
};
const headerStyle = {
  background: "#333",
  padding: "2px",
  textAlign: "center",
  color: "white"
};
export default Header;
