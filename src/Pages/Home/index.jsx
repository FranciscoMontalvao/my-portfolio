import React from "react";
import { motion } from "framer-motion";
import { Layout } from "../Layout";
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
    <Layout>
      <div className="flex h-screen items-center justify-center relative">
        <motion.div
          className="flex flex-col items-start space-y-4" // Definindo largura como metade do contêiner
          initial="initial"
          animate="animate"
          variants={containerVariants}
        >
          <motion.h1
            variants={nameVariants}
            className="text-8xl font-bold text-slate-50 -mt-[250px]"
          >
            Francisco Montalvao
          </motion.h1>
          <motion.p
            variants={textVariants}
            className="text-lg text-slate-50 mb-12"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </motion.p>
          <motion.img
            src={myPhoto}
            alt="Sua Foto"
            className="w-1/4 absolute right-0 bottom-30 rounded-full shadow-md mt-14 mb-2"
            variants={photoVariants}
          />
        </motion.div>
      </div>
    </Layout>
  );
};
