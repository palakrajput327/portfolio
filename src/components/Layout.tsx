import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-cream dark:bg-night-bg transition-colors duration-300">
      <Navbar />
      <div className="flex-1 relative overflow-hidden">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
