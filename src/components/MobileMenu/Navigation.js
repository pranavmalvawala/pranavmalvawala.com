import React from "react";
import MenuItem from "./MenuItem";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const menuvariants = {
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
};

const navvariants = {
  open: {
    transition: { staggerChildren: 0.15, delayChildren: 0.25 },
  },
  closed: {},
};

function Navigation({ links, isOpen }) {
  return (
    <div
      className={`fixed top-0 bottom-16 inset-x-0 z-10 ${
        isOpen ? "" : "pointer-events-none"
      }`}
    >
      <motion.div
        className="relative flex flex-col items-center justify-center w-full h-full p-4 bg-neutral-100 dark:bg-neutral-700"
        variants={menuvariants}
      >
        <motion.nav
          className={`flex flex-col justify-center items-center ${
            isOpen ? "" : "pointer-events-none"
          }`}
          variants={navvariants}
        >
          {links.map((link) => (
            <MenuItem key={link.title} to={link.route} title={link.title} />
          ))}
        </motion.nav>
      </motion.div>
    </div>
  );
}

Navigation.propTypes = {
  links: PropTypes.array,
  isOpen: PropTypes.bool,
};

export default Navigation;
