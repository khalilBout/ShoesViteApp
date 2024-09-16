// import React from "react";
import wordMap from "../../assets/world-map.png";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const WhereToBuy = () => {
  const { t } = useTranslation();
  const direction = window.document.dir;

  return (
    <div className=" container my-36">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
        {/* form section  */}
        <div className="space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            className="text-2xl font-bold text-darkGray font-titleAr"
          >
            {t("whereToBuy.title")}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.4,
            }}
            className="flex items-center gap-4"
          >
            <input
              type="text"
              placeholder={direction === "rtl" ? "الإسم" : "Name"}
              className="input-style w-full lg:w-[150px]"
            />
            <input
              type="email"
              placeholder={direction === "rtl" ? "الإيمايل" : "Email"}
              className="input-style w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.6,
            }}
            className="flex items-center gap-4"
          >
            <input
              type="text"
              placeholder={direction === "rtl" ? "المدينة" : "City"}
              className="input-style w-full "
            />
            <input
              type="text"
              placeholder={direction === "rtl" ? "الحي" : "stryt"}
              className="input-style w-full lg:w-[150px]"
            />
          </motion.div>
          <motion.button
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.8,
            }}
            className="primary-btn w-full font-titleAr"
          >
            {t("whereToBuy.btn")}
          </motion.button>
        </div>
        {/* word map section  */}
        <div className="col-span-2">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 1,
            }}
            src={wordMap}
            alt="word map section"
            className="w-full sm:w-[500px] mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default WhereToBuy;
