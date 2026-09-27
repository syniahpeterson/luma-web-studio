import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import navigation from "../../data/navigation";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 8);

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  const getNavigationClassName = ({ isActive }) =>
    `relative inline-flex items-center text-[#b7b7be] transition-colors duration-200 after:absolute after:bottom-[-0.5rem] after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-purple-400 after:transition-transform after:duration-300 hover:text-white hover:after:scale-x-100 ${
      isActive ? "text-purple-300 after:scale-x-100" : ""
    }`;

  const getMobileNavigationClassName = ({ isActive }) =>
    `relative block rounded-lg px-3 py-3 text-[#b7b7be] transition-colors duration-200 after:absolute after:bottom-2 after:left-3 after:right-3 after:h-px after:origin-left after:scale-x-0 after:bg-purple-400 after:transition-transform after:duration-300 hover:bg-white/5 hover:text-white hover:after:scale-x-100 ${
      isActive ? "text-purple-300 after:scale-x-100" : ""
    }`;

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-b before:from-[#0a0a0b]/90 before:via-[#0a0a0b]/50 before:to-transparent before:opacity-0 before:transition-opacity before:duration-300 before:content-[''] ${
        isScrolled
          ? "border-transparent bg-transparent backdrop-blur-md before:opacity-100"
          : "border-white/10 bg-[#0a0a0b]/95"
      }`}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-5 py-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            onClick={closeMenu}
            className="text-lg font-semibold tracking-tight text-white"
          >
            Luma<span className="text-purple-400">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Main navigation" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              {navigation.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    onClick={closeMenu}
                    className={getNavigationClassName}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}

              <li className="pt-2">
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="block rounded-full bg-purple-500 px-4 py-3 text-center text-sm font-medium text-white transition-colors duration-200 hover:bg-purple-400"
                >
                  Start a Project
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#b7b7be] transition-colors duration-200 hover:border-white/20 hover:text-white md:hidden"
          >
            {isMenuOpen ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6l12 12M18 6L6 18"
                />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 7h16M4 12h16M4 17h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="border-t border-white/10 bg-[#0a0a0b]/95 pt-4 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navigation.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    onClick={closeMenu}
                    className={getMobileNavigationClassName}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}

              <li className="pt-2">
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="block rounded-full bg-purple-500 px-4 py-3 text-center text-sm font-medium text-white transition-colors duration-200 hover:bg-purple-400"
                >
                  Start a Project
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
