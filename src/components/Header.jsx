import { Link, NavLink } from "react-router-dom";
import Logo from "./ui/Logo";

export default function Header() {
  return (
    <header className="bg-blue-800 py-2 px-4 shadow-md shadow-black">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/">
          <Logo width={80} rounded={"rounded-full"} />
        </Link>
        <ul className="text-white flex gap-4 text-md">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="#">Film</NavLink>
          </li>
          <li>
            <NavLink to="#">Serie Tv</NavLink>
          </li>
          <li>
            <NavLink to="#">Trova Cinema</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
