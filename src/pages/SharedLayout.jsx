import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

export default function SharedLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <h2>Footer</h2>
    </div>
  );
}
