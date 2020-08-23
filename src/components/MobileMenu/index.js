import React from "react";
import { useCycle, motion } from "framer-motion";
import BottomBar from "./BottomBar";

function MobileMenu() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="fixed inset-x-0 bottom-0 flex flex-col block md:hidden"
    >
      <BottomBar toggle={() => toggleOpen()} />
    </motion.div>
  );
}
export default MobileMenu;
