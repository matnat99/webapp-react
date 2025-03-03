import { Link, NavLink } from "react-router-dom";
import Logo from "./ui/Logo";
import Heading from "./ui/Heading";

export default function Header() {
  return (
    <header className="bg-blue-800 py-2 px-4 shadow-md shadow-black rounded-b-md">
      <div className="flex justify-center items-center max-w-7xl mx-auto gap-4">
        <div className="flex items-center gap-4">
          <Link to="/">
            <Logo width={80} rounded="rounded-full" />
          </Link>
          <Link to="/">
            <Heading level={2}>MovieMeter</Heading>
          </Link>
        </div>
      </div>
    </header>
  );
}
