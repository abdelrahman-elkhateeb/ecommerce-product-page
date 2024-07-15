import img from "../../assets/image-product-1.jpg";
import productImgOne from "../../assets/image-product-1-thumbnail.jpg";
import productImgTwo from "../../assets/image-product-2-thumbnail.jpg";
import productImgThree from "../../assets/image-product-3-thumbnail.jpg";
import productImgFour from "../../assets/image-product-4-thumbnail.jpg";

const imgs = [
  { id: 1, prod: productImgOne },
  { id: 2, prod: productImgTwo },
  { id: 3, prod: productImgThree },
  { id: 4, prod: productImgFour },
];

function AppGallery() {
  return (
    <div>
      <div className="mb-5">
        <img src={img} alt="" className="rounded-2xl lg:w-9/12" />
      </div>
      <div className="flex gap-3 lg:w-9/12">
        {imgs.map((img) => (
          <div key={img.id}>
            <img src={img.prod} className="rounded-lg" alt="product image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AppGallery;
