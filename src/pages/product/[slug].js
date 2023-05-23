import Image from "next/image";
import {
  Button,
  Container,
  Footer,
  Input,
  Label,
  Navbar,
  WhatsApp,
} from "../../components";

const getPrice = (price, sale_price) => {
  if (sale_price) {
    return (
      <>
        <span className="regular text-xl line-through text-neutral-400">
          ${price}
        </span>
        <span className="special ml-2 text-3xl font-bold">${sale_price}</span>
      </>
    );
  }

  return <span className="special ml-2 text-3xl font-bold">${price}</span>;
};

const grs = [
  {
    label: "100gr",
    value: 100,
  },
  {
    label: "200gr",
    value: 200,
  },
  {
    label: "300gr",
    value: 300,
  },
  {
    label: "400gr",
    value: 400,
  },
  {
    label: "500gr",
    value: 500,
  },
];

const Product = ({ data }) => {
  return (
    <>
      <Navbar />
      <div id="product" className="bg-slate-100 text-neutral-900">
        <Container>
          <div className="breadcrumbs text-sm p-4">
            Inicio &gt; {data && data.category}{" "}
          </div>
          <article className=" mt-2">
            <div className="lg:flex lg:justify-between">
              <div className="lg:w-1/2">
                <div className="image">
                  {data.images?.length > 0 && (
                    <Image
                      src={data.images[0]?.url}
                      alt={data.images[0]?.alt}
                      width={800}
                      height={800}
                    />
                  )}
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="p-4 lg:p-10">
                  <div className="title text-3xl font-semibold">
                    {data.title}
                  </div>
                  <div className="text-xs text-neutral-600">SKU {data.sku}</div>
                  <div className="labels flex flex-wrap mt-4">
                    {data.sale_price && <Label type="lime" label="¡Oferta!" />}
                    {data.stock && data.stock > 0 && (
                      <Label type="green" label="En stock" />
                    )}
                    {data.labels &&
                      data.labels?.map((label) => {
                        return (
                          <Label
                            key={label.label}
                            type={label.type}
                            label={label.name}
                          />
                        );
                      })}
                  </div>
                  <div className="price mt-4">
                    {getPrice(data.price, data.sale_price)}
                  </div>
                  <div className="quantity mt-10">
                    <div className="formGroup mt-2">
                      <Input
                        type="select"
                        label="Seleccioná la cantidad"
                        data={grs}
                      />
                    </div>
                  </div>
                  <div className="cta mt-10 lg:flex">
                    {data.available ? (
                      <>
                        <Button
                          type="accent"
                          label="Agregar al carrito"
                          icon="cart"
                        />
                        <Button type="transparent" label="Comprar ahora" />
                      </>
                    ) : (
                      <Button
                        type="accent"
                        label="Consultar por stock"
                        icon="cart"
                      />
                    )}
                  </div>
                  <div className="payments mt-10">
                    <div className="text-sm">
                      <span className="text-accent font-bold">
                        10% de descuento
                      </span>{" "}
                      en EFECTIVO al recibir tu pedido
                    </div>
                    <div className="text-sm mt-4">
                      <span className="text-accent font-bold">
                        Medios de pago
                      </span>{" "}
                    </div>
                  </div>
                  <div className="description mt-10 text-neutral-500 text-sm">
                    {data.description}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </Container>
      </div>
      <WhatsApp />
      <Footer />
    </>
  );
};

export default Product;

export const getServerSideProps = async () => {
  /* const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const repo = await res.json(); */
  const data = {
    id: 1,
    title: "Nueces Mariposa Extra Light",
    slug: "nueces-mariposa-extra-light",
    description:
      "Con su característico tamaño más pequeño y su sabor suave, nuestras Nueces Mariposa Extra Light son ideales para aquellos que buscan un bocado ligero y sabroso. Su textura crujiente y su perfil de sabor delicado las convierten en la elección perfecta para aquellos que prefieren algo menos intenso.",
    sku: "NUE001",
    price: 1108,
    sale_price: 760,
    available: true,
    category: "Nueces",
    stock: 14,
    labels: null,
    images: [
      {
        url: "/images/cafe.png",
        alt: "Café",
      },
    ],
  };
  return { props: { data } };
};
