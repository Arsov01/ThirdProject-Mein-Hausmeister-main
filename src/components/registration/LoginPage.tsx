import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "../../App.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { loginWithEmail, resetPassword } = useAuth();
  const navigate = useNavigate();

  const handleRegisterNow = () => {
    navigate("/registerNow");
  };

  const handleResetPasswordPage = () => {
    navigate("/resetPassword");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await loginWithEmail(email, password);
      setEmail("");
      setPassword("");
      navigate("/", {
        replace: true,
        state: { fromLogin: true },
      });
    } catch (error: any) {
      setError(getFirebaseErrorMessage(error.code || error.message));
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordReset = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email first");
      return;
    }

    try {
      await resetPassword(email);
      alert(`Password reset email sent to ${email}`);
    } catch (error: any) {
      setError(getFirebaseErrorMessage(error.code));
    }
  };

  const getFirebaseErrorMessage = (code: string) => {
    switch (code) {
      case "auth/invalid-email":
        return "Invalid email address";
      case "auth/user-not-found":
        return "No account found with this email";
      case "auth/wrong-password":
        return "Incorrect password";
      case "auth/too-many-requests":
        return "Too many attempts. Account temporarily locked.";
      case "auth/email-not-verified":
        return "Please verify your email first. Check your inbox.";
      default:
        return "Login failed. Please try again.";
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <i
          className="fa-solid fa-chevron-left arrow-back"
          onClick={handleRegisterNow}
          aria-label="Back to registration"
          role="button"
        ></i>
        <h1 className="auth-title">Welcome back</h1>
        <p className="auth-subtitle">Log in with your account</p>{" "}
        <form onSubmit={handleSubmit} className="auth-form">
          {error && <div className="error-message">{error}</div>}

          <div className="form-group">
            <i className="fa-regular fa-envelope"></i>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
              autoComplete="email"
            />
          </div>

          <div className="form-group">
            <i className="fa-solid fa-lock icons2"></i>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
              autoComplete="current-password"
            />
            <div className="forgot-password-container">
              <a
                href="#"
                className="forgot-password-link"
                onClick={(e) => {
                  handlePasswordReset(e);
                  handleResetPasswordPage();
                }}
              >
                Forgot password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="auth-button"
            disabled={loading}
            aria-label={loading ? "Logging in" : "Log in"}
          >
            {loading ? "Loading..." : "Log in"}{" "}
          </button>
        </form>
        <div className="auth-divider">
          <span className="divider-text">Or</span>
        </div>
        <div className="social-login">
          <button
            className="social-button google"
            aria-label="Continue with Google"
          >
            <span className="social-icon">
              <svg viewBox="0 0 24 24" width="18" height="18">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
              </svg>
            </span>
            <span>Go on with Google</span>
          </button>

          <button className="social-button facebook">
            <span className="social-icon">
              <svg viewBox="0 0 24 24" width="18" height="18">
                <path
                  fill="#1877F2"
                  d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
                />
              </svg>
            </span>
            <span>Continue with Facebook</span>
          </button>

          <button className="social-button apple">
            <span className="social-icon">
              <svg viewBox="0 0 24 24" width="18" height="18">
                <path
                  fill="#000000"
                  d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
                />
              </svg>
            </span>
            <span>Continue with Apple</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
