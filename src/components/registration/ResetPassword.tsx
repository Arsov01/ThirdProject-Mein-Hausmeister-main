import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../../App.css";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const { resetPassword } = useAuth();
  const navigate = useNavigate();

  const LoginPage = () => {
    navigate("/login");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!email.trim()) {
      setError("Please enter your email address");
      return;
    }

    try {
      await resetPassword(email);
      setMessage("Password reset email sent! Please check your inbox.");
      setTimeout(() => navigate("/login"), 3000);
    } catch (error) {
      console.error("Password reset error:", error);
      setError(
        error.message || "Failed to send reset email. Please try again."
      );
    }
  };

  return (
    <div className="reset-password-screen">
      <i
        className="fa-solid fa-chevron-left arrow-back2"
        onClick={LoginPage}
      ></i>

      <div className="reset-password-content">
        <h1 className="reset-password-title">Reset password</h1>
        <p className="reset-password-subtitle">
          Enter your email address, we will send you a confirmation code by
          email.
        </p>

        {message && (
          <div className="reset-password-message success">{message}</div>
        )}
        {error && <div className="reset-password-message error">{error}</div>}

        <form
          onSubmit={handleSubmit}
          className="reset-password-form form-group"
        >
          <i className="fa-regular fa-envelope icons3"></i>

          <input
            type="email"
            placeholder="E-mail"
            className="reset-password-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </form>
      </div>

      <div className="reset-password-footer">
        <button
          type="submit"
          className="reset-password-button"
          onClick={handleSubmit}
        >
          Reset password
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
