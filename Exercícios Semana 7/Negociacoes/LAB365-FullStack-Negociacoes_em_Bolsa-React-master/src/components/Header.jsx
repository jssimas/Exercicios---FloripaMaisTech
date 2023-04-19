import React from "react";
import PropTypes from "prop-types";

export const Header = (props) => {
  return (
    <h3 className="text-center py-3 bg-primary text-light">{props.titulo}</h3>
  );
};

Header.propTypes = {
  titulo: PropTypes.string.isRequired,
};
