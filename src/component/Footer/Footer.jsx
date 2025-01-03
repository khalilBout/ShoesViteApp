import { motion, useScroll, useTransform } from "framer-motion";
import cookies from "js-cookie";

import logo from "../../assets/siteLogo/lg.png";
import map from "../../assets/map.png";
import loc from "../../assets/loc.png";
import { IoLocationSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

import Icons from "./Icons";
import { useRef } from "react";
const Footer = () => {
  const refSec = useRef();
  const { scrollYProgress } = useScroll({
    target: refSec,
    offset: ["0 1", "0 0.6"],
  });

  const Anim = useTransform(scrollYProgress, [1, 0], ["0%", "100%"]);
  const scale = useTransform(scrollYProgress, [1, 0], ["100%", "0"]);

  // whatsApp Number
  const message = `مرحبا `;
  const encodedMessage = encodeURIComponent(message);
  const whatsAppLink = `https://wa.me/213670000320?text=${encodedMessage}`;
  // facebook  Link
  const facebook = "https://www.facebook.com";

  const leng = cookies.get("i18next") || "en";
  const linksData = [
    { link: "Home", linkAr: "الرئيسية", href: "/" },
    { link: "Serves", linkAr: "الخدمات", href: "/" },
    { link: "Contact", linkAr: "الإتصال", href: "/" },
  ];

  return (
    <footer ref={refSec} className=" bg-slate-800 flex flex-col md:flex-row ">
      {/* map div  */}
      <div dir="ltr" className="h-full w-full md:w-1/3 md:p-8 relative">
        <img
          //   style={{ x: Anim, scale }}
          src={map}
          alt="map"
          className=" min-h-[300px] object-cover object-center shadow-lg"
        />
        <motion.img
          animate={{
            y: [0, 20, 0, 20, 0],
            scale: [1, 1.2, 1, 1.2, 1],
            rotateY: [-20, 20, -20, 20, -20],
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            // repeatDelay: 1.2,
          }}
          src={loc}
          alt="map"
          className=" cursor-pointer absolute top-40 right-48 h-[60px] w-auto object-cover object-center "
        />

        <div className="m-8 px-4 absolute bottom-0 sm:bottom-4 left-0 right-0 bg-black/40 text-white">
          <a
            href="https://maps.app.goo.gl/kjw77kKa7PUZuays5"
            target="_blank"
            className="flex gap-2  items-center font-semibold hover:scale-105 duration-200"
          >
            <IoLocationSharp size={16} />
            <p className="text-[15px]">Hai El Moudjahiddine Oran</p>
          </a>
          <a
            href={facebook}
            target="_blank"
            className="flex gap-2 text-white items-center hover:scale-105 duration-200"
          >
            <FaFacebookF size={16} />
            <p className="text-[15px]"> @Beauty-Shoes</p>
          </a>
          <a
            href={whatsAppLink}
            target="_blank"
            className="flex gap-2 text-white items-center hover:scale-105 duration-200"
          >
            <FaWhatsapp size={16} />
            <p className="text-[15px]"> (+213) 556 254 336</p>
          </a>
        </div>
      </div>

      {/* info div  */}
      <div className="w-full md:w-2/3 grow ">
        <div className="w-full mt-8 flex justify-center">
          <motion.img
            style={{ scale }}
            src={logo}
            alt="logo"
            className="h-[90px] md:h-[120px] w-auto"
          />
        </div>
        <div className="flex justify-end items-end mx-8">
          <Icons />
        </div>
        <div className="mx-8 my-4 flex flex-col gap-4">
          <hr></hr>
          <div className="flex gap-8 justify-around text-white font-title">
            {linksData.map((elm, ind) => (
              <motion.h2
                key={ind}
                style={{ x: Anim }}
                className={`${
                  leng === "ar" ? " font-arabicFont " : "font-title"
                } text-xl md:text-2xl cursor-pointer `}
              >
                {leng === "en" ? elm.link : elm.linkAr}
              </motion.h2>
            ))}

            {/* <motion.h2
              style={{ x: Anim }}
              className="text-xl md:text-2xl cursor-pointer"
            >
              Servece{" "}
            </motion.h2>
            <motion.h2
              style={{ x: Anim }}
              className="text-xl md:text-2xl cursor-pointer"
            >
              Contact{" "}
            </motion.h2> */}
          </div>
          <hr></hr>
        </div>
        <div className="my-4 text-white mx-8 flex  justify-between">
          <h2 className="text-[14px] md:text-[16px]">
            Copyright 2024 | Beauty Shoes
          </h2>
          <h2 className="text-[14px] md:text-[16px]"> All right reserved</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
