import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Footer from "./footer";

const Layout = () => {
  const { user } = useAuth();

  return (
    <>
      <main>
        <Outlet />
      </main>
      {user && <Footer />}
    </>
  );
};

export default Layout;
