import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "../../App.css";

import logo from "../../assets/images/homepage/logo.png";

const RegisterPage = () => {
  const [isCraftsman, setIsCraftsman] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { registerWithEmail, registerWithGoogle, registerWithFacebook } =
    useAuth();
  const navigate = useNavigate();

  const homePage = () => {
    navigate("/");
  };
  const registerNow = () => {
    navigate("/RegisterNow");
  };
  const handleSocialRegister = async (
    provider: "google" | "facebook" | "apple"
  ) => {
    setLoading(true);
    setError("");
    try {
      if (provider === "google") {
        await registerWithGoogle(isCraftsman);
      } else if (provider === "facebook") {
        await registerWithFacebook(isCraftsman);
      }
      setError("Registration successful! Redirecting to login...");
      await new Promise((resolve) => setTimeout(resolve, 1500));
      navigate("/login");
    } catch (error: any) {
      if (error.code === "auth/popup-closed-by-user") {
        setError("Sign in popup was closed too soon");
      } else {
        setError(error.message || "Failed to sign in with " + provider);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleEmailRegister = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await registerWithEmail(email, password, isCraftsman);
      navigate(isCraftsman ? "/craftsman-dashboard" : "/customer-dashboard");
    } catch (error: any) {
      switch (error.code) {
        case "auth/email-already-in-use":
          setError("Email already in use");
          break;
        case "auth/invalid-email":
          setError("Invalid email address");
          break;
        case "auth/weak-password":
          setError("Password should be at least 6 characters");
          break;
        case "auth/network-request-failed":
          setError("Network error. Please check your connection");
          break;
        default:
          setError("Registration failed. Please try again");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <img src={logo} alt="Logo" className="logo" onClick={homePage} />

      <div className="role-buttons">
        <button
          className={`role-btn customer ${!isCraftsman ? "active" : ""}`}
          onClick={() => setIsCraftsman(false)}
        >
          Register as customer
        </button>
        <button
          className={`role-btn craftsman ${isCraftsman ? "active" : ""}`}
          onClick={() => setIsCraftsman(true)}
        >
          Register as craftsman
        </button>
      </div>
      <div className="divider"></div>

      {error && (
        <div className="error-message" role="alert">
          {error}
        </div>
      )}

      <button
        className="social-btn google"
        onClick={() => handleSocialRegister("google")}
        disabled={loading}
        aria-label="Continue with Google"
      >
        <i className="fa-brands fa-google"></i> Continue with Google
      </button>

      <button
        className="social-btn facebook"
        onClick={() => handleSocialRegister("facebook")}
        disabled={loading}
        aria-label="Continue with Facebook"
      >
        <i className="fa-brands fa-facebook"></i> Continue with Facebook
      </button>

      <button
        className="social-btn apple"
        onClick={() => handleSocialRegister("apple")}
        disabled={loading}
        aria-label="Continue with Apple"
      >
        <i className="fa-brands fa-apple"></i> Continue with Apple
      </button>

      {showEmailForm ? (
        <form className="email-form" onSubmit={handleEmailRegister}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email"
          />
          <input
            type="password"
            placeholder="Password (min 6 characters)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={6}
            required
            aria-label="Password"
          />
          <button
            type="submit"
            className="register-btn1 "
            disabled={loading}
            aria-label="Register with email"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      ) : (
        <button
          className="register-btn1"
          onClick={() => setShowEmailForm(true)}
          disabled={loading}
          aria-label="Show email registration form"
        >
          <i className="fa-solid fa-envelope"></i>
          With email
        </button>
      )}
      <button className="btn btn-register3" type="button" onClick={registerNow}>
        Register now
      </button>

      <p className="login-link">
        Already an account? <Link to="/login">Register</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
