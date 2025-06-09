import React from "react";
import NavLink from "./NavLink";
import NavSearch from "./NavSearch";

const Navbar = () => {
  console.log("navbar rendered");
  return (
    <div>
      <NavLink />
      <NavSearch />
    </div>
  );
};

export default Navbar;
