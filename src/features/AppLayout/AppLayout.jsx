import AppGallery from "./AppGallery";
import ProductDetails from "./ProductDetails";
function AppLayout() {
  return (
    <div className="grid grid-cols-2 gap-20 items-center">
      <AppGallery />
      <ProductDetails />
    </div>
  );
}

export default AppLayout;
