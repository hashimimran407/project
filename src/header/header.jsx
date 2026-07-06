import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <img src="/logo.png" alt="logo" />

      <nav>
        <a href="#">Residencies</a>
        <a href="#">Our Value</a>
        <a href="#">Contact Us</a>
        <a href="#">Get Started</a>
        <button>Contact</button>
      </nav>
    </header>
  );
};

export default Header;