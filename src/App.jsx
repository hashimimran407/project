import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Header from "./components/header/header.jsx";
import Hero from "./components/hero/hero.jsx";
import Companies from "./components/hero/companies/companies.jsx";
import Residencies from "./components/residencies/residencies.jsx";
import Value from "./components/value/value";
import Contact from "./components/contact/contact";
import GetStarted from "./components/getStarted/getStarted";
import Footer from "./components/footer/footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Header ko Routes se bahar rakha hai taake yeh har page par nazar aaye */}
        <div className="hero-gradient-wrapper">
          <Header />
        </div>

        <Routes>
          {/* Home Page '/' par hum Hero aur Companies dikhayenge */}
          <Route
            path="/"
            element={
              <>
                <div className="hero-gradient-wrapper">
                  <Hero />
                </div>
                <Companies />
              </>
            }
          />

          {/* Baqi sections ke liye alag alag pages/routes */}
          <Route path="/residencies" element={<Residencies />} />
          <Route path="/value" element={<Value />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/get-started" element={<GetStarted />} />
        </Routes>

        {/* Footer bhi har page ke end par nazar aayega */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;