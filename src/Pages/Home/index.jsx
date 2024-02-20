import React from "react";
import { motion } from "framer-motion";
import myPhoto from "../../assets/my-photo.jpg";

export const Home = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8 } },
  };

  const nameVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
  };

  const textVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
  };

  const photoVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
      <div className="flex h-screen items-center justify-center ">
        <motion.div
          className="flex flex-col items-start space-y-4"
          initial="initial"
          animate="animate"
          variants={containerVariants}
        >
          <motion.h1
            variants={nameVariants}
            className="text-8xl font-bold text-slate-50"
          >
            Francisco Montalvao
          </motion.h1>
          <motion.p
            variants={textVariants}
            className="text-lg text-slate-50"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </motion.p>
         <div className="w-full flex justify-end">
         <motion.img
            src={myPhoto}
            alt="Sua Foto"
            className="w-1/4 bottom-30 rounded-full shadow-md"
            variants={photoVariants}
          />
         </div>
        </motion.div>
      </div>
  );
};
