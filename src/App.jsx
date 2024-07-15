import AppLayout from "./features/AppLayout/AppLayout";
import NavBar from "./features/Navbar/NavBar";
function App() {
  return (
    <div className="container mx-auto px-4">
      <NavBar />
      <AppLayout />
    </div>
  );
}

export default App;
