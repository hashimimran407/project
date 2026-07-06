import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <span className="logo-text">Homyz</span>
        <span className="logo-dot"></span>
      </div>
      <nav className="header-nav">
        <a href="#">Residencies</a>
        <a href="#">Our Value</a>
        <a href="#">Contact Us</a>
        <a href="#">Get Started</a>
        <button className="contact-btn">Contact</button>
      </nav>
    </header>
  );
};

export default Header;
