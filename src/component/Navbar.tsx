import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Cart from "./Cart";
// import logo from "../assets/react.svg";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("menu-open");
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.classList.remove("menu-open");
  };

  return (
    <nav className="bg-secondary-light dark:bg-secondary text-text-light dark:text-text-dark py-2 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="text-2xl font-bold">
            <h3>BEST BUY</h3>
          </NavLink>

          <div className="hidden md:flex items-center space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-accent font-semibold transition-colors"
                  : "hover:text-accent transition-colors"
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/add_products"
              className={({ isActive }) =>
                isActive
                  ? "text-accent font-semibold transition-colors"
                  : "hover:text-accent transition-colors"
              }
            >
              Add-Product
            </NavLink>

            <Cart />
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <Cart />
            <button
              className="text-text-light dark:text-text-dark focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute left-0 right-0 top-full bg-primary-light dark:bg-primary shadow-lg"
            >
              <div className="flex flex-col space-y-4 p-4">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-accent font-semibold transition-colors"
                      : "hover:text-accent transition-colors"
                  }
                  onClick={closeMenu}
                  end
                >
                  Home
                </NavLink>
                <NavLink
                  to="/add_products"
                  className={({ isActive }) =>
                    isActive
                      ? "text-accent font-semibold transition-colors"
                      : "hover:text-accent transition-colors"
                  }
                  onClick={closeMenu}
                >
                  Add-Product
                </NavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
