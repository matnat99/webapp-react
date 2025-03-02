import Logo from "./ui/Logo";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <Link to="/">
            <Logo width={80} />
          </Link>
          <p className="text-gray-400 text-md mt-2">
            Recensioni e news dal mondo del cinema
          </p>
        </div>
        <div>
          <ul className="flex justify-center space-x-6 text-gray-400">
            <li>
              <Link to="#">Chi siamo</Link>
            </li>
            <li>
              <Link to="#">Contatti</Link>
            </li>
            <li>
              <Link to="#">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Seguici</h3>
          <div>
            <ul className="flex justify-center md:justify-start gap-4 mt-2 text-gray-400 text-xl">
              <li>
                <Link to="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa-brands fa-twitter"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa-brands fa-instagram"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa-brands fa-youtube"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
