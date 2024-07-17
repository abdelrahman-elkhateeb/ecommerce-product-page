import { CartProvider } from "./context/CartProvider";
import AppLayout from "./features/AppLayout/AppLayout";
import NavBar from "./features/Navbar/NavBar";
function App() {
  return (
    <div className="container mx-auto px-4">
      <CartProvider>
        <NavBar />
        <AppLayout />
      </CartProvider>
    </div>
  );
}

export default App;
