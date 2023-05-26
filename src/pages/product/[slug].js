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
import { getDataBy } from "../../utils/data";
import { formatPrice, getLabels } from "../../utils/products";
import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";

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

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [price, setPrice] = useState(product.price);
  const [salePrice, setSalePrice] = useState(product.sale_price);
  const [quantity, setQuantity] = useState(1);

  const handleAdd = (product) => {
    addToCart({
      ...product,
      quantity: quantity,
    });
  };

  return (
    <>
      <Navbar />
      <div id="product" className="bg-slate-100 text-neutral-900">
        <Container>
          <div className="breadcrumbs text-sm p-4">
            Inicio &gt; {product && product.category}{" "}
          </div>
          <article className=" mt-2">
            <div className="lg:flex lg:justify-between">
              <div className="lg:w-1/2">
                <div className="image">
                  {product.images?.length > 0 && (
                    <Image
                      src={product.images[0]?.url}
                      alt={product.images[0]?.alt}
                      width={800}
                      height={800}
                    />
                  )}
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="p-4 lg:p-10">
                  <div className="title text-3xl font-semibold">
                    {product.name}
                  </div>
                  <div className="text-xs text-neutral-600">
                    SKU {product.sku}
                  </div>
                  {getLabels(
                    product.sale_price,
                    product.stock,
                    product.available,
                    product.labels
                  )}
                  <div className="price mt-4">
                    {formatPrice(price, salePrice)}
                  </div>
                  <div className="quantity mt-10 lg:flex">
                    <div className="formGroup mt-2">
                      <Input type="select" label="Peso" data={grs} />
                    </div>
                    <div className="formGroup mt-2 lg:ml-4">
                      <Input
                        type="quantity"
                        label="Cantidad"
                        quantity={quantity}
                        maxQuantity={product.stock}
                        onChange={(newQuantity) => {
                          setQuantity(newQuantity);
                          setPrice(product.price * newQuantity);
                          setSalePrice(product.sale_price * newQuantity);
                        }}
                      />
                    </div>
                  </div>
                  <div className="cta mt-10 lg:flex">
                    {product.available && product.stock > 0 ? (
                      <>
                        <Button
                          type="accent"
                          label="Agregar al carrito"
                          icon="cart"
                          className="mx-auto"
                          onClick={() => handleAdd(product)}
                        />
                        <Button
                          type="transparent"
                          label="Comprar ahora"
                          className="mx-auto mt-4 lg:mt-0"
                        />
                      </>
                    ) : (
                      <Button
                        type="accent"
                        label="Consultar por stock"
                        className="mx-auto"
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
                    {product.description}
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

export const getServerSideProps = async ({ query }) => {
  const slug = query.slug;
  /* const data2 = getDataBy("/", "slug", slug); */
  try {
    const product = {
      id: 1,
      name: "Nueces Mariposa Extra Light",
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
          url: "/images/product-nueces.jpg",
          alt: "Café",
        },
      ],
    };

    return { props: { product } };
  } catch (error) {}
};
