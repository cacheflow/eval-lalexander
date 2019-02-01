import React from "react";
import PropTypes from "prop-types";
import ListItem from "./ListItem";

const Lists = ({ children, data = [], ...props }) => {
  const { tag } = props;
  const styleProps = Object.keys(props)
    .filter(k => k !== "tag")
    .reduce((acc, curr) => {
      acc[curr] = props[curr];
      return acc;
    }, {});
  const ListItems = data.map((d, i) => {
    return <ListItem key={i}>{d}</ListItem>;
  });
  return tag === "ul" ? (
    <ul style={styleProps}>{ListItems}</ul>
  ) : (
    <ol style={styleProps}>{ListItems}</ol>
  );
};

Lists.defaultProps = {
  textAlign: "",
  listStyle: "",
  fontSize: "",
  margin: "",
  float: "",
  width: "",
  tag: "ul",
  display: "flex",
  flexDirection: "",
  alignItems: "baseline",
  justifyContent: ""
};

Lists.propTypes = {
  textAlign: PropTypes.string,
  listStyle: PropTypes.string,
  fontSize: PropTypes.string,
  margin: PropTypes.string,
  float: PropTypes.string,
  width: PropTypes.string,
  tag: PropTypes.string,
  flexDirection: PropTypes.string,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string
};

export default Lists;
