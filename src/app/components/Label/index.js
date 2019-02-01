import React from "react";
import PropTypes from "prop-types";

const Label = ({ children, ...props }) => {
  const { type, dataName, id, htmlFor, onClick } = props;
  return (
    <label
      htmlFor={htmlFor}
      onClick={e => {
        e.preventDefault();
        onClick(e);
      }}
      style={{ type, dataName, id }}
    >
      {children}
    </label>
  );
};

Label.defaultProps = {
  htmlFor: "",
  cursor: "pointer",
  display: "inline-block",
  margin: "0 auto",
  width: "35%"
};

Label.propTypes = {
  htmlFor: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  cursor: PropTypes.string,
  display: PropTypes.string,
  margin: PropTypes.string,
  width: PropTypes.string
};
export default Label;
