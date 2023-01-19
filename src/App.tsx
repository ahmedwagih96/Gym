import Navbar from "@/scenes/header";
import Home from "@/scenes/home";
import Benefits from "@/scenes/benefits";
import Classes from "@/scenes/classes";
import Contact from "@/scenes/contact";
import Footer from "@/scenes/footer";
function App() {
  return (
    <div className="app bg-gray-20">
      <Navbar />
      <Home />
      <Benefits />
      <Classes />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
