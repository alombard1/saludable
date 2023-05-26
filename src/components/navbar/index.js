import { useContext, useState } from "react";
import Link from "next/link";
import Topbar from "../topbar";
import Container from "../container";
import CartContext from "../../context/CartContext";
import MobileMenu from "../mobilemenu";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../button";

const Navbar = () => {
  const { getCartLength } = useContext(CartContext);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <Topbar text="¡Envíos en el día a Villa Urquiza!" />
      <nav className="bg-light sticky top-0 z-20">
        <Container className="text-dark flex flex-wrap items-center justify-between p-4 md:p-0 md:py-4">
          <div className="logo w-1/2 font-black text-2xl hidden md:w-1/5 md:block">
            <Link href="/">SALUD</Link>
          </div>
          <div className="search w-3/5">
            <div className="formGroup relative">
              <input
                type="text"
                placeholder="Buscar productos"
                className="bg-slate-100 w-full rounded-full p-4 pr-14"
              />
              <div className="icon absolute right-4 top-1/2 -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="menu w-2/5 md:w-1/5">
            <ul className="flex lg:justify-end">
              <li className="ml-4 hidden lg:block">
                <Link href="/whatsapp">
                  <Button type="link" icon="help" className="text-dark" />
                </Link>
              </li>
              <li className="ml-4 hidden lg:block">
                <Link href="/my-profile">
                  <Button type="link" icon="user" className="text-dark" />
                </Link>
              </li>
              <li className="ml-4">
                <Link href="/cart" className="flex items-start">
                  <Button type="link" icon="cart" className="text-dark" />
                  <div className="number bg-accent rounded-full w-4 h-4 flex items-center justify-center text-[0.55rem] text-light font-bold">
                    {getCartLength()}
                  </div>
                </Link>
              </li>
              <li className="ml-4 lg:hidden">
                <div className="toggler text-right">
                  <button
                    className="flex items-center ml-auto mr-0"
                    onClick={toggleMobileMenu}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 9h16.5m-16.5 6.75h16.5"
                      />
                    </svg>
                    <span className="ml-2 text-sm">Menú</span>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed z-50"
          >
            <MobileMenu
              isOpen={isMobileMenuOpen}
              setIsOpen={setMobileMenuOpen}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
