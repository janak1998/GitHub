import React from "react";
import { motion } from "framer-motion";

const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.25 } },
};

const gridSqaurevariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const App = () => {
  return (
    <div className="flex flex-col gap-10 overflow-hidden">
      <motion.section
        variants={gridContainerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-3 p-10 gap-10"
      >
        {/* Fade Up */}
        <motion.div
          variants={gridSqaurevariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.div className="w-20 h-20 bg-stone-100 rounded-lg" initial={{opacity: 0, y: 100}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1, ease: 'easeOut', delay: 0.2}}
          ></motion.div>
          <motion.div className="w-20 h-20 bg-stone-100 rounded-full" 
          initial={{opacity: 0, y: -100}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1, ease: 'easeOut', delay: 0.4}}
          ></motion.div>
        </motion.div>
        <motion.div
          variants={gridSqaurevariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        ></motion.div>
        <motion.div
          variants={gridSqaurevariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        ></motion.div>
        <motion.div
          variants={gridSqaurevariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        ></motion.div>
        <motion.div
          variants={gridSqaurevariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        ></motion.div>
        <motion.div
          variants={gridSqaurevariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        ></motion.div>
      </motion.section>
    </div>
  );
};

export default App;
