import * as React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Path = (props) => (
  <motion.path strokeWidth="2" strokeLinecap="round" {...props} />
);

function MenuToggle({ toggle }) {
  return (
    <div
      onClick={toggle}
      className="focus:outline-none w-1/3 flex justify-center"
    >
      <svg
        className="stroke-current"
        width="23"
        height="23"
        viewBox="0 0 23 23"
      >
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />

        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </div>
  );
}

MenuToggle.propTypes = {
  toggle: PropTypes.func,
};

export default MenuToggle;
