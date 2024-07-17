import { useContext } from "react";
import { CartContext } from "./CartProvider";


function useCartContext() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
}

export default useCartContext;