import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FilterPage from "./components/FilterPage";
import CustomersPage from "./pages/CustomersPage";
import FindHandy from "./pages/FindHandy"; // Ensure the path is correct
import RegisterPage from "./components/registration/RegisterPage";
import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./components/registration/LoginPage";
import RegisterNow from "./components/registration/RegisterNow";
import ResetPassword from "./components/registration/ResetPassword";
import LoggedInFooter from "./components/LoggedInFooter";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/filter" element={<FilterPage />} />
            <Route path="/artisans" element={<Home />} />
            <Route path="/customers" element={<CustomersPage />} />
            <Route path="/FindHandy" element={<FindHandy />} />
            <Route path="/RegisterPage" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registerNow" element={<RegisterNow />} />
            <Route path="/resetPassword" element={<ResetPassword />} />{" "}
          </Routes>
        </div>
        <LoggedInFooter />
      </Router>
    </AuthProvider>
  );
}

export default App;
