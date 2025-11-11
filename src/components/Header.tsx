import { useState } from "react";
import SésaraLogo from "../components/logo";
import Champs from "./inputes";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

function Header() {
  const [nav, setNav] = useState(false);

  return (
    <header>
      <nav className="bg-[#FFF8E7] px-4 lg:px-6 py-3 shadow-md border-b-2 border-gray-300">
        <div className="flex flex-wrap items-center justify-between mx-auto max-w-screen-xl">
          
          {/* Logo */}
          <a href="#" className="flex items-center">
            <SésaraLogo />
          </a>

          {/* Menu desktop + mobile */}
          <div
            className={`${
              nav
                ? "flex flex-col w-full mt-4 space-y-4 md:space-y-0 md:mt-0 md:flex-row md:items-center"
                : "hidden md:flex md:items-center"
            } w-full md:w-auto justify-between md:space-x-6`}
          >
            {/* Liens */}
            <ul className="flex flex-col md:flex-row md:gap-6 gap-2 md:items-center text-gray-700 text-base">
                <li>
                  <Link
                    to="/"
                    className="hover:text-green-700 transition-colors"
                  >
                    Accueil
                  </Link>
                </li>

                <li>
                  <Link
                    to="/produits"
                    className="hover:text-green-700 transition-colors"
                  >
                    Produits
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contact"
                    className="hover:text-green-700 transition-colors"
                  >
                    Contact
                  </Link>
                </li>

                <li>
                  <Link
                    to="/a_propos"
                    className="hover:text-green-700 transition-colors"
                  >
                    À propos
                  </Link>
                </li>
            </ul>

            {/* Barre de recherche */}
            <div className="my-2 md:my-0">
              <Champs
                type="searche"
                placeholder="Recherche..."
                className="bg-white border border-gray-300 rounded-md px-4 text-sm h-9 w-44 md:w-60"
              />
            </div>

            {/* Actions */}
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              <Link to="/s'inscrire" className="text-sm text-gray-700 hover:text-green-700">
                S'inscrire
              </Link>

              <Link to="/se_connecter">
                  <button
                      type="button"
                      className="bg-green-600 hover:bg-green-700 text-white text-sm rounded-full px-4 py-2 shadow-md transition"
                    >
                      Se connecter
                  </button>
              </Link>

              {/* Panier */}
              <div className="relative">
                <ShoppingCart className="w-10 h-10 text-[#8C5E3E]" />
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-md font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  0
                </span>
              </div>
            </div>
          </div>

          {/* Bouton mobile */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
              onClick={() => setNav(!nav)}
              aria-label="Menu"
            >
              {nav ? (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
