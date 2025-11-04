import { useState } from "react";
import Sidebar from "../components/Sidebar/index.jsx";
import DarkModeToggle from "../components/DarkModeToggle.jsx";
import Header from "../components/Header/index.jsx";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <div className="relative flex min-h-screen w-full items-start">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="w-full xl:pl-[300px]">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <div className="p-[30px]">
            <Outlet />
          </div>
        </div>
      </div>

      <DarkModeToggle />
    </>
  );
};

export default DefaultLayout;
