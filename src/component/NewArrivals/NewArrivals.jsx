import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import arrowR from "../../assets/rtt.png";
import { useTranslation } from "react-i18next";
import video1 from "../../assets/newCol/01.mp4";
import video2 from "../../assets/newCol/02.mp4";
import video3 from "../../assets/newCol/03.mp4";
import { useState } from "react";

const data = [
  {
    id: 1,
    video: video1,
    desct:
      "Our shopping experience is designed to be comfortable and enjoyable, with a specialized team to help you choose the perfect shoes and excellent customer service to ensure your elegance and comfort.",
    desctAr:
      "تجربة التسوق في متجرنا مصممة لتكون مريحة وممتعة، مع فريق متخصص يساعدك في اختيار الحذاء المثالي وخدمة عملاء متميزة تضمن لكِ الأناقة والراحة.",
  },
  {
    id: 2,
    video: video2,
    desct:
      "Designed for the modern woman seeking elegance and comfort, made from premium leather, with a medium heel that provides stability all day. Perfect for formal meetings and social events, adding a touch of luxury to your attire.",
    desctAr:
      "مصمم للمرأة العصرية التي تسعى للأناقة والراحة، مصنوع من الجلد الفاخر، بكعب متوسط يوفر الاستقرار طوال اليوم. مثالي للاجتماعات الرسمية والمناسبات الاجتماعية، يضفي لمسة من الفخامة على ملابسك.",
  },
  {
    id: 3,
    video: video3,
    desct:
      "Featuring adjustable straps and a comfortable sole, perfect for hot days and summer events. Ensures a unique wearing experience and a lively look all day.",
    desctAr:
      "يتميز بأحزمة قابلة للتعديل ونعل مريح، مثالي للأيام الحارة والمناسبات الصيفية. يضمن لكِ تجربة ارتداء مميزة وإطلالة حيوية طوال اليوم.",
  },
];

const NewArrivals = () => {
  const { t } = useTranslation();
  const direction = window.document.dir;
  // console.log("direction new arvl: ", direction);
  const [count, setCount] = useState(0);
  const [dataDisplay, setDataDisplay] = useState(data[count]);
  const inc = () => {
    if (count < 2) {
      return setCount(count + 1);
    } else setCount(0);
  };
  useEffect(() => {
    setDataDisplay(data[count]);
  }, [count, direction]);

  const refSec = useRef();
  const { scrollYProgress } = useScroll({
    target: refSec,
    offset: ["0 1", "1 0"],
  });

  const Anim = useTransform(scrollYProgress, [1, 0], ["0%", "60%"]);
  const textAnimation = useTransform(scrollYProgress, [1, 0], ["20%", "-200%"]);

  return (
    <section ref={refSec} className=" min-h-[100vh] relative overflow-hidden">
      <motion.h1
        style={{ x: Anim }}
        className={`${
          direction === "rtl" ? " font-arabicFont " : "font-title"
        } text-5xl md:text-6xl lg:text-7xl xl:text-7xl  text-black absolute top-0 left-4 z-10 `}
      >
        {t("newArv.title")}
      </motion.h1>
      <div className="flex justify-center items-end flex-wrap ">
        <div className=" relative max-md:w-full md:w-3/5 h-[100vh] flex flex-col justify-center items-center ">
          {/* video div */}
          <div
            ref={refSec}
            className="justify-center items-center relative m-4 max-w-[380px] my-2 border border-black overflow-hidden"
          >
            <div className="m-8 flex justify-center items-center">
              {/* arrow div  */}
              <div className="bg-green-300/70 rounded-full flex justify-center items-center w-[100px] h-[100px] absolute -bottom-0 -left-0 z-50  ">
                <motion.img
                  animate={{
                    // x: [0, 5, 0, 5, 0],
                    scale: [0.9, 1.2, 0.9, 1.2, 0.9],
                    // rotateY: [-20, 20, -20, 20, -20],
                  }}
                  transition={{
                    duration: 3,
                    ease: "easeInOut",
                    repeat: Infinity,
                    // repeatDelay: 1.2,
                  }}
                  onClick={inc}
                  src={arrowR}
                  alt="arrow left"
                  className="rounded-full w-[70%] h-[70%] cursor-pointer"
                />
              </div>
              <div className=" ">
                <video
                  src={dataDisplay.video}
                  type="video/mp4"
                  autoPlay
                  loop
                  className=" h-[370px] w-auto object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>

        {/* text div */}
        <motion.div
          style={{ y: textAnimation }}
          className=" flex justify-center items-end md:w-2/5 bg-slate-700/20"
        >
          <p
            className={`${
              direction === "rtl" ? " font-arabicFont " : "font-body"
            } w-[90%] py-4 md:py-8 `}
          >
            {direction === "ltr" ? dataDisplay.desct : dataDisplay.desctAr}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewArrivals;
