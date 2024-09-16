import Icons from "./Icons";
import Links from "./Links";
import Logo from "./Logo";

export const Footer = () => {
  return (
    <div className="screenPadding overflow-x-hidden py-8 bg-dark flex flex-col mdl:flex-row gap-4 justify-between items-center  min-h-[60px] ">
      <Logo />
      <Links />
      <Icons />
    </div>
  );
};
