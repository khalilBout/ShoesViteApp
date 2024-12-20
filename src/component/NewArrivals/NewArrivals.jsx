import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import mainImg from "../../assets/Images/1.webp";

import newV from "../../assets/newCol/03.mp4";

const NewArrivals = () => {
  const refSec = useRef();
  const { scrollYProgress } = useScroll({
    target: refSec,
    offset: ["0 1", "1 0"],
  });

  const Anim = useTransform(scrollYProgress, [1, 0], ["0%", "60%"]);
  const textAnimation = useTransform(scrollYProgress, [1, 0], ["20%", "-200%"]);

  return (
    <section
      ref={refSec}
      className="overflow-x-hidden min-h-[100vh] relative overflow-hidden"
    >
      <div className=" flex justify-center">
        <motion.h1
          style={{ x: Anim }}
          className="text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-title text-black absolute top-0 left-4 z-10"
        >
          New Arrivals
        </motion.h1>
        <div className="hidden sm:flex w-1/3 h-[100vh] "></div>

        <div className=" relative max-sm:w-full sm:w-2/3 xl:w-1/3 h-[100vh] flex justify-center items-center">
          {/* image div */}
          <div
            ref={refSec}
            className="w-[85%] h-[76%] border-2 border-black overflow-hidden"
          >
            <div className=" m-4 flex flex-col justify-center items-center gap-4">
              <div className=" max-w-[80%] h-auto m-4">
                <video
                  src={newV}
                  type="video/mp4"
                  autoPlay
                  loop
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* text div */}
        <div className=" hidden md:flex justify-end items-end md:w-1/3 h-[100vh] bg-slate-100">
          <motion.p
            style={{ y: textAnimation }}
            className="w-[70%] max-h-[380px]"
          >
            We are very dedicated to making our products. We offer unique and
            creative products to a wide range of people. We have a variety of
            styles, but for most people, all of the options are in the box. We
            specialize in making things that make you happy.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
