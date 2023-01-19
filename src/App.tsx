import Navbar from "@/scenes/header";
import Home from "@/scenes/home";
import Benefits from "./scenes/benefits";
function App() {
  return (
    <div className="app bg-gray-20">
      <Navbar />
      <Home />
      <Benefits />
    </div>
  );
}

export default App;
