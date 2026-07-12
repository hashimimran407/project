import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
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
import Dashboard from "./components/dashboard/Dashboard.jsx";

function HomePage() {
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    setShowLogin(false);
    navigate("/dashboard");
  };

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
      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;