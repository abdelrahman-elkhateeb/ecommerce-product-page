import { useState } from "react";
import AppLayout from "./features/AppLayout/AppLayout";
import NavBar from "./features/Navbar/NavBar";
function App() {
  const [items, setItems] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <div className="container mx-auto px-4">
      <NavBar
        items={items}
        setItems={setItems}
        setIsCartOpen={setIsCartOpen}
        isCartOpen={isCartOpen}
      />
      <AppLayout
        items={items}
        setItems={setItems}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
      />
    </div>
  );
}

export default App;
