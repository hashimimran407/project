import { useState } from "react";
import "./login.css";

const LoginModal = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    alert(`Logged in with: ${email}`);
    onClose();
  };

  return (
    <div className="lm-overlay" onClick={onClose}>
      <div className="lm-bg"></div>

      <div className="lm-card" onClick={(e) => e.stopPropagation()}>
        <button className="lm-close" onClick={onClose}>✕</button>

        <h2>Sign In</h2>
        {error && <p className="lm-error">{error}</p>}

        <form onSubmit={handleSubmit} className="lm-form">
          <div className="lm-field">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="lm-field">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="lm-submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
