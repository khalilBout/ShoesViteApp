import Logo from "./Logo";
import Links from "./Links";
import { motion } from "framer-motion";
import MobileLink from "./MobileLink";

const Navbar = () => {
  const link = [
    {
      id: 0,
      name: "المنزل",
      href: "",
    },
    {
      id: 1,
      name: "من نحن",
      href: "about",
    },
    {
      id: 2,
      name: "القائمة",
      href: "menuFood",
    },
  ];
  return (
    <div className="screenPadding fixed bg-secondary/95  top-0 left-0 right-0 flex justify-between py-4 z-50 ">
      <Logo />
      <div className=" hidden sml:block">
        <Links link={link} />
      </div>

      <motion.div
        initial={{ x: "-600px", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="block md:hidden">
          <MobileLink link={link} />
        </div>
        <button className="hidden md:block px-4 py-1 bg-primary text-[16px] rounded-full font-sansArabic">
          <a href="#reserve">الحجز</a>
        </button>
      </motion.div>
    </div>
  );
};

export default Navbar;
