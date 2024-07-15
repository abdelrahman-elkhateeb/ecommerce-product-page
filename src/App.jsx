import { useState } from "react";
import AppLayout from "./features/AppLayout/AppLayout";
import NavBar from "./features/Navbar/NavBar";
function App() {
  const [items, setItems] = useState(0);
  return (
    <div className="container mx-auto px-4">
      <NavBar items={items} setItems={setItems} />
      <AppLayout items={items} setItems={setItems} />
    </div>
  );
}

export default App;
