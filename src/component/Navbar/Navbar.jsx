// import React from "react";
import i18n from "i18next";
import { FaCaretDown } from "react-icons/fa";
import { IoLanguageOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import cookies from "js-cookie";

import logo from "../../assets/siteLogo/lg.png";

const Navbar = () => {
  const changeDir = () => {
    window.document.dir = i18n.dir();
  };
  const leng = cookies.get("i18next") || "en";
  const direction = window.document.dir;
  useEffect(() => {}, [direction]);
  console.log("direction:", direction);
  useEffect(() => {
    changeDir();
  }, [leng]);

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <nav className=" absolute z-40 top-0 left-0 w-full pt-10 text-white">
      <div className=" container">
        <div className="flex justify-between items-center mb-2">
          {/* logo sect  */}
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            className="text-2xl font-semibold uppercase"
          >
            {" "}
            <motion.div
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{
                opacity: 1,
                pathLength: 1,
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
              className="text-primary font-title   "
            >
              <img src={logo} alt="logo" className="h-[70px] w-auto" />
            </motion.div>
          </motion.h1>
          {/* menu  */}

          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            className="flex gap-1 bg-slate-100/40 px-2 py-1 rounded-full "
          >
            {/* chenge Leng  */}
            {/* <div className=" group relative cursor-pointer w-12 ">
              <div className="flex h-[30px] items-center gap-[2px] ">
                <IoLanguageOutline size={16} />
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </div>
              <div className="bg-white absolute -bottom-20 -left-10 z-[50] hidden rounded-md p-2 text-black group-hover:block  ">
                <ul className="space-y-2">
                  {leng.map((item) => (
                    <li key={item}>
                      <button
                        onClick={() => {
                          i18n.changeLanguage(item);
                          changeDir();
                        }}
                        className="inline-block rounded-md p-2 hover:bg-primary/20"
                      >
                        {item.toUpperCase()}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}
            <div className="group relative cursor-pointer ">
              <div className="flex h-[25px] items-center justify-center gap-[2px] p-1 ">
                <IoLanguageOutline size={15} />
                <ul className=" gap-2 px-2 hidden group-hover:flex transition-all duration-200">
                  {/* {leng.map((item, ind) => ( */}
                  <li className=" rounded-full bg-white hover:bg-black text-black hover:text-white duration-300 cursor-pointer w-6 h-6 flex justify-center items-center">
                    <button
                      onClick={() => {
                        i18n.changeLanguage("ar");
                        changeDir();
                      }}
                      // className={lng === "ar" ? " hidden" : " block"}
                    >
                      {/* {item.toUpperCase()} */}
                      Ar
                    </button>
                  </li>
                  <li className=" rounded-full bg-white hover:bg-black text-black hover:text-white duration-200 cursor-pointer w-6 h-6 flex justify-center items-center">
                    <button
                      onClick={() => {
                        i18n.changeLanguage("en");
                        changeDir();
                      }}
                      // className={lng === "en" ? " hidden" : " block"}
                    >
                      {/* {item.toUpperCase()} */}
                      En
                    </button>
                  </li>
                  {/* ))} */}
                </ul>
                <FaCaretDown className="transition-all duration-200 -rotate-90 group-hover:rotate-90" />
              </div>

              {/* list of leng  */}
              <div className="absolute top-7 -left-3 z-[50] hidden rounded-md p-2 text-black group-hover:block"></div>
            </div>
            <IoMenu
              onClick={() => setShowSidebar(!showSidebar)}
              className="text-3xl cursor-pointer"
            />
          </motion.div>
        </div>

        {showSidebar && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            className=" flex justify-center items-center"
          >
            <div className=" font-body w-full sm:w-[70%] sm:rounded-full my-2 py-2 bg-slate-100/40 flex justify-center items-center gap-4 max-sm:flex-col">
              <a
                href="/"
                className=" hover:bg-blue-200 max-sm:w-full cursor-pointer text-center px-4 py-1 rounded-2xl text-black font-medium"
              >
                Home
              </a>
              <a
                href="/"
                className=" hover:bg-blue-200 max-sm:w-full cursor-pointer text-center px-4 py-1 rounded-2xl text-black font-medium"
              >
                Serves
              </a>
              <a
                href="/"
                className=" hover:bg-blue-200 max-sm:w-full cursor-pointer text-center px-4 py-1 rounded-2xl text-black font-medium"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
