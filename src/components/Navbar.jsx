import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-black bg-opacity-75 w-full z-10">
      <h1 className="text-2xl font-bold text-accent">
        <Link to="/">TheFlexTV</Link>
      </h1>
      <ul className="hidden md:flex space-x-6 text-sm md:text-base md:mr-16">
        <li>
          <Link to="/category/movies" className="hover:text-accent">
            Movies
          </Link>
        </li>
        <li>
          <Link to="/category/tv_shows" className="hover:text-accent">
            TV Shows
          </Link>
        </li>
      </ul>
      <button
        className="block md:hidden text-xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span>☰</span>
      </button>

      {/* Mobile Menu  */}
      {menuOpen && (
        <div
          className={`md:hidden absolute top-16 left-0 w-full bg-black bg-opacity-90 text-white flex flex-col items-center space-y-4 py-6 z-10 `}
        >
          <Link
            to="/category/movies"
            className="hover:text-accent"
            onClick={() => setMenuOpen(false)}
          >
            Movies
          </Link>
          <Link
            to="/category/tv_shows"
            className="hover:text-accent"
            onClick={() => setMenuOpen(false)}
          >
            TV Shows
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
