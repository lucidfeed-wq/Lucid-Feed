import { useState } from "react";
import DarkModeToggle from "../components/DarkModeToggle.jsx";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/index.jsx";
import Footer from "../components/Footer/index.jsx";

const DefaultLayout = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />

      <Outlet />

      <Footer />
      <DarkModeToggle />
    </>
  );
};

export default DefaultLayout;
