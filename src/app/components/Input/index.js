import React from "react";
import PropTypes from "prop-types";

const Input = ({ children, ...props }) => {
  const {
    type,
    dataName,
    id,
    onClick,
    defaultChecked,
    onChange,
    placeholder,
    width
  } = props;
  return (
    <input
      type={type}
      data-name={dataName}
      defaultChecked={defaultChecked}
      id={id}
      style={{ width }}
      placeholder={placeholder}
      onChange={e => onChange(e)}
      onClick={e => {
        onClick(e);
      }}
    >
      {children}
    </input>
  );
};

Input.defaultProps = {
  type: "",
  dataName: "",
  id: "",
  defaultChecked: false,
  placeholder: "",
  width: "",
  onChange: () => {}
};

Input.propTypes = {
  type: PropTypes.string,
  dataName: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  defaultChecked: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  width: PropTypes.string
};
export default Input;
