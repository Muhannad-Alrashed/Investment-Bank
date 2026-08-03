// src/components/layout/RootLayout.tsx
import { Outlet } from "react-router-dom";
import NavBar from "./components/layout/Navbar";
import SideBar from "./components/common/Sidebar";
import PageNav from "./components/common/PageNav";
import Landing from "./components/ui/Landing";

const RootLayout = () => {
  return (
    <div className="min-h-screen">
      {/*Nav Bar Section */}
      <NavBar />

      <main className="w-full">
        <Landing />

        <SideBar />

        <Outlet />

        <PageNav />
      </main>

      {/*Footer Section */}
      <footer className="footer"></footer>
    </div>
  );
};

export default RootLayout;
