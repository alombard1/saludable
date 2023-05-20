import { Button } from "@/components/button";
import Container from "@/components/container";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const categories = [
  {
    id: 1,
    label: "Café",
    url: "/category/cafe",
    image: {
      altText: "Café",
      url: "/images/cafe.png",
    },
    backgroundColor: "#163011",
    color: "#c99b6a",
  },
  {
    id: 2,
    label: "Café",
    url: "/category/cafe",
    image: {
      altText: "Café",
      url: "/images/cafe.png",
    },
    backgroundColor: "#163011",
    color: "#c99b6a",
  },
  {
    id: 3,
    label: "Café",
    url: "/category/cafe",
    image: {
      altText: "Café",
      url: "/images/cafe.png",
    },
    backgroundColor: "#163011",
    color: "#c99b6a",
  },
  {
    id: 4,
    label: "Café",
    url: "/category/cafe",
    image: {
      altText: "Café",
      url: "/images/cafe.png",
    },
    backgroundColor: "#163011",
    color: "#c99b6a",
  },
];

export default function Home() {
  return (
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
                combinarlos como más te apetezca. Con nuestro sistema de armado
                de mix saludables, tenés el poder de crear el combo perfecto
                para satisfacer tus antojos y cuidar de tu salud al mismo
                tiempo.
              </h3>
              <div className="cta mt-10">
                <Button label="Armá tu mix" url="/mix" style="accent" />
              </div>
            </div>
          </Container>
        </section>
        <section className="bg-light p-4">
          <Container className="py-14 lg:py-[10rem]">
            <h2 className="text-accent font-bold uppercase text-xs">
              Categorías
            </h2>
            <div className="categories mt-5 flex flex-wrap">
              {categories &&
                categories.map((categorie) => (
                  <Link
                    href={categorie.url}
                    key={categorie.id}
                    className="w-[48%] mr-1 mb-1 lg:w-[24%]"
                  >
                    <article
                      //className={`bg-${categorie.backgroundColor} text-[${categorie.color}] rounded-xl`}
                      className={`bg-[#163011] rounded-xl p-10`}
                    >
                      <div className="image">
                        <Image
                          src={categorie.image.url}
                          alt={categorie.image.altText}
                          width={150}
                          height={150}
                          className="mx-auto"
                        />
                      </div>
                      <div className="label text-[#C99B6A] uppercase font-semibold text-md text-center">
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
  );
}
