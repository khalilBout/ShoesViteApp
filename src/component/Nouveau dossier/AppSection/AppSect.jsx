import { useRef } from "react";
import imgApp from "../../../public/image/app.png";
import elp from "../../../public/image/elp.png";
import { motion, useInView } from "framer-motion";
const AppSect = () => {
  const data = [
    {
      id: 0,
      num: "85",
      desc: "عنصر عشوائي",
    },
    {
      id: 1,
      num: "1.000",
      desc: "الأمر اليومي",
    },
    {
      id: 2,
      num: "10",
      desc: "الأفرع",
    },
  ];

  const AppRef = useRef();
  const isAAppRefInView = useInView(AppRef, { margin: "-100px" });
  return (
    <div
      ref={AppRef}
      className="screenPadding overflow-hidden w-full my-8 flex flex-col sml:gap-2 sml:flex-row"
    >
      {/* right Box  */}
      <motion.div
        initial={{ x: "1000px", opacity: 0 }}
        animate={isAAppRefInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="relative flex flex-col gap-2 justify-center items-center w-full sml:w-1/4 max-sml:text-center"
      >
        <div className="py-8 text-dark font-sansArabic text-[24px]  sml:text-[18] md:text-[18px] mdl:text-[22px] lg:text-[28px] lgl:text-[36px]">
          <div className="max-sml:flex max-sml:justify-center">
            <h1 className=""> كل ما </h1>
            <h1 className=""> تحتاجينه </h1>
          </div>
          <div className="max-sml:flex">
            <h1 className=""> هو تطبيق</h1>
            <h1 className=""> واحــــــــــــــــــــــد </h1>
          </div>
        </div>
        <button className=" hidden max-w-[120px] sml:block px-2 py-1 sml:w-full rounded-full font-sansArabic text-[14px] bg-dark text-primary ">
          التنزيـــل
        </button>
        <div className="w-[16px] h-[16px] bg-grayLight rounded-full absolute top-4 left-8"></div>
        <div className="w-[12px] h-[12px] bg-grayLight rounded-full absolute bottom-28 right-8"></div>
      </motion.div>
      {/* image box  */}
      <motion.div
        initial={{ y: "1000px", opacity: 0 }}
        animate={isAAppRefInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className=" relative w-full sml:w-2/4 py-8 flex justify-center items-center"
      >
        <img
          src={imgApp}
          alt="app"
          className=" h-5/6 w-auto object-fill object-center absolute"
        />
        <img
          src={elp}
          alt="elp"
          className="max-w-[320px] max-h-[320px] w-auto h-auto object-fill object-center -z-50 "
        />
      </motion.div>
      {/* left box  */}
      <motion.div
        initial={{ x: "-1000px", opacity: 0 }}
        animate={isAAppRefInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="w-full sml:w-1/4 flex sml:flex-col justify-center px-2 gap-4"
      >
        {data?.map((item) => (
          <div key={item.id} className="p-2">
            <h3 className=" text-[16px] sml:text-[20px] font-sansArabic ">
              + {item.num}{" "}
            </h3>
            <h3 className="text-[14px] sml:text-[18px] font-sansArabic">
              {" "}
              {item.desc}{" "}
            </h3>
          </div>
        ))}
      </motion.div>

      <div className="sml:hidden my-4">
        <button className="w-full px-2 py-1 rounded-full font-sansArabic text-[15px] bg-dark text-primary ">
          التنزيـــل
        </button>
      </div>
    </div>
  );
};

export default AppSect;
