import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import imageSoushi from "../../../public/image/img1.png";
import imageCrovet from "../../../public/image/img2.png";

const Hero = () => {
  const HeroRef = useRef();
  const isHeroInView = useInView(HeroRef, { margin: "-100px" });
  return (
    <section
      ref={HeroRef}
      id="home"
      className="relative mt-28 sml:mt-32 md:mt-36 lg:mt-40   min-h-[50vh] sml:h-[65vh] md:h-[80vh] mdl:h-[85vh] lg:h-[90vh] overflow-x-hidden "
    >
      <div className="screenPadding w-full flex flex-col gap-4 md:gap-6 ">
        <div className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full bg-primary/10 absolute -left-48 md:-left-64 lg:left-0 -top-5 "></div>
        <motion.div
          initial={{ x: "-1200px", opacity: 0 }}
          animate={isHeroInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
          className=" w-[140px] h-[140px] sml:w-[220px] sml:h-[220px] md:w-[320px] md:h-[320px] absolute left-0 top-10 -z-50 "
        >
          <img
            src={imageSoushi}
            alt="image Soushi"
            className="w-full h-full object-fill object-center"
          />
        </motion.div>

        <div className="w-[280px] h-[280px] md:w-[500px] md:h-[500px] rounded-full bg-primary/90 absolute -right-48 md:-right-64 -top-5 -z-10 "></div>

        <motion.div
          initial={{ x: "1200px", opacity: 0 }}
          animate={isHeroInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className=" font-arabic text-5xl sm:text-6xl sml:text-7xl md:text-8xl text-dark z-10 "
        >
          <h1> المذاق</h1>
          <h1>الآسيوي</h1>
          <div className="hidden sm:block sm:w-[60px] sm:h-[60px] sml:w-[90px] sml:h-[90px] md:w-[110px] md:h-[110px] mdl:w-[135px] mdl:h-[135px] absolute right-36 sml:right-48 md:right-60 mdl:right-72 top-0 -z-50">
            <img
              src={imageCrovet}
              alt="image Crovet"
              className="w-full h-full object-fill object-center"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ x: "1200px", opacity: 0 }}
          animate={isHeroInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1.1 }}
          className=" font-sansArabic text-secondary text-[12px] sm:text-[14px] md:text-[16px] z-20"
        >
          <h3>أنقى تجربة السوشي التركيز </h3>
          <h3> على مكونات الجودة الممتازة</h3>
        </motion.div>

        <motion.button
          initial={{ x: "1800px", opacity: 0 }}
          animate={isHeroInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
          className="px-4 py-2 rounded-full w-full sm:w-[120px] md:w-[160px] xl:w-[200px] text-[12px] md:text-[16px] bg-black text-primary font-sansArabic z-20"
        >
          تحقق من القائمة
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
