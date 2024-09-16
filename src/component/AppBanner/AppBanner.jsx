// import React from "react";
import coffeeCover from "../../assets/coffee-cover.jpg";
import appStore from "../../assets/website/app_store.png";
import playStore from "../../assets/website/play_store.png";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const BannerStyle = {
  backgroundImage: `url(${coffeeCover})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%",
};

const AppBanner = () => {
  const { t } = useTranslation();
  // const direction = window.document.dir;
  return (
    <div className="container my-14" dir="ltr">
      <div
        style={BannerStyle}
        className="sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl "
      >
        <div className="">
          <div className="space-y-6 max-w-xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.2,
              }}
              className="font-titleAr text-2xl text-center sm:text-4xl font-semibold"
            >
              {t("appBanner.title")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.3,
              }}
              className="font-bodyAr text-center sm:px-20"
            >
              {t("appBanner.desc")}{" "}
            </motion.p>
            {/* image link */}
            <div className="flex justify-center items-center gap-4">
              <a
                href="#"
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px] "
              >
                <motion.img
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.4,
                  }}
                  src={appStore}
                  alt="appStore"
                />{" "}
              </a>
              <a
                href="#"
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px] "
              >
                {" "}
                <motion.img
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.5,
                  }}
                  src={playStore}
                  alt="playStore"
                />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBanner;
