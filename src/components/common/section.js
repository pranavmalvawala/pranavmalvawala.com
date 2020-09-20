import React from "react";
import Container from "./container";
import PropTypes from "prop-types";

function Section({ children, extend = "" }) {
  return (
    <section className={`mt-10 ${extend}`}>
      <Container>{children}</Container>
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.any,
  extend: PropTypes.string,
};

export default Section;
