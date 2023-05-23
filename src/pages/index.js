import { Button, Container, Footer, Navbar, WhatsApp } from "../components";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: 1,
    label: "Cereales",
    url: "/category/cereales",
    image: {
      altText: "Cereales",
      url: "/images/cafe.png",
    },
    backgroundColor: "bg-yellow",
    color: "text-brown",
  },
  {
    id: 2,
    label: "Castañas",
    url: "/category/castanas",
    image: {
      altText: "Castañas",
      url: "/images/cafe.png",
    },
    backgroundColor: "bg-salmon",
    color: "text-brown",
  },
  {
    id: 3,
    label: "Café",
    url: "/category/cafe",
    image: {
      altText: "Café",
      url: "/images/cafe.png",
    },
    backgroundColor: "bg-darkGreen",
    color: "text-beige",
  },
  {
    id: 4,
    label: "Pasas de uva",
    url: "/category/pasas-uva",
    image: {
      altText: "Pasas de uva",
      url: "/images/cafe.png",
    },
    backgroundColor: "bg-brown",
    color: "text-gold",
  },
  {
    id: 5,
    label: "Almendras",
    url: "/category/almendras",
    image: {
      altText: "Almendras",
      url: "/images/cafe.png",
    },
    backgroundColor: "bg-lightGray",
    color: "text-brown",
  },
  {
    id: 6,
    label: "Maní",
    url: "/category/mani",
    image: {
      altText: "Maní",
      url: "/images/cafe.png",
    },
    backgroundColor: "bg-beige",
    color: "text-brown",
  },
  {
    id: 7,
    label: "Nueces",
    url: "/category/nueces",
    image: {
      altText: "Nueces",
      url: "/images/cafe.png",
    },
    backgroundColor: "bg-gold",
    color: "text-darkGreen",
  },
  {
    id: 8,
    label: "Semillas",
    url: "/category/semillas",
    image: {
      altText: "Semillas",
      url: "/images/cafe.png",
    },
    backgroundColor: "bg-accent",
    color: "text-white",
  },
];

export default function Home() {
  return (
    <>
      <div id="home">
        <Navbar />
        <main>
          <section className="relative bg-dark bg-[url('/images/bg-cereals.png')] bg-no-repeat bg-center bg-cover p-4 lg:bg-right">
            <div className="absolute bg-gradient-to-r from-black/75 to-transparent w-full h-full left-0 top-0 z-[1]"></div>
            <Container className="relative z-10 py-14 lg:py-[10rem]">
              <div className="info lg:w-1/2">
                <h1 className="text-[3em] leading-[3rem] font-black">
                  Armá tu mix saludable
                </h1>
                <h3 className="text-md leading-8 mt-4">
                  Imaginate la libertad de elegir tus frutos favoritos y
                  combinarlos como más te apetezca. Con nuestro sistema de
                  armado de mix saludables, tenés el poder de crear el combo
                  perfecto para satisfacer tus antojos y cuidar de tu salud al
                  mismo tiempo.
                </h3>
                <div className="cta mt-10">
                  <Button type="accent" label="Armá tu mix" icon="wheat" />
                </div>
              </div>
            </Container>
          </section>
          <section className="bg-light p-4">
            <Container className="py-14 lg:py-[10rem]">
              <h2 className="text-accent font-bold uppercase text-xs">
                Categorías
              </h2>
              <div className="categories mt-5 flex flex-wrap justify-between">
                {categories &&
                  categories.map((categorie) => (
                    <Link
                      href={categorie.url}
                      key={categorie.id}
                      className="group w-[50%] mb-1 p-2 lg:w-[25%]"
                    >
                      <article
                        className={`${categorie.backgroundColor} rounded-xl px-2 py-10 transition hover:drop-shadow-2xl`}
                      >
                        <div className="image">
                          <Image
                            src={categorie.image.url}
                            alt={categorie.image.altText}
                            width={150}
                            height={250}
                            className="mx-auto"
                          />
                        </div>
                        <div
                          className={`label ${categorie.color} uppercase font-semibold text-md text-center`}
                        >
                          {categorie.label}
                        </div>
                      </article>
                    </Link>
                  ))}
              </div>
            </Container>
          </section>
        </main>
      </div>
      <WhatsApp />
      <Footer />
    </>
  );
}
