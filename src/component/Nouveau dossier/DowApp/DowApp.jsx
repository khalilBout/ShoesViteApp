import shi from "../../../public/image/shi.png";
import shi1 from "../../../public/image/shi1.png";
import ggplay from "../../../public/image/ggply.png";
import appstor from "../../../public/image/appstor.png";
const DowApp = () => {
  return (
    <div className="screenPadding overflow-x-hidden relative bg-primary text-center py-8 flex flex-col justify-center items-center font-sansArabic">
      <h1 className="text-[28px] sml:text-[36px] mdl:text-[52px] text-dark">
        قم بتنزيل التطبيق
      </h1>
      <div className="w-3/4 ">
        <h4 className="pt-3 sml:pt-6 text-[11px] sml:text-[13px] mdl:text-[16px] text-secondary">
          ابحثوا عن الطعام في اي مكان وفي اي وقت واحصلوا على طعامكم بسرعة.
        </h4>
      </div>
      <div className="w-full flex justify-center gap-6 my-4">
        <div className=" ">
          <img
            src={ggplay}
            alt="google Play"
            className=" object-fill object-center w-[70px] md:w-[90px] lg:w-[120px]"
          />
        </div>
        <div className="">
          <img
            src={appstor}
            alt="Appstor"
            className=" object-fill object-center w-[70px] md:w-[90px] lg:w-[120px]"
          />
        </div>
      </div>

      <img
        className="w-1/4 absolute top-10 left-0 z-10"
        src={shi}
        alt="shochi"
      />
      <img
        className="w-1/4 absolute top-10 right-0 z-10"
        src={shi1}
        alt="shochi"
      />
    </div>
  );
};

export default DowApp;
