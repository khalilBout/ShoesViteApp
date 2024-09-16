import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      initial={{ x: "600px", opacity: 0 }}
      animate={{ x: "0%", opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <h1 className=" font-arabic font-bold text-2xl md:text-3xl lg:text-4xl">
        المذاق <span className="text-primary">الآسيوي</span>{" "}
      </h1>
    </motion.div>
  );
};

export default Logo;
