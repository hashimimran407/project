import "./index.css";
import Header from "./components/header/header.jsx";
import Hero from "./components/hero/hero.jsx";
import Companies from "./components/hero/companies/companies.jsx";
import Residencies from './components/residencies/residencies.jsx';
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Companies />
      <Residencies />
    </>
  );
}

export default App;