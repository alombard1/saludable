import Link from "next/link";
import Topbar from "../topbar";
import Container from "../container";

const items = [
  {
    id: 1,
    label: "Inicio",
    url: "/",
  },
  {
    id: 2,
    label: "Carrito",
    url: "/cart",
  },
];

const Navbar = () => {
  return (
    <>
      <Topbar text="¡Envíos en el día a Villa Urquiza!" />
      <nav className="bg-light sticky top-0">
        <Container className="text-dark flex flex-wrap items-center justify-between py-4">
          <div className="logo w-1/2 font-black text-2xl lg:w-1/5">
            <Link href="/">SALUDABLE</Link>
          </div>
          <div className="toggler w-1/2 text-right lg:hidden">
            <button className="flex items-center ml-auto mr-0">
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
          <div className="search w-full mt-3 lg:w-3/5 lg:mt-0">
            <input
              type="text"
              placeholder="Buscá tu producto!"
              className="bg-slate-100 w-full p-4"
            />
          </div>
          <div className="menu w-full hidden lg:block lg:w-1/5">
            <ul className="flex lg:justify-end">
              {items &&
                items.map((item) => (
                  <li key={item.id} className="ml-4">
                    <Link href={item.url}>{item.label}</Link>
                  </li>
                ))}
            </ul>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
