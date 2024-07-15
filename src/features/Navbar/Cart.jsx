import { useState } from "react";
import cart from "../../assets/icon-cart.svg";
import img from "../../assets/image-product-1.jpg";

function Cart({ items, setItems }) {
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
          <section className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <img src={img} alt="img" className="w-12" />
              </div>

              <div className="grow">
                <p>fall limited edition sneakers</p>
                <p>
                  $125 x {items} <span>${items * 125}</span>
                </p>
              </div>
              <span className="material-symbols-outlined">delete</span>
            </div>

            <button className="w-full bg-orange p-3 font-bold text-black">
              Checkout
            </button>
          </section>
          {/* <p className="flex min-h-48 items-center justify-center font-bold text-gray-500">
            your cart is empty
          </p> */}
        </div>
      </div>
    </>
  );
}

export default Cart;
