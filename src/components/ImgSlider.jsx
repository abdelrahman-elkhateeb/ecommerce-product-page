import { useState } from "react";
import productImgOne from "../assets/image-product-1.jpg";
import productImgTwo from "../assets/image-product-2.jpg";
import productImgThree from "../assets/image-product-3.jpg";
import productImgFour from "../assets/image-product-4.jpg";

import next from "../assets/icon-next.svg";
import prev from "../assets/icon-previous.svg";

const imgSlider = [
  productImgOne,
  productImgTwo,
  productImgThree,
  productImgFour,
];

function ImgSlider() {
  const [imgIndex, setImageIndex] = useState(0);

  function handleNext() {
    setImageIndex((index) => {
      if (index === imgSlider.length - 1) return 0;
      return index + 1;
    });
  }

  function handlePrev() {
    setImageIndex((index) => {
      if (index === 0) return imgSlider.length - 1;
      return index - 1;
    });
  }
  const className =
    "absolute top-2/4 -translate-y-2/4 rounded-full bg-white p-4 hover:bg-orange transition-all duration-300";
  return (
    <div className="absolute left-1/2 top-1/2 w-2/4 -translate-x-1/2 -translate-y-1/2">
      <div className="relative">
        <button onClick={() => handlePrev()} className={`${className} -left-5`}>
          <img src={prev} alt="product" />
        </button>

        <img src={imgSlider[imgIndex]} alt="" className="rounded-xl" />

        <button
          onClick={() => handleNext()}
          className={`${className} -right-6`}
        >
          <img src={next} alt="product" />
        </button>
      </div>
    </div>
  );
}

export default ImgSlider;
