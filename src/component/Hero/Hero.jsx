// import React from "react";
import { useTranslation } from "react-i18next";
// import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import cookies from "js-cookie";

import vidWalkingGirl from "../../assets/Walking Girl.mp4";

const cardVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,

    transition: {
      type: "spring",
      stiffness: 150,
      damping: 13,
      ease: "easeInOut",
    },
  },
};
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.6,
      staggerChildren: 0.4,
    },
  },
};

const Hero = () => {
  const { t } = useTranslation();
  // const direction = window.document.dir;
  const leng = cookies.get("i18next") || "en";

  return (
    <section className="overflow-x-hidden">
      <Navbar />
      <div className=" w-[100%] h-[100vh] relative">
        <video
          src={vidWalkingGirl}
          type="video/mp4"
          autoPlay
          loop
          className="w-full h-full object-cover"
        />
        <div className="w-full h-[100vh] bg-black/60 absolute top-0  flex justify-center items-center">
          <div className="text-white ">
            <motion.div
              dir="ltr"
              variants={containerVariants}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ amount: 0.1 }}
              className="flex text-4xl sm:text-6xl md:text-7xl xl:text-9xl text-center py-4 font-title"
            >
              <motion.div variants={cardVariants}>B</motion.div>
              <motion.div variants={cardVariants}>E</motion.div>
              <motion.div variants={cardVariants}>A</motion.div>
              <motion.div variants={cardVariants}>U</motion.div>
              <motion.div variants={cardVariants}>T</motion.div>
              <motion.div variants={cardVariants}>Y</motion.div>
              <motion.div variants={cardVariants}>-</motion.div>
              <motion.div variants={cardVariants}>S</motion.div>
              <motion.div variants={cardVariants}>H</motion.div>
              <motion.div variants={cardVariants}>O</motion.div>
              <motion.div variants={cardVariants}>E</motion.div>
              <motion.div variants={cardVariants}>S</motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 1.4,
              }}
              className={`${
                leng === "ar" ? " font-arabicFont " : "font-title"
              } flex gap-2 justify-center items-center text-xl sm:text-2xl md:text-3xl `}
            >
              <span>{t("hero.subTitle1")} .</span>
              <span>{t("hero.subTitle2")} .</span>
              <span>{t("hero.subTitle3")} </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
