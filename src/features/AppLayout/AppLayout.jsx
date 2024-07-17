import AppGallery from "./AppGallery";
import ProductDetails from "./ProductDetails";

function AppLayout() {
  return (
    <div className="relative grid items-center gap-11 md:mt-16 md:grid-cols-2 md:gap-20">
      <AppGallery />
      <ProductDetails />
    </div>
  );
}

export default AppLayout;
