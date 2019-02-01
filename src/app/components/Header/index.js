import React from "react";
import PropTypes from "prop-types";

const Header = ({ children, ...props }) => {
  return <header style={props}> {children} </header>;
};

Header.defaultProps = {
  alignItems: "center",
  backgroundColor: "#282c34",
  color: "white",
  display: "flex",
  fontSize: "calc(10px + 2vmin)",
  flexDirection: "column",
  justifyContent: "center"
};
Header.propTypes = {
  alignItems: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  display: PropTypes.string,
  fontSize: PropTypes.string,
  flexDirection: PropTypes.string,
  justifyContent: PropTypes.string
};

export default Header;
