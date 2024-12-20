import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";

import { useRef } from "react";
import img4 from "../../assets/Images/4.webp";
import img5 from "../../assets/Images/5.webp";
import img6 from "../../assets/Images/6.webp";
import img7 from "../../assets/Images/7.webp";
import img8 from "../../assets/Images/8.webp";
import img9 from "../../assets/Images/9.webp";
import img10 from "../../assets/Images/10.webp";
import img11 from "../../assets/Images/11.webp";
import img12 from "../../assets/Images/12.webp";
import img13 from "../../assets/Images/13.webp";
import img14 from "../../assets/Images/14.webp";

import logoV from "../../assets/logo.mp4";
const dataImg = [
  { title: "Jewellery", img: img4 },
  { title: "Antiques", img: img5 },
  { title: "Watches", img: img6 },
  { title: "Special Edition", img: img7 },
  { title: "Suits", img: img8 },
  { title: "Blazers", img: img9 },
  { title: "Tops", img: img10 },
  { title: "Man Basics", img: img11 },
  { title: "Ethnic Wear", img: img12 },
  { title: "Sweatshirts", img: img13 },
  { title: "Special Edition", img: img14 },
];

const Shop = () => {
  const refSec = useRef();
  const { t } = useTranslation();
  const direction = window.document.dir;

  // Track scroll progress within the `ref` container

  const { scrollYProgress } = useScroll({
    target: refSec,
    offset: ["0 1", "1 0"], // تحديد اين يبدا التحريك ومتى ينتهي
  });
  // Horizontal scroll animation
  const x = useTransform(scrollYProgress, [0.4, 0.7], ["0%", "-1800%"]);
  const titleAnim = useTransform(scrollYProgress, [1, 0], ["-280%", "100%"]);

  return (
    <section
      ref={refSec}
      className="overflow-x-hidden relative mt-8 md:h-[100vh]"
    >
      <div className="max-md:w-full flex flex-col md:flex-row relative">
        <motion.h1
          style={{ x: titleAnim }}
          className={`${
            direction === "rtl" ? " font-arabicFont " : "font-title"
          } text-yellow-400 text-6xl md:text-7xl lg:text-8xl xl:text-9xl absolute top-0 md:top-2  z-10 `}
          // className=""
        >
          {t("ourBrands.title")}
        </motion.h1>
        {/* Text content */}
        <div
          className={`${
            direction === "rtl" ? " font-arabicFont " : "font-body"
          } max-sm:pt-6 bg-slate-300 px-6 md:px-16 md:w-3/5 flex flex-col gap-2 md:gap-4 justify-center w-full h-[400px] md:h-[100vh] `}
        >
          <p className="text-[15px] md:text-[16px] font-medium ">
            {t("ourBrands.desc1")}
          </p>
          <p className="text-[15px] md:text-[16px] font-medium ">
            {t("ourBrands.desc2")}
          </p>
        </div>
        {/* Image carousel */}
        <div className=" h-[60vh] md:h-[100vh] w-[100vw] md:w-2/5 overflow-hidden bg-blue-300">
          <div className="bg w-full h-full">
            <video
              src={logoV}
              type="video/mp4"
              autoPlay
              loop
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;

{
  /* <div
          ref={ref}
          className=" h-[100vh] w-[100vw] md:w-2/3 overflow-hidden relative bg-blue-300"
        >
          <div className=" sticky top-0 flex items-center h-[100vh] mx-20 gap-4 -z-20 ">
            {dataImg.map((elm, ind) => (
              <motion.div
                style={{ x }}
                key={ind}
                className="min-w-[240px] md:min-w[280px] flex flex-col justify-center items-center gap-2"
              >
                <img
                  src={elm.img}
                  alt="about img"
                  className="w-[90%] w h-auto object-cover"
                />
                <h1 className="text-2xl font-body text-center">{elm.title}</h1>
              </motion.div>
            ))}
          </div>
        </div> */
}
