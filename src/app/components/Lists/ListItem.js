import React from "react";
import PropTypes from "prop-types";

const ListItem = ({ children, ...props }) => {
  const { display, justifyContent } = props;
  return <li style={{ display, justifyContent }}>{children}</li>;
};

ListItem.defaultProps = {
  display: "list-item",
  justifyContent: "center"
};

ListItem.propTypes = {
  display: PropTypes.string,
  justifyContent: PropTypes.string
};

export default ListItem;
