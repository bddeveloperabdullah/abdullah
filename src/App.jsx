import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Searvice from "./components/Searvice/Searvice";
import Portfolio from "./components/Portfolio/Portfolio";
import Team from "./components/Team/Team";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Haire from "./components/Haire/Haire";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <main className="bg-primary">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/searvice" element={<Searvice />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/haire" element={<Haire />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;
