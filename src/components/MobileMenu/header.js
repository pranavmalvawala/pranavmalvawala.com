import { Link } from "gatsby";
import React from "react";
import { Section } from "../common";
import ThemeToggle from "./ThemeToggle";
import { useCycle, motion } from "framer-motion";
import Navigation from "./Navigation";
import MenuToggle from "./MenuToggle";

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
  return (
    <header className="">
      <Section>
        <div className="flex items-center justify-between pb-6 my-6 border-b-2 border-primary-400">
          <nav>
            <Link className="py-2 mr-2 text-2xl rounded font-semibold" to="/">
              Pranav Malvawala
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
                className="px-4 py-2 mr-2 text-2xl rounded hover:bg-neutral-100 dark-hover:bg-neutral-800"
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
      </Section>
    </header>
  );
}

export default MDHeader;
