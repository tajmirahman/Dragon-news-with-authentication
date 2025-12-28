import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";
import { Link } from "react-router";
const Header = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-3 ">
      <Link to={'/'}><img className="w-[400px]" src={logo} alt="" /> </Link>
      <p className="text-accent">Journalism Without Fear or Favour</p>
      <p className="font-semibold text-accent">
        {format(new Date(), "EEEE , MMMM MM , yyyy")}
      </p>
    </div>
  );
};

export default Header;
