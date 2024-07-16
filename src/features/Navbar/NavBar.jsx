import Avatar from "./Avatar";
import Cart from "./Cart";
import Logo from "./Logo";
import Navigation from "./Navigation";
import menu from "../../assets/icon-menu.svg";
import close from "../../assets/icon-close.svg";
import { useState } from "react";

function NavBar({ items, setItems, setIsCartOpen, isCartOpen }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="flex items-center justify-between py-6 sm:border-b-[1px] sm:py-0">
      <div className="relative flex items-center gap-5 sm:gap-16">
        <img
          src={isOpen ? menu : close}
          alt=""
          className="z-50 cursor-pointer sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
        />

        <Logo />
        <Navigation isOpen={isOpen} />
      </div>

      <div className="relative flex items-center gap-5 sm:gap-10">
        <Cart
          items={items}
          setItems={setItems}
          isCartOpen={isCartOpen}
          setIsCartOpen={setIsCartOpen}
        />
        <Avatar />
      </div>
    </div>
  );
}

export default NavBar;
