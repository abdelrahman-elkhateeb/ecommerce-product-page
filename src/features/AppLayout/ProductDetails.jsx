function productDetails() {
  return (
    <div className="flex flex-col justify-between">
      <p className="font-bold uppercase text-gray-500">sneaker company</p>
      <h1 className="text-5xl font-bold capitalize text-black">
        fall limited edition sneakers
      </h1>
      <p className="text-gray-500">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      <section>
        <di className="flex items-center gap-1">
          <p className="text-2xl font-bold">$125.00</p>
          <span className="block w-fit rounded bg-black px-[4px] py-[2px] text-white">
            50%
          </span>
        </di>
        <span className="text-gray-500 line-through">$250.00</span>
      </section>

      <section className="flex">
        <div className="flex w-full items-center">
          <span className="material-symbols-outlined">remove</span>
          <p>0</p>
          <span className="material-symbols-outlined">add</span>
        </div>
        <button className="flex">
          <span className="material-symbols-outlined">shopping_cart</span>
          <p>Add to cart</p>
        </button>
      </section>
    </div>
  );
}

export default productDetails;
