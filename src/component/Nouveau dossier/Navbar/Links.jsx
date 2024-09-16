import { motion } from "framer-motion";

const Links = ({ link }) => {
  return (
    <motion.div
      initial={{ y: "-600px", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <nav className=" hidden md:block">
        <ul className="flex gap-8 ">
          {link?.map((item) => (
            <li key={item.id}>
              <a
                className="font-sansArabic text-[16px] md:text-[20px] lg:text-[24px] "
                // use awlye in Navlink
                // {({ isActive }) => {
                //   return isActive
                //     ? "font-sansArabic text-[16px] "
                //     : "font-sansArabic text-[16px]";
                // }}
                href={`#${item.href}`}
              >
                {item.name}
              </a>
            </li>
          ))}

          {/* <li>
            <NavLink
              to="shop"
              className={({ isActive }) => {
                return isActive
                  ? "bg-red-200 text-2xl px-2 py-1 rounded-md"
                  : "bg-slate-100 text-2xl px-2 py-1 rounded-md";
              }}
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="profiles"
              className={({ isActive }) => {
                return isActive
                  ? "bg-red-200 text-2xl px-2 py-1 rounded-md"
                  : "bg-slate-100 text-2xl px-2 py-1 rounded-md";
              }}
            >
              Profiles
            </NavLink>
          </li> */}
        </ul>
      </nav>
    </motion.div>
  );
};

export default Links;
