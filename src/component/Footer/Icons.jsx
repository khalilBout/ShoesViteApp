import { FaFacebookF } from "react-icons/fa6";
import { TiSocialInstagram } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { motion } from "framer-motion";
const Icons = () => {
  return (
    <div>
      <div className="flex gap-4 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
          }}
          className="text-white hover:text-black hover:bg-white  hover:scale-125 cursor-pointer duration-200 transition-all flex justify-center items-center w-[25px] h-[25px] rounded-full bg-light "
        >
          <FaFacebookF size={16} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
          }}
          className="text-white hover:text-black hover:bg-white hover:scale-125 cursor-pointer duration-200 transition-all flex justify-center items-center w-[25px] h-[25px] rounded-full bg-light "
        >
          <BsTwitterX size={16} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
          }}
          className="text-white hover:text-black hover:bg-white hover:scale-125 cursor-pointer duration-200 transition-all flex justify-center items-center w-[25px] h-[25px] rounded-full bg-light "
        >
          <FaYoutube size={16} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
          }}
          className="text-white hover:text-black hover:bg-white hover:scale-125 cursor-pointer duration-200 transition-all flex justify-center items-center w-[25px] h-[25px] rounded-full bg-light "
        >
          <TiSocialInstagram size={16} />
        </motion.div>
      </div>
    </div>
  );
};

export default Icons;
