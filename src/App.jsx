import { useState } from "react";
import "./index.css";
import Header from "./components/header/header.jsx";
import Hero from "./components/hero/hero.jsx";
import Companies from "./components/hero/companies/companies.jsx";
import Residencies from "./components/residencies/residencies.jsx";
import Value from "./components/value/value.jsx";
import Contact from "./components/contact/contact.jsx";
import GetStarted from "./components/getStarted/getstarted.jsx";
import Footer from "./components/footer/footer.jsx";
import LoginModal from "./components/login/login.jsx";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Header onLoginClick={() => setShowLogin(true)} />
      <div className="hero-gradient-wrapper">
        <Hero />
      </div>

      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />

      {/* Simple Login Modal structure */}
      {showLogin && (
        <LoginModal onClose={() => setShowLogin(false)} />
      )}
    </>
  );
}

export default App;