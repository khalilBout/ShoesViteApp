import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import res from "../../../public/image/res.png";
const Reserve = () => {
  const ReserveRef = useRef();
  const isReserveInView = useInView(ReserveRef, { margin: "-100px" });
  return (
    <section
      id="reserve"
      ref={ReserveRef}
      className="screenPadding flex flex-col md:flex-row gap-4 p-16 mt-2 overflow-x-hidden"
    >
      {/* Text side  */}
      <motion.div
        initial={{ x: "1000px", opacity: 0 }}
        animate={isReserveInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 flex flex-col gap-2 sml:gap-4 md:gap-2 lg:justify-between lg:py-6"
      >
        <div className="font-sansArabic text-[32px] md:text-[38px] lg:text-[52px] max-md:flex max-md:justify-center ">
          <h1 className="px-4">احجز</h1>
          <h1 className="">جدولك الآن</h1>
        </div>
        <div className=" hidden md:block">
          <p className=" py-2 text-[13px] md:text-[15px] font-sansArabic text-secondary">
            هناك الكثير من الطبخ للقيام به في عيد الشكر، لذلك جعل الليلة السابقة
            سهلة على نفسك والتقط طبق سوشي لإطعام الأسرة.
          </p>
          <div className="py-2 font-sansArabic">
            <h3 className="text-[16px] text-dark">ساعات العمل</h3>
            <div className="text-[14px] text-secondary flex gap-8 ">
              <span className="">م. ف: 10 ص -11 م</span>
              <span className="">إس إس: 09 صباحا -11 مساء</span>
            </div>
          </div>
          <div className="py-2 font-sansArabic">
            <button className="px-3 py-1 rounded-full bg-dark text-[14px] text-primary ">
              احجز طاولة
            </button>
          </div>
        </div>
      </motion.div>

      {/* Image side  */}
      <motion.div
        initial={{ x: "-1000px", opacity: 0 }}
        animate={isReserveInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 p-4 flex justify-center items-center"
      >
        <img className="w-7/8 object-fill  object-center" src={res} alt="res" />
      </motion.div>

      <div className=" block md:hidden">
        <p className=" py-2 text-[14px] font-sansArabic text-secondary">
          هناك الكثير من الطبخ للقيام به في عيد الشكر، لذلك جعل الليلة السابقة
          سهلة على نفسك والتقط طبق سوشي لإطعام الأسرة.
        </p>
        <div className="py-2 font-sansArabic">
          <h3 className="text-[16px] text-dark">ساعات العمل</h3>
          <div className="text-[14px] text-secondary flex gap-8 ">
            <span className="">م. ف: 10 ص -11 م</span>
            <span className="">إس إس: 09 صباحا -11 مساء</span>
          </div>
        </div>
        <div className="py-2 font-sansArabic">
          <button className=" w-full px-3 py-1 rounded-full bg-dark text-[14px] text-primary ">
            احجز طاولة
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reserve;
