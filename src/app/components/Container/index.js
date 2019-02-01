import React from "react";
import PropTypes from "prop-types";

const Container = ({ children, ...props }) => {
  const { fontFamily, textAlign, float, margin, width } = props;
  return (
    <div style={{ fontFamily, textAlign, float, margin, width }}>
      {children}
    </div>
  );
};

Container.defaultProps = {
  fontFamily: "Roboto",
  textAlign: "",
  float: "",
  margin: "",
  width: ""
};
Container.propTypes = {
  fontFamily: PropTypes.string,
  textAlign: PropTypes.string,
  float: PropTypes.string,
  margin: PropTypes.string,
  width: PropTypes.string
};

export default Container;
