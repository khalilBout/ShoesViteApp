// import React from "react";
import { useTranslation } from "react-i18next";
import BgImage from "../../assets/bg-slate.png";
import BlackCoffee from "../../assets/black.png";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";

import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
const Hero = () => {
  const { t } = useTranslation();
  const [showSidebar, setShowSidebar] = useState(false);

  const direction = window.document.dir;

  return (
    <main style={bgImage} className="">
      <section className="min-h-[600px] w-full relative">
        <div className="container">
          {/* Navbar sect  */}
          <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

          {/* <p>{t("navbar.logo")}</p> */}
          {/* Hero sect  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center  overflow-hidden">
            {/* Text content section   */}
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-16">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="text-7xl font-bold leading-tight ml-14 pb-4 max-w-[120px] font-titleAr"
              >
                {t("hero.title")}
              </motion.h1>
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
                  delay: 1.2,
                }}
                className="relative font-bodyAr"
              >
                <div className="relative z-10 space-y-2">
                  <h1 className="text-2xl font-titleAr">
                    {" "}
                    {t("hero.subTitle")}
                  </h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    {t("hero.desc")}
                  </h1>
                </div>

                <div
                  className={
                    direction === "rtl"
                      ? "absolute -top-6 -right-10 w-[320px] h-[200px] bg-darkGray"
                      : "absolute -top-6 -left-10 w-[320px] h-[200px] bg-lightGray"
                  }
                ></div>
              </motion.div>
            </div>
            {/* Hero Image section   */}
            <div className=" relative">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }}
                src={BlackCoffee}
                alt="main Image"
                className=" relative z-40 h-[400px] md:h-[700px] img-shadow "
              />
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
                  delay: 0.8,
                }}
                className=" h-[180px] w-[180px] absolute top-24 -right-16 border-primary rounded-full border-[20px] z-10 "
              ></motion.div>
              <div
                className={
                  direction === "rtl"
                    ? "absolute -top-10 right-[200px] z-[1] text-lightGray/40"
                    : "absolute -top-10 left-[200px] z-[1] text-darkGray/40"
                }
              >
                <motion.h1
                  initial={{ opacity: 0, x: -100 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.8,
                  }}
                  className="text-[140px] scale-150 font-bold leading-none"
                >
                  {" "}
                  {t("hero.title")}{" "}
                </motion.h1>
              </div>
            </div>
            {/* Third hero section   */}
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
                delay: 1.2,
              }}
              className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-8"
            >
              <h1 className="hidden md:block md:opacity-0 text-7xl font-bold leading-tight ml-14 pb-4 max-w-[120px] font-titleAr">
                {t("hero.title")}
              </h1>
              <div className="relative font-bodyAr">
                <div className="relative z-10 space-y-2">
                  <h1 className="text-2xl font-titleAr">
                    {" "}
                    {t("hero.subTitle")}
                  </h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    {t("hero.desc")}
                  </h1>
                </div>

                <div
                  className={
                    direction === "rtl"
                      ? "absolute -top-6 -left-10 w-[320px] h-[200px] bg-lightGray"
                      : "absolute -top-6 -right-10 w-[320px] h-[200px] bg-darkGray"
                  }
                ></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* sidebar menu  */}

        {showSidebar && (
          <motion.div
            initial={{ x: "100%" }}
            whileInView={{ x: 0 }}
            className={
              direction === "rtl"
                ? "absolute top-0 left-0 w-[180px] h-full bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blur-sm z-10"
                : "absolute top-0 right-0 w-[180px] h-full bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blur-sm z-10"
            }
          >
            <div className="w-full h-full flex justify-center items-center">
              <div className="flex flex-col justify-center items-center gap-6 text-white">
                <div className="w-[1px] h-[70px] bg-white "></div>
                <div className=" inline-block p-2 rounded-full cursor-pointer border border-white">
                  {" "}
                  <FaFacebookF className="text-2xl" />{" "}
                </div>
                <div className=" inline-block p-2 rounded-full cursor-pointer border border-white">
                  {" "}
                  <FaXTwitter className="text-2xl" />{" "}
                </div>
                <div className=" inline-block p-2 rounded-full cursor-pointer border border-white">
                  {" "}
                  <FaInstagram className="text-2xl" />{" "}
                </div>
                <div className="w-[1px] h-[70px] bg-white "></div>
              </div>
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
};

export default Hero;
