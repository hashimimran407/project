import "./index.css";
import Header from "./components/header/header.jsx";
import Hero from "./components/hero/hero.jsx";
import Companies from "./components/hero/companies/companies.jsx";
import Residencies from "./components/residencies/residencies.jsx";
import Value from "./components/value/value.jsx";
import Contact from "./components/contact/contact.jsx";
import GetStarted from "./components/getStarted/getstarted.jsx";
import Footer from "./components/footer/footer.jsx";

function App() {
  return (
    <>
      <Header />
      <div className="hero-gradient-wrapper">
        <Hero />
      </div>
      
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </>
  );
}

export default App;