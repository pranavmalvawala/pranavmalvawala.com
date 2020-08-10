import React from "react";
import PropTypes from "prop-types";

function Button({ text, icon, to, extend }) {
  return (
    <a
      href={to}
      className={`inline-flex items-center justify-center py-3 px-6 rounded-lg font-bold text-xl text-white h-full ${extend} `}
    >
      <div className={icon ? `mr-2 h-6 w-6` : ""}>{icon}</div>
      {text}
    </a>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.element,
  to: PropTypes.string,
  extend: PropTypes.string,
};

export default Button;
