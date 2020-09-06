import React from "react";
import { Link } from "gatsby";
import netlify from "../../../content/assets/netlify.png";
import github from "../../../content/assets/github.png";
import gatsby from "../../../content/assets/gatsby.png";

const Footer = () => {
  return (
    <footer className="block text-center mb-20 max-w-3xl mx-auto sm:flex w-full px-6 justify-between items-center">
      <div className="mb-4 sm:mb-0">
        <Link
          className="transition duration-300 px-4 py-2 mr-2 text-lg rounded hover:bg-neutral-100 dark-hover:bg-neutral-800"
          to="/blog"
        >
          Blog
        </Link>
        <Link
          className="transition duration-300 px-4 py-2 mr-2 text-lg rounded hover:bg-neutral-100 dark-hover:bg-neutral-800"
          to="/contact"
        >
          Contact
        </Link>
      </div>
      <div className="justify-center flex">
        <a
          className="transition duration-300 px-4 sm:px-3 py-2 mr-2 text-lg"
          href="https://www.gatsbyjs.org/"
          target="_blank"
          rel="noreferrer"
          title="Built with Gatsby"
        >
          <img src={gatsby} alt="Gatsby" className="h-8 w-8" />
        </a>
        <a
          className="transition duration-300 px-4 sm:px-3 py-2 mr-2 text-lg"
          href="https://github.com/pranavmalvawala"
          target="_blank"
          rel="noreferrer"
          title="Open-source on GitHub"
        >
          <img src={github} alt="Github" className="h-8 w-8" />
        </a>
        <a
          className="transition duration-300 px-4 sm:px-3 py-2 mr-2 text-lg"
          href="https://www.netlify.com/"
          target="_blank"
          rel="noreferrer"
          title="Hosted by Netlify"
        >
          <img src={netlify} alt="Netlify" className="h-8 w-8" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
