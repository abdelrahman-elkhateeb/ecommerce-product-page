import Avatar from "./Avatar";
import Cart from "./Cart";
import Logo from "./Logo";
import Navigation from "./Navigation";
import menu from "../assets/icon-menu.svg";
import close from "../assets/icon-close.svg";
import { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="flex items-center justify-between border-b-[1px]">
      <div className="relative flex items-center gap-5 sm:gap-16">
        <img
          src={isOpen ? menu : close}
          alt=""
          className="cursor-pointer sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
        />

        <Logo />
        <Navigation />
      </div>

      <div className="flex items-center gap-10">
        <Cart />
        <Avatar />
      </div>
    </div>
  );
}

export default NavBar;
