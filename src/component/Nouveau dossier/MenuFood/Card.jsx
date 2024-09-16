import { FaStar } from "react-icons/fa6";

const Card = ({ dishes, theColor }) => {
  return (
    <div
      className={`bg-${theColor} p-4 rounded-2xl max-w-[260px] min-w-[240px] flex flex-col gap-2 items-center m-3`}
    >
      <img
        className="w-7/8 h-[160px] rounded-lg object-fill object-center"
        src={dishes.img}
        alt="img"
      />
      <h2 className=" font-sansArabic w-full py-1 text-[18px] sml:text-[20px]">
        {dishes.title}
      </h2>
      <div className="w-full px-1">
        <span className="px-6 py-1 bg-white rounded-full text-dark font-sansArabic text-[14px]">
          {dishes.desc}
        </span>
      </div>
      <div
        dir="ltr"
        className=" w-full px-2 py-1 grid grid-cols-3 divide-x divide-slate-700 "
      >
        <div className="flex flex-col items-center font-bold">
          <h4 className="text-[13px] text-center  font-sansArabic">Pax</h4>
          <h4 className="text-[16px]">+ {dishes.commend}</h4>
        </div>

        <div className="flex flex-col items-center font-bold">
          <h4 className="text-[13px] text-center  font-sansArabic">$$</h4>
          <h4 className="text-[16px]">{dishes.prix}</h4>
        </div>
        <div className="flex flex-col items-center font-bold">
          <FaStar className="text-yellow-500" />
          <h4 className="text-[16px] mt-1">{dishes.star}</h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
