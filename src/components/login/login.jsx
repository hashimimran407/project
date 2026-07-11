import { useState } from "react";
import "./login.css";

const LoginModal = ({ onClose }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", password: "" });
  const [agreed, setAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => { setIsLoading(false); onClose(); }, 1400);
  };

  const switchMode = () => {
    setIsRegister(!isRegister);
    setFormData({ firstName: "", lastName: "", email: "", password: "" });
    setAgreed(false);
  };

  return (
    <div className="lm-overlay" onClick={onClose}>
      <div className="lm-card" onClick={(e) => e.stopPropagation()}>

        <button className="lm-close" onClick={onClose}>✕</button>
        <div className="lm-logo">
          <span className="lm-logo-hl">H</span>omyz<span className="lm-logo-dot">.</span>
        </div>
        <h2 className="lm-title">
          {isRegister ? "Create an account" : "Welcome back"}
        </h2>
        <p className="lm-subtitle">
          {isRegister ? (
            <>Already have an account?{" "}
              <button className="lm-link" onClick={switchMode}>Log in</button></>
          ) : (
            <>Don't have an account?{" "}
              <button className="lm-link" onClick={switchMode}>Sign up</button></>
          )}
        </p>
        <form className="lm-form" onSubmit={handleSubmit}>

          {isRegister && (
            <div className="lm-row">
              <input
                className="lm-input"
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                className="lm-input"
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <input
            className="lm-input"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            className="lm-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          {!isRegister && (
            <div className="lm-forgot-row">
              <a href="#" className="lm-link">Forgot password?</a>
            </div>
          )}

          {isRegister && (
            <label className="lm-check-label">
              <input
                type="checkbox"
                checked={agreed}
                onChange={() => setAgreed(!agreed)}
                className="lm-checkbox"
              />
              <span>
                I agree to the{" "}
                <a href="#" className="lm-link">Terms &amp; Conditions</a>
              </span>
            </label>
          )}

          <button type="submit" className="lm-submit" disabled={isLoading}>
            {isLoading
              ? <span className="lm-spinner" />
              : isRegister ? "Create account" : "Sign in"}
          </button>
        </form>
        <div className="lm-divider"><span>Or {isRegister ? "register" : "continue"} with</span></div>
        <div className="lm-social">
          <button className="lm-social-btn">
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Google
          </button>
          <button className="lm-social-btn">
            <svg viewBox="0 0 814 1000" width="16" height="16" fill="#000">
              <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.5 135.4-317.3 269-317.3 70.1 0 128.4 46.4 172.5 46.4 42.8 0 109.6-49.1 190.5-49.1zm-134.3-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
            </svg>
            Apple
          </button>
        </div>

      </div>
    </div>
  );
};

export default LoginModal;
