import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import Card from "./Card";
import img1 from "../../../public/image/pla1.png";
import img2 from "../../../public/image/pla2.png";
import img3 from "../../../public/image/pla3.png";
import img4 from "../../../public/image/pla4.png";
import img5 from "../../../public/image/pla5.png";
import { useState } from "react";
import Slider from "react-slick";

const MenuFood = () => {
  const catygorys = [
    {
      id: 1,
      name: "كل الأطباق",
      theCty: "all",
    },
    {
      id: 2,
      name: "ساشيميس",
      theCty: "sash",
      colors: "primary",
    },
    {
      id: 3,
      name: "طبق العائلة",
      theCty: "family",
      colors: "grayLight",
    },
    {
      id: 4,
      name: "لفائف السوشي",
      theCty: "souchi",
      colors: "blue-200",
    },
  ];
  const allDishes = [
    {
      id: 0,
      img: img1,
      title: "ساموراي الخاص",
      caty: "family",
      desc: "طبق العائلة",
      prix: "120",
      commend: "200",
      star: "4.8",
    },

    {
      id: 2,
      img: img1,
      title: "سمك متنوع",
      caty: "family",
      desc: "طبق العائلة",
      prix: "130",
      commend: "200",
      star: "4.7",
    },
    {
      id: 1,
      img: img2,
      title: "سوشي طازج",
      caty: "family",
      desc: "طبق العائلة",
      prix: "130",
      commend: "200",
      star: "4.7",
    },
    {
      id: 5,
      img: img5,
      title: "سمك متنوع",
      caty: "sash",
      desc: "ساشيميس",
      prix: "130",
      commend: "200",
      star: "4.7",
    },
    {
      id: 4,
      img: img3,
      title: "سوشي طازج",
      caty: "sash",
      desc: "ساشيميس",
      prix: "130",
      commend: "200",
      star: "4.7",
    },

    {
      id: 3,
      img: img4,
      title: "ساموراي الخاص",
      caty: "sash",
      desc: "ساشيميس",
      prix: "120",
      commend: "200",
      star: "4.8",
    },

    {
      id: 8,
      img: img1,
      title: "سمك متنوع",
      caty: "souchi",
      desc: "لفائف السوشي",
      prix: "130",
      commend: "200",
      star: "4.7",
    },
    {
      id: 6,
      img: img4,
      title: "ساموراي الخاص",
      caty: "souchi",
      desc: "لفائف السوشي",
      prix: "120",
      commend: "200",
      star: "4.8",
    },
    {
      id: 7,
      img: img3,
      title: "سوشي طازج",
      caty: "souchi",
      desc: "لفائف السوشي",
      prix: "130",
      commend: "200",
      star: "4.7",
    },
  ];
  const [caty, setCaty] = useState("all");
  // const allData = []
  const [filterDishes, setFilterDishes] = useState([...allDishes]);

  // const CtySelected = catygorys?.find((item) => item.theCty === caty);

  const filterDishesFanction = (cty) => {
    if (cty === "" || undefined) {
      setFilterDishes(allDishes);
    } else {
      const newList = allDishes.filter((item) => {
        if (item.caty === cty) return item;
      });
      setFilterDishes(newList);
    }
  };

  var settings = {
    dots: false,
    // infinite: true,
    arrow: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          // infinite: true,
          // arrow: true,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          // infinite: true,
          // arrow: true,
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // infinite: true,
          // arrow: true,
        },
      },
    ],
  };

  const MenuFoodRef = useRef();
  const isMenuFoodInView = useInView(MenuFoodRef, { margin: "-100px" });

  return (
    <section
      id="menuFood"
      className="screenPadding overflow-x-hidden pt-14"
      ref={MenuFoodRef}
    >
      <motion.div
        initial={{ x: "-1000px", opacity: 0 }}
        animate={isMenuFoodInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="py-4 font-sansArabic text-[36px] sml:text-[42px] md:text-[56px] lg:text-[72px]"
      >
        <h1 className="">أشياء رائعة فريدة</h1>
        <h1 className="">من نوعها</h1>
      </motion.div>
      <div className="flex gap-4 max-sml:flex-col ">
        <ul className="flex w-full sml:min-w-[180px] sml:max-w-[220px] text-[12px] justify-between sml:text-[18px]  sml:justify-start sml:gap-8 sml:pt-8 px-2 font-sansArabic text-secondary sml:flex-col">
          {catygorys?.map((item) => {
            const isActive = item.theCty === caty;
            return (
              <motion.li
                initial={{ y: "300px", opacity: 0 }}
                animate={isMenuFoodInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: `${item.id * 0.2}` }}
                key={item.id}
                className={
                  isActive
                    ? "scale-110 bg-primary px-3 py-1 rounded-full "
                    : "px-3 py-1 rounded-full hover:bg-primary"
                }
              >
                <button
                  className=""
                  // className={`{${caty} === ${item.theCty} ? " bg-primary " : " bg-green-300"}`}
                  onClick={() => {
                    if (item.theCty === "all") {
                      setCaty("all");
                      setFilterDishes(allDishes);
                    } else {
                      setCaty(item.theCty);
                      filterDishesFanction(item.theCty);
                    }
                  }}
                >
                  {item.name}
                </button>
              </motion.li>
            );
          })}
        </ul>
        <div className="w-full max-md:max-w-[300px] ">
          <Slider {...settings}>
            {filterDishes.map((dishes) => {
              const CtyOfItem = catygorys.find(
                (item) => item.theCty === dishes.caty
              );
              const theColor = CtyOfItem.colors;
              return (
                <Card key={dishes.id} dishes={dishes} theColor={theColor} />
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default MenuFood;
