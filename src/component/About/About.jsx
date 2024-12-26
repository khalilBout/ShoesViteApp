import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import cookies from "js-cookie";

import mainImg from "../../assets/about/1.jpg";
import firstImg from "../../assets/about/2.jpg";
import scendImg from "../../assets/about/3.jpg";

const About = () => {
  const refSec = useRef();
  const { scrollYProgress } = useScroll({
    target: refSec,
    offset: ["0 1", "1 0"], // تحديد اين يبدا التحريك ومتى ينتهي
  });
  // useMotionValueEvent(scrollYProgress, "change", (val) => {
  //   console.log("scroll Progress:", val);
  // });
  const titleAnim = useTransform(scrollYProgress, [1, 0], ["150%", "-50%"]);
  const image1Anim = useTransform(scrollYProgress, [0, 1], ["-80%", "150%"]);
  const image2Anim = useTransform(scrollYProgress, [0, 1], ["200%", "-100%"]);
  //   console.log("scrollYProgress:", scrollYProgress);
  const { t } = useTranslation();
  // const direction = window.document.dir;
  const leng = cookies.get("i18next") || "en";

  return (
    <section
      ref={refSec}
      className="overflow-x-hidden min-h-[100vh] relative overflow-hidden"
    >
      <div>
        <motion.h1
          style={{ x: titleAnim }}
          className={`${
            leng === "ar" ? " font-arabicFont " : "font-title"
          } text-6xl md:text-7xl lg:text-8xl xl:text-9xl  text-black absolute top-0 md:top-2  z-10`}
        >
          {t("about.title")}
        </motion.h1>
        <div className="min-h-[100vh] flex flex-col lg:flex-row justify-center items-center">
          {/* text div */}
          <div
            className={`${
              leng === "ar" ? " font-arabicFont " : "font-body"
            } text-justify m-6 md:m-12 md:m:10 lg:px-8 max-h-full flex flex-col gap-1 md:gap-2 lg:w-1/2  font-medium text-[14px] md:text-[16px] justify-center items-center `}
          >
            <p className="">{t("about.desc1")}</p>
            <p className="">{t("about.desc2")}</p>
            <p className="">{t("about.desc3")}</p>
          </div>
          {/* image div */}
          <div className="h-full w-full lg:w-1/2 relative flex justify-center items-center">
            <img
              src={mainImg}
              alt="about img"
              className=" max-w-[80%] object-cover max-h-[100vh] "
            />
            <motion.img
              style={{ y: image2Anim }}
              src={firstImg}
              alt="about img"
              className="max-sm:w-[140px] w-[200px] h-auto object-cover absolute top-28 left-2 sm:-left-2 md:-left-8"
            />
            <motion.img
              style={{ y: image1Anim }}
              src={scendImg}
              alt="about img"
              className="max-sm:w-[140px] w-[200px] h-auto object-cover absolute top-4 right-2 sm:-right-2 md:-right-10"
              // className="w-[180px] h-auto object-cover absolute -top-20 right-28"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
