import { Link } from "gatsby";
import React from "react";
import ThemeToggle from "./ThemeToggle";
import { useCycle, motion } from "framer-motion";
import Navigation from "./Navigation";
import MenuToggle from "./MenuToggle";
import displayPicture from "../../../content/assets/photo.jpg";
import { useLocation } from "@reach/router";

function MDHeader() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const links = [
    {
      route: `/about`,
      title: `About`,
    },
    {
      route: `/blog`,
      title: `Blog`,
    },
    {
      route: `/projects`,
      title: `Projects`,
    },
    {
      route: `/contact`,
      title: `Contact`,
    },
  ];
  const path = useLocation();

  return (
    <header>
      <section className="max-w-3xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between my-6 h-16">
          <nav>
            <Link
              className="py-2 mr-2 text-2xl flex items-center"
              aria-label="go to homepage"
              to="/"
            >
              {path && path.pathname !== "/" ? (
                <img
                  src={displayPicture}
                  alt="Pranav Malvawala"
                  className="rounded-full w-12 h-12"
                />
              ) : null}

              <span className="ml-2 font-medium">Pranav Malvawala</span>
            </Link>
          </nav>
          <motion.div
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className="inset-x-0 flex flex-col block md:hidden -ml-4 flex-row-reverse"
          >
            <Navigation isOpen={isOpen} links={links} />
            <MenuToggle toggle={() => toggleOpen()} />
          </motion.div>
          <nav className="-ml-4 md:flex hidden md:block">
            {links.map((link) => (
              <Link
                className="transition duration-300 px-4 py-2 mr-2 text-2xl rounded hover:bg-neutral-100 dark-hover:bg-neutral-800"
                key={link.title}
                to={link.route}
                activeClassName="bg-neutral-100 dark:bg-neutral-800"
              >
                {link.title}
              </Link>
            ))}
            <ThemeToggle />
          </nav>
        </div>
      </section>
    </header>
  );
}

export default MDHeader;
