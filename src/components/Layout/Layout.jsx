import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation"; // Ваше меню

const Layout = () => (
  <div>
    <header>
      <Navigation />
    </header>
    <main>
      <Outlet />
    </main>
  </div>
);

export default Layout;
