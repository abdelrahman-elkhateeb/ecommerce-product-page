import AppGallery from "./AppGallery";
import ProductDetails from "./ProductDetails";
function AppLayout({ items, setItems }) {
  return (
    <div className="grid items-center gap-11 md:mt-16 md:grid-cols-2 md:gap-20">
      <AppGallery />
      <ProductDetails items={items} setItems={setItems} />
    </div>
  );
}

export default AppLayout;
