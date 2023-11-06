import React from "react";
import { motion, useAnimation } from "framer-motion";

const Box = () => {
  const control = useAnimation();
  return (
    <div className="px-20 ">
      <div className="flex gap-24 px-20">
        <button
          className="px-5 py-3 text-white bg-orange-700 rounded-lg"
          onClick={() =>
            control.start({
              x: 1000,
              transition: { duration: 2 },
            })
          }
        >
          Right
        </button>
        <button
          onClick={() =>
            control.start({
              x: 0,
              transition: { duration: 2 },
            })
          }
          className="px-5 py-3 text-white bg-orange-700 rounded-lg"
        >
          Left
        </button>
        <button
          onClick={() => control.stop()}
          className="px-5 py-3 text-white bg-orange-700 rounded-lg"
        >
          Stop
        </button>
        <button
          onClick={() =>
            control.start({
              borderRadius: "100%",
              transition: { duration: 0.5 },
            })
          }
          className="px-5 py-3 text-white bg-orange-700 rounded-lg"
        >
          Circle
        </button>
        <button
          onClick={() =>
            control.start({
              borderRadius: 0,
              transition: { duration: 0.5 },
            })
          }
          className="px-5 py-3 text-white bg-orange-700 rounded-lg"
        >
          Square
        </button>
      </div>
      <motion.div
        className="w-[200px] mt-11 mb-20 h-[200px] bg-black"
        animate={control}
      ></motion.div>
    </div>
  );
};

export default Box;
