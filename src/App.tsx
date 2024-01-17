import AboutSection from "./components/AboutSection/AboutSection";
import ContactSection from "./components/ContactSection/ContactSection";
import Cursor from "./components/Cursor/Cursor";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import WorkSection from "./components/WorkSection/WorkSection";
import { MouseProvider } from "./contexts/MouseContext";

function App() {
  return (
    <div className="flex flex-col w-screen min-h-screen bg-gradient-to-br from-primary to-secondary">
      <MouseProvider>
        <Header />
        <HeroSection />
        <WorkSection />
        <AboutSection />
        <ContactSection />
        <Cursor />
      </MouseProvider>
    </div>
  );
}

export default App;
