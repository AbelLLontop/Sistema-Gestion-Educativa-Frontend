import { Outlet } from "react-router-dom";
import SideNav from "./Sidebar";

const Layout = () => {
  return (
    <div className="bg-gray w-full h-screen grid grid-cols-[auto,1fr] grid-rows-[1fr] overflow-hidden">
      <SideNav />
      <main className="px-16 py-10">
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
