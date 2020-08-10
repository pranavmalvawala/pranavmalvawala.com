import React from "react";
import PropTypes from "prop-types";

function Container({ children }) {
  return <div className="max-w-4xl mx-auto px-6 md:px-8">{children}</div>;
}

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
