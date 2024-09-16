import { useRef } from "react";
import About1 from "../../../public/image/about1.png";
import About2 from "../../../public/image/about2.png";
import About3 from "../../../public/image/about3.png";
import { motion, useInView } from "framer-motion";

const About = () => {
  const aboutRef = useRef();
  const isAboutRefInView = useInView(aboutRef, { margin: "-100px" });

  const data = [
    {
      id: 1,
      img: About1,
      title: "الصفقات والعروض الساخنة",
      desc: "اختر طعامك وسنوصلك بأسرع ما يمكن تنزيل التطبيق واستمتع بالطعام.",
    },
    {
      id: 2,
      img: About2,
      title: "الصفقات والعروض الساخنة",
      desc: "نريد أن نريك بعض الـ  الحب بإعطائك تخفيض على الطعام في مطاعمنا.",
    },
    {
      id: 3,
      img: About3,
      title: "التقاط ذاتي",
      desc: "الالتقاط الذاتي هي خدمة تسمح لك بتقديم طلبات الالتقاط الذاتي من خلال تطبيقنا.",
    },
  ];
  return (
    <section id="about" className="screenPadding overflow-hidden py-16">
      <div className="w-full flex flex-col gap-4" ref={aboutRef}>
        <motion.h1
          initial={{ x: "1000px", opacity: 0 }}
          // animate={{ y: "0", opacity: 1 }}
          animate={isAboutRefInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className=" font-sansArabic text-3xl sm:text-4xl sml:text-5xl md:text-6xl text-dark text-center my-8"
        >
          لماذا المذاق الآسيوي؟
        </motion.h1>

        <div className="grid grid-cols-1 sml:grid-cols-2 md:grid-cols-3 gap-3 items-center">
          {data?.map((item) => (
            <motion.div
              initial={{ x: `-${item.id * 1000}px`, opacity: 0 }}
              // animate={{ x: "0%", opacity: 1 }}
              animate={isAboutRefInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1 }}
              key={item.id}
              className="max-w-[280px] h-[320px] font-sansArabic flex flex-col "
            >
              <div className="h-2/3 m-4 flex justify-center items-center">
                <img
                  src={item.img}
                  alt="about1"
                  className=" object-cover object-center"
                />
              </div>

              <div className="h-1/3 flex flex-col items-center ">
                <h3 className="text-[16px] sml:text-[18px] text-dark py-2">
                  {item.title}
                </h3>
                <h4 className="text-[11px] sml:text-[14px] text-secondary text-center">
                  {item.desc}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
