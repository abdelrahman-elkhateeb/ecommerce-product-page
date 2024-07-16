import AppGallery from "./AppGallery";
import ProductDetails from "./ProductDetails";

function AppLayout({ items, setItems, isCartOpen, setIsCartOpen }) {
  return (
    <div className="relative grid items-center gap-11 md:mt-16 md:grid-cols-2 md:gap-20">
      <AppGallery />
      <ProductDetails
        items={items}
        setItems={setItems}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
      />
    </div>
  );
}

export default AppLayout;
