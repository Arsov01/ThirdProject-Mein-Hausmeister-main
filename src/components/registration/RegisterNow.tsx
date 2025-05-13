import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "../../App.css";
import logo from "../../assets/images/homepage/logo.png";

const RegisterNow = () => {
  const [isCraftsman, setIsCraftsman] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    telephone: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { registerWithEmail } = useAuth();
  const navigate = useNavigate();

  const homePage = () => {
    navigate("/");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError("Password should be at least 6 characters");
      setLoading(false);
      return;
    }

    try {
      await registerWithEmail(
        formData.email,
        formData.password,
        isCraftsman,
        { name: formData.name, telephone: formData.telephone } // Pass additional data
      );

      navigate("/login", { state: { registeredEmail: formData.email } });
    } catch (error) {
      console.error("Registration error:", error);
      setError(getFirebaseErrorMessage(error.code));
    } finally {
      setLoading(false);
    }
  };

  const getFirebaseErrorMessage = (code: string) => {
    switch (code) {
      case "auth/email-already-in-use":
        return "Email already in use";
      case "auth/invalid-email":
        return "Invalid email address";
      case "auth/weak-password":
        return "Password should be at least 6 characters";
      case "auth/operation-not-allowed":
        return "Email/password accounts are not enabled";
      default:
        return "Registration failed. Please try again";
    }
  };

  return (
    <div className="register-now-container">
      <img src={logo} alt="Logo" className="logo" onClick={homePage} />

      <div className="role-buttons">
        <button
          type="button"
          className={`role-btn ${!isCraftsman ? "active" : ""}`}
          onClick={() => setIsCraftsman(false)}
          disabled={loading}
        >
          Register as customer
        </button>
        <button
          type="button"
          className={`role-btn ${isCraftsman ? "active" : ""}`}
          onClick={() => setIsCraftsman(true)}
          disabled={loading}
        >
          Register as craftsman
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit} className="register-now-form">
        <div className="form-group">
          <i className="fa-regular fa-user"></i>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <i className="fa-regular fa-envelope"></i>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <i className="fa-solid fa-lock icons"></i>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={6}
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <i className="fa-solid fa-lock icons"></i>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            minLength={6}
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <i className="fa-solid fa-phone icons"></i>
          <input
            type="tel"
            name="telephone"
            placeholder="Telephone number"
            value={formData.telephone}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>

        <button type="submit" className="register-btn" disabled={loading}>
          {loading ? (
            <>
              <i className="fa-solid fa-spinner fa-spin"></i> Registering...
            </>
          ) : (
            "Register"
          )}
        </button>
      </form>

      <p className="login-link">
        Already an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default RegisterNow;
