// import React from "react";
import i18n from "i18next";
import { FaCaretDown } from "react-icons/fa";
import { IoLanguageOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Navbar = ({ showSidebar, setShowSidebar }) => {
  const changeDir = () => {
    window.document.dir = i18n.dir();
  };
  const leng = ["ar", "fr"];
  return (
    <nav className=" absolute z-40 top-0 left-0 w-full pt-10 text-white">
      <div className=" container">
        <div className="flex justify-between items-center">
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
            <span className="text-primary">Coders</span> Coffee.{" "}
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
            className="flex gap-2"
          >
            {/* chenge Leng  */}
            <div className=" group relative cursor-pointer w-12">
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
            </div>
            <IoMenu
              onClick={() => setShowSidebar(!showSidebar)}
              className="text-3xl cursor-pointer"
            />
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
