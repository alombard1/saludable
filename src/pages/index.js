import {
  Button,
  Container,
  Footer,
  Navbar,
  ProductCard,
  WhatsApp,
} from "../components";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: 1,
    label: "Cereales",
    url: "/category/cereales",
    image: {
      alt: "Cereales",
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
      alt: "Castañas",
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
      alt: "Café",
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
      alt: "Pasas de uva",
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
      alt: "Almendras",
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
      alt: "Maní",
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
      alt: "Nueces",
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
      alt: "Semillas",
      url: "/images/cafe.png",
    },
    backgroundColor: "bg-accent",
    color: "text-white",
  },
];

export default function Home({ products }) {
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
          <section className="bg-slate-100 p-4">
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
                          {categorie.image && (
                            <Image
                              src={categorie.image.url}
                              alt={categorie.image.alt}
                              width={150}
                              height={250}
                              className="mx-auto"
                            />
                          )}
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
            <section>
              <Container>
                <div className="lg:flex lg:items-center lg:justify-between">
                  <div className="text text-center text-neutral-900 px-14 lg:w-1/3">
                    <h2 className="text-3xl font-semibold">Nueces</h2>
                    <p className="mt-2">
                      ¿Sabías que las nueces son uno de los alimentos más
                      antiguos que se consumen en el mundo?
                    </p>
                    <div className="cta mt-8 mb-8 lg:mb-0">
                      <Button
                        type="accent"
                        label="Más sobre nueces"
                        className="mx-auto"
                      />
                    </div>
                  </div>
                  <div className="image lg:w-2/3">
                    <Image
                      src="/images/photo-wallnuts.jpg"
                      alt="wallnuts"
                      width={960}
                      height={500}
                      className="mx-auto rounded-3xl"
                    />
                  </div>
                </div>
              </Container>
            </section>
          </section>
          <section className="bg-slate-100 p-4">
            <Container className="py-14 lg:py-[10rem]">
              <h2 className="text-accent font-bold uppercase text-xs">
                Novedades
              </h2>
              <div className="categories mt-5 flex flex-wrap justify-between">
                {products &&
                  products.map((product) => (
                    <ProductCard key={product.id} product={product} />
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

export const getServerSideProps = async ({ query }) => {
  const slug = query.slug;
  /* const data2 = getDataBy("/", "slug", slug); */
  try {
    const products = [
      {
        id: 1,
        name: "Nueces Mariposa Extra Light",
        slug: "nueces-mariposa-extra-light",
        description:
          "Con su característico tamaño más pequeño y su sabor suave, nuestras Nueces Mariposa Extra Light son ideales para aquellos que buscan un bocado ligero y sabroso. Su textura crujiente y su perfil de sabor delicado las convierten en la elección perfecta para aquellos que prefieren algo menos intenso.",
        sku: "NUE001",
        price: 1108,
        sale_price: null,
        available: true,
        category: "Nueces",
        stock: 10,
        labels: null,
        images: [
          {
            url: "/images/product-nueces.jpg",
            alt: "Café",
          },
        ],
      },
      {
        id: 2,
        name: "Nueces Mariposa Extra Light",
        slug: "nueces-mariposa-extra-light",
        description:
          "Con su característico tamaño más pequeño y su sabor suave, nuestras Nueces Mariposa Extra Light son ideales para aquellos que buscan un bocado ligero y sabroso. Su textura crujiente y su perfil de sabor delicado las convierten en la elección perfecta para aquellos que prefieren algo menos intenso.",
        sku: "NUE001",
        price: 1108,
        sale_price: null,
        available: false,
        category: "Nueces",
        stock: 10,
        labels: null,
        images: [
          {
            url: "/images/product-almendras.jpg",
            alt: "Café",
          },
        ],
      },
      {
        id: 3,
        name: "Nueces Mariposa Extra Light",
        slug: "nueces-mariposa-extra-light",
        description:
          "Con su característico tamaño más pequeño y su sabor suave, nuestras Nueces Mariposa Extra Light son ideales para aquellos que buscan un bocado ligero y sabroso. Su textura crujiente y su perfil de sabor delicado las convierten en la elección perfecta para aquellos que prefieren algo menos intenso.",
        sku: "NUE001",
        price: 1108,
        sale_price: 760,
        available: true,
        category: "Nueces",
        stock: 10,
        labels: null,
        images: [
          {
            url: "/images/product-almendras.jpg",
            alt: "Café",
          },
        ],
      },
      {
        id: 4,
        name: "Nueces Mariposa Extra Light",
        slug: "nueces-mariposa-extra-light",
        description:
          "Con su característico tamaño más pequeño y su sabor suave, nuestras Nueces Mariposa Extra Light son ideales para aquellos que buscan un bocado ligero y sabroso. Su textura crujiente y su perfil de sabor delicado las convierten en la elección perfecta para aquellos que prefieren algo menos intenso.",
        sku: "NUE001",
        price: 1108,
        sale_price: 760,
        available: true,
        category: "Nueces",
        stock: 10,
        labels: null,
        images: [
          {
            url: "/images/product-nueces.jpg",
            alt: "Café",
          },
        ],
      },
      {
        id: 5,
        name: "Nueces Mariposa Extra Light",
        slug: "nueces-mariposa-extra-light",
        description:
          "Con su característico tamaño más pequeño y su sabor suave, nuestras Nueces Mariposa Extra Light son ideales para aquellos que buscan un bocado ligero y sabroso. Su textura crujiente y su perfil de sabor delicado las convierten en la elección perfecta para aquellos que prefieren algo menos intenso.",
        sku: "NUE001",
        price: 1108,
        sale_price: 760,
        available: true,
        category: "Nueces",
        stock: 10,
        labels: null,
        images: [
          {
            url: "/images/product-nueces.jpg",
            alt: "Café",
          },
        ],
      },
    ];

    return { props: { products } };
  } catch (error) {}
};
