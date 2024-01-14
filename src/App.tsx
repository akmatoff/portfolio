import Cursor from "./components/Cursor/Cursor";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import { MouseProvider } from "./contexts/MouseContext";

function App() {
  return (
    <div className="flex flex-col w-screen min-h-screen bg-gradient-to-br from-primary to-secondary">
      <MouseProvider>
        <Header />
        <HeroSection />
        <Footer />
        <Cursor />
      </MouseProvider>
    </div>
  );
}

export default App;
