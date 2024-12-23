import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";

const Brand = () => {
  const ref = useRef();

  const { t } = useTranslation();
  const direction = window.document.dir;
  useEffect(() => {}, [direction]);

  // Track scroll progress within the `ref` container
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 0"],
  });

  // Horizontal scroll animation
  const scrollXltr = useTransform(scrollYProgress, [0, 1], ["-100%", "100%"]);
  const scrollXrtl = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);
  const scrollYttb = useTransform(scrollYProgress, [0, 1], ["-100%", "100%"]);
  const scrollYbtt = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);

  return (
    <div
      // className=" overflow-x-hidden bg-slate-200 h-[100vh] w-full font-title overflow-hidden "
      className={`${
        direction === "rtl" ? " font-arabicFont " : "font-title"
      } overflow-x-hidden bg-slate-200 w-full py-12 overflow-hidden `}
    >
      <div
        ref={ref}
        className="h-[100%] flex flex-col justify-center gap-4 sm:gap-5 md:gap-4 lg:gap-2 items-center text-white text-2xl sm:text-4xl md:text-6xl lg:text-7xl"
      >
        <motion.div
          style={{ x: scrollXltr, y: scrollYttb }}
          className="my-2 text-center bg-black/90  py-2 sm:py-1 px-10"
        >
          <span className="">{t("words.desc1")}</span>
        </motion.div>
        <motion.div
          style={{ x: scrollXrtl, y: scrollYbtt }}
          className="my-2 text-center bg-black/90 py-2 sm:py-1 px-10"
        >
          <span className="">{t("words.desc2")}</span>
        </motion.div>
        <motion.div
          style={{ x: scrollXltr, y: scrollYttb }}
          className="my-2 text-center bg-black/90 py-2 sm:py-1 px-10"
        >
          <span className="">{t("words.desc3")}</span>
        </motion.div>
        <motion.div
          style={{ x: scrollXrtl, y: scrollYbtt }}
          className="my-2 text-center bg-black/90 py-2 sm:py-1 px-10"
        >
          <span className="">{t("words.desc4")}</span>
        </motion.div>
        <motion.div
          style={{ x: scrollXltr, y: scrollYttb }}
          className="my-2 text-center bg-black/90 py-2 sm:py-1 px-10"
        >
          <span className="">{t("words.desc5")}</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Brand;
