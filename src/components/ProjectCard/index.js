import React from "react";
import PropTypes from "prop-types";
import siteImage from "../../../content/assets/pranavmalvawala.png";

function ProjectCard({ title, source, url, description, buildUsing }) {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex md:max-w-full md:flex sm:max-w-full shadow-xl rounded mb-12">
      <div
        className="h-48 lg:h-64 lg:w-2/5 md:w-2/5 md:h-64 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{
          backgroundImage: `url("${siteImage}")`,
        }}
        title="Woman holding a mug"
      ></div>
      <div className="dark:bg-neutral-700 lg:h-64 md:h-64 border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal w-full">
        <div className="px-4 pt-2 h-32">
          <div className="text-gray-900 font-bold text-xl mb-2 dark:text-neutral-100">
            {title}
          </div>
          <p className="text-gray-700 text-base dark:text-neutral-200 mb-0">
            {description}
          </p>
        </div>
        <div className="px-4 py-2">
          {buildUsing.map((item) => (
            <span
              key={item}
              className="inline-block bg-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex">
          <div className="flex-1 text-gray-700 text-left px-4 py-2 m-2">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <svg
                className="fill-current hover:text-black cursor-pointer w-8 h-8 float-left dark:text-neutral-100 dark-hover:text-white"
                viewBox="0 0 194.818 194.818"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>External</title>
                <g>
                  <path d="M185.818,2.161h-57.04c-4.971,0-9,4.029-9,9s4.029,9,9,9h35.312l-86.3,86.3c-3.515,3.515-3.515,9.213,0,12.728 c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l86.3-86.3v35.313c0,4.971,4.029,9,9,9s9-4.029,9-9v-57.04 C194.818,6.19,190.789,2.161,185.818,2.161z"></path>
                  <path d="M149,77.201c-4.971,0-9,4.029-9,9v88.456H18v-122h93.778c4.971,0,9-4.029,9-9s-4.029-9-9-9H9c-4.971,0-9,4.029-9,9v140 c0,4.971,4.029,9,9,9h140c4.971,0,9-4.029,9-9V86.201C158,81.23,153.971,77.201,149,77.201z"></path>
                </g>
              </svg>
            </a>
          </div>
          <div className="flex-1 text-gray-700 text-right px-4 py-2 m-2">
            <a href={source} target="_blank" rel="noopener noreferrer">
              <svg
                className="fill-current hover:text-black cursor-pointer w-8 h-8 float-right dark:text-neutral-100 dark-hover:text-white"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub</title>
                <path d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string,
  source: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string,
  buildUsing: PropTypes.array,
};

export default ProjectCard;
