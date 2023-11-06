import React, { useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const boxVariant = {
    hidden: {
      x: "-100vh",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.4,
      },
    },
  };
  const divVariant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <div className="py-20">
      <motion.div
        className="w-[150px] h-[150px] bg-black"
        initial={{
          opacity: 0.5,
        }}
        whileHover={{
          scale: 1.2,
        }}
        animate={{
          x: 1200,
          rotate: 360,
          opacity: 1,
        }}
        transition={{
          duration: 0.9,
          type: "spring",
          stiffness: 90,
          //   damping: 30,
        }}
      ></motion.div>

      <motion.div
        className="w-[150px] h-[150px] bg-black"
        whileTap={{
          scale: 0.9,
        }}
        whileHover={{
          scale: 1.1,
        }}
        drag
        dragConstraints={{
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
        transition={{
          duration: 0.3,
        }}
      ></motion.div>

      <motion.div
        variants={boxVariant}
        initial="hidden"
        animate="visible"
        className="w-[250px] h-[250px] mt-9 flex flex-col justify-around items-center ml-10 bg-black"
      >
        <motion.div
          variants={divVariant}
          className="w-[50px] h-[50px] bg-white"
        ></motion.div>
        <motion.div
          variants={divVariant}
          className="w-[50px] h-[50px] bg-white"
        ></motion.div>
        <motion.div
          variants={divVariant}
          className="w-[50px] h-[50px] bg-white"
        ></motion.div>
      </motion.div>
      <motion.div
        animate={{
          scale: [1, 1.4, 1.4, 1, 1],
          // rotate: [0, 360, 360, 360, 0],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
          duration: 1.5,
        }}
        initial={{}}
        className="w-[150px] h-[150px] bg-black m-24"
      ></motion.div>
    </div>
  );
};

export default Hero;
