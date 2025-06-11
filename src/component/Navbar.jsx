import logoImage from '../assets/logoImage.jpeg';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-lg py-2 sticky top-0 z-50 border-b border-[#b88953]">
      <div className="max-w-screen mx-auto flex justify-between items-center px-4">
        {/* Logo and Brand Text (Left) */}
        <div className="flex items-center gap-3">
          <img
            src={logoImage}
            alt="Logo"
            className="w-[56px] h-[56px] object-cover rounded-lg border-2 border-[#b88953] shadow"
          />
          <span className="text-lg font-serif font-bold text-[#7c4a03] select-none tracking-wide uppercase">
            Curry Sauce Co.
          </span>
        </div>
        {/* Navigation Links (Right) */}
        <ul className="flex items-center gap-1">
          <li>
            <Link
              to="/"
              className="text-sm font-normal font-serif uppercase text-[#7c4a03] px-2 py-1 rounded hover:bg-[#f8f4ee] hover:text-[#a15d0d] transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/ProductAndBenfits"
              className="text-sm font-normal font-serif uppercase text-[#7c4a03] px-2 py-1 rounded hover:bg-[#f8f4ee] hover:text-[#a15d0d] transition-colors duration-200"
            >
              Products & Benefits
            </Link>
          </li>
          <li>
            <Link
              to="/CrypSpices"
              className="text-sm font-normal font-serif uppercase text-[#7c4a03] px-2 py-1 rounded hover:bg-[#f8f4ee] hover:text-[#a15d0d] transition-colors duration-200"
            >
              Cryogenic Spices
            </Link>
          </li>
          <li>
            <Link
              to="/healthandBenfits"
              className="text-sm font-normal font-serif uppercase text-[#7c4a03] px-2 py-1 rounded hover:bg-[#f8f4ee] hover:text-[#a15d0d] transition-colors duration-200"
            >
              Health Benefits
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="text-sm font-normal font-serif uppercase text-[#7c4a03] px-2 py-1 rounded hover:bg-[#f8f4ee] hover:text-[#a15d0d] transition-colors duration-200"
            >
              About
            </a>
          </li>
          <li>
            <Link
              to="/FAQ"
              className="text-sm font-normal font-serif uppercase text-[#7c4a03] px-2 py-1 rounded hover:bg-[#f8f4ee] hover:text-[#a15d0d] transition-colors duration-200"
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              to="/Blog"
              className="text-sm font-normal font-serif uppercase text-[#7c4a03] px-2 py-1 rounded hover:bg-[#f8f4ee] hover:text-[#a15d0d] transition-colors duration-200"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/ContactUs"
              className="text-sm font-normal font-serif uppercase text-white bg-[#7c4a03] px-4 py-1 rounded-full shadow hover:bg-[#a15d0d] transition-all duration-200"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
