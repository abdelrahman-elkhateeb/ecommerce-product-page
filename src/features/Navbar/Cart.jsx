import { useState } from "react";
import cart from "../../assets/icon-cart.svg";
function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <img src={cart} alt="cart" className="cursor-pointer" />
      </div>
      <div
        className={`fixed sm:absolute ${isOpen ? "block" : "hidden"} right-0 top-20 w-full rounded-md bg-white shadow-md sm:w-72`}
      >
        <h4 className="border-b-[1px] border-x-gray-700 p-5 font-bold text-black">
          Cart
        </h4>
        <div>
          <p className="flex min-h-48 items-center justify-center font-bold text-gray-500">
            your cart is empty
          </p>
        </div>
      </div>
    </>
  );
}

export default Cart;
