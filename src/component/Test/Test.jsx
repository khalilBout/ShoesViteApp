import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import a1 from "../../assets/product/a1.jpg";
import a2 from "../../assets/product/a2.jpg";

import b1 from "../../assets/product/b1.jpg";
import b2 from "../../assets/product/b2.jpg";

import c1 from "../../assets/product/c1.jpg";
import c2 from "../../assets/product/c2.jpg";

import d1 from "../../assets/product/d1.jpg";
import d2 from "../../assets/product/d2.jpg";

import e1 from "../../assets/product/e1.jpg";
import e2 from "../../assets/product/e2.jpg";

import f1 from "../../assets/product/f1.jpg";
import f2 from "../../assets/product/f2.jpg";

import h1 from "../../assets/product/h1.jpg";
import h2 from "../../assets/product/h2.jpg";

import j1 from "../../assets/product/j1.jpg";
import j2 from "../../assets/product/j2.jpg";

const dataImg = [
  { title: "", img1: a1, img2: a2 },
  { title: "", img1: b1, img2: b2 },
  { title: "", img1: c1, img2: c2 },
  { title: "", img1: d1, img2: d2 },
  { title: "", img1: e1, img2: e2 },
  { title: "", img1: f1, img2: f2 },
  { title: "", img1: h1, img2: h2 },
  { title: "", img1: j1, img2: j2 },
];

const Test = () => {
  const ref = useRef();

  // Track scroll progress within the `ref` container
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.2 1", "1 1"],
  });

  // Horizontal scroll animation
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-120%"]);

  return (
    <div ref={ref} className="h-[300vh] relative">
      <div className="h-[65vh] sticky top-28 overflow-hidden ">
        <motion.div style={{ x }} className="flex gap-4 max-sm:w-[320vw]">
          {dataImg.map((elm, ind) => {
            const main = elm.img1;
            return (
              <div
                //   style={{ x }}
                key={ind}
                className=" hover:scale-90 duration-200 transition-all cursor-pointer bg-gray-300 min-w-[200px] h-[380px] flex flex-col justify-center items-center gap-2"
              >
                <img
                  src={main}
                  alt="about img"
                  className="h-full w-auto object-cover"
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Test;
