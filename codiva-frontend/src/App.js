import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Stats from "./components/Stats.jsx";
import Testimonials from "./components/Testimonials.jsx";
import GetInTouch from "./components/GetInTouch.jsx";
import Footer from "./components/Footer.jsx";
import Projects from "./components/Projects.jsx";
import Philosophy from "./components/Philosophy.jsx";
import Enquiry from "./components/Enquiry.jsx";
import LetsTalk from "./pages/LetsTalk.jsx";
import Company from "./pages/company.jsx";
import N8nChatWidget from "./N8nChatWidget.jsx";



function App() {
  return (
    <Router>
      <N8nChatWidget />
      <Navbar />

      <Routes>
        {/* --- HOME PAGE --- */}
        <Route
          path="/"
          element={
            <div className="bg-gradient-to-b from-gray-50 to-white text-gray-800">
              <Hero />
              <About />
              <Services />
              <Projects />
              <Philosophy />
              <Stats />
              <Testimonials />
              <Enquiry />
              <GetInTouch />
              <Footer />
            </div>
          }
        />

        {/* --- COMPANY PAGE --- */}
        <Route path="/company" element={<Company />} />
        <Route path="/letstalk" element={<LetsTalk />} />
      </Routes>
    </Router>
  );
}

export default App;
