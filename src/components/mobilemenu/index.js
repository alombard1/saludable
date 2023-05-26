import Image from "next/image";
import Link from "next/link";
import Button from "../button";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  {
    id: 1,
    label: "Inicio",
    url: "/",
    icon: "plus",
  },
  {
    id: 2,
    label: "Carrito",
    url: "/cart",
    icon: "plus",
  },
  {
    id: 3,
    label: "Mi cuenta",
    url: "/my-profile",
    icon: "plus",
  },
  {
    id: 4,
    label: "Ayuda",
    url: "/help",
    icon: "plus",
  },
];

const MobileMenu = ({ isOpen, setIsOpen }) => {
  const overlayVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const menuVariants = {
    hidden: {
      x: "-100%",
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const toggleMenu = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobilemenu"
          className="w-full h-screen fixed top-0 z-[999]"
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            id="overlay"
            className="w-full h-screen bg-black/75 z-10"
            variants={overlayVariants}
            onClick={toggleMenu}
          ></motion.div>
          <motion.div
            id="menu"
            className="absolute left-0 top-0 w-4/5 z-20"
            variants={menuVariants}
          >
            <header className="bg-accent p-4">
              <div>
                <Image src="" alt="Saludable" width={200} height={75} />
              </div>
              <div>Hola invitado</div>
            </header>
            <div className="bg-white h-screen overflow-auto py-2">
              <ul>
                {menuItems &&
                  menuItems.map((item) => {
                    return (
                      <li key={item.id}>
                        <Link href={item.url} className="px-4 py-2 block">
                          <Button
                            type="link"
                            icon={item.icon}
                            label={item.label}
                            className="text-dark"
                          />
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
