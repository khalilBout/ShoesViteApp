import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import soushi from "../../../public/image/soushi.png";
import p1 from "../../../public/image/p1.png";
import p2 from "../../../public/image/p2.png";
import p3 from "../../../public/image/p3.png";

const Service = () => {
  const ServiceRef = useRef();
  const isServiceInView = useInView(ServiceRef, { margin: "-100px" });
  return (
    <div
      ref={ServiceRef}
      className="screenPadding py-8 flex flex-col justify-center gap-4 md:flex-row overflow-x-hidden"
    >
      {/* Image section  */}
      <motion.div
        initial={{ x: "1000px", opacity: 0 }}
        animate={isServiceInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2"
      >
        <img src={soushi} alt="soushi" className="" />
      </motion.div>

      {/* Text section  */}
      <motion.div
        initial={{ x: "-1000px", opacity: 0 }}
        animate={isServiceInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 "
      >
        <div className="text-dark text-[36px] sml:text-[42px] md:text-[36px]  font-sansArabic">
          <h1 className="">حول المذاق </h1>
          <h1 className="">الآسيوي </h1>
        </div>
        <div className="text-secondary text-[16px] sml:text-[18px] md:text-[16px]  font-sansArabic ">
          <h4 className="py-3">
            في مطعم المذاق الآسيوي نقدّم وجبات ذات نوعية ممتازة وندعوكم الى تذوق
            طعامنا اللذيذ. إن المفتاح إلى نجاحنا بسيط: توفير طعام عالي الجودة
            ومتسق ومذاقه رائع في كل مرة.
          </h4>
          <h4 className="">
            تناول الطعام اللذيذ. أحضري شراباً ولكن الأهم من ذلك كله، الاسترخاء!
            ونشكركم من أعماق قلوبنا على دعمكم المستمر.
          </h4>
        </div>
        <div className="py-4 flex gap-4">
          <div className="text-[16px] font-sansArabic text-dark flex flex-col justify-center ">
            <h4 className="">قابلي الطاهي </h4>
            <h4 className="">المؤهل</h4>
          </div>
          <div dir="ltr" className="flex  -space-x-2 ">
            <div className=" bg-gray w-[60px] h-[60px] rounded-full overflow-hidden border-2 border-white flex justify-center items-center">
              <img className=" object-fill object-center" src={p1} alt="p1" />
            </div>
            <div className=" bg-gray w-[60px] h-[60px] rounded-full overflow-hidden border-2 border-white flex justify-center items-center">
              <img className=" object-fill object-center" src={p2} alt="p1" />
            </div>
            <div className=" bg-gray w-[60px] h-[60px] rounded-full overflow-hidden border-2 border-white flex justify-center items-center">
              <img
                className="max-w-[480px] max-h-[380px] object-fill object-center"
                src={p3}
                alt="p1"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Service;
