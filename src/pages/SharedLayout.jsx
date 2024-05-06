import { Outlet } from "react-router-dom";

export default function SharedLayout() {
  return (
    <div>
      <h2>Navbar</h2>
      <Outlet />
      <h2>Footer</h2>
    </div>
  );
}
