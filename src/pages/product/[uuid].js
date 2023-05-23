import Image from "next/image";
import {
  Button,
  Container,
  Footer,
  Label,
  Navbar,
  WhatsApp,
} from "../../components";

const Product = () => {
  return (
    <>
      <Navbar />
      <div id="product" className="bg-slate-100 text-neutral-900">
        <Container>
          <div className="breadcrumbs text-sm p-4">Inicio &gt; Nueces</div>
          <article className=" mt-2">
            <div className="lg:flex lg:justify-between">
              <div className="lg:w-1/2">
                <div className="image">
                  <Image
                    src={"/images/cafe.png"}
                    alt="Titulo"
                    width={800}
                    height={800}
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="p-4 lg:p-10">
                  <div className="title text-3xl font-semibold">
                    Nueces Mariposa Extra Light
                  </div>
                  <div className="text-xs text-neutral-600">SKU NUE001</div>
                  <div className="labels flex flex-wrap mt-4">
                    <Label type="green" label="En stock" />
                    <Label type="lime" label="¡Oferta!" />
                    <Label type="red" label="Sin stock" />
                  </div>
                  <div className="price mt-4">
                    <span className="regular text-xl line-through text-neutral-400">
                      $1.108,87
                    </span>
                    <span className="special ml-2 text-3xl font-bold">
                      $760,00
                    </span>
                  </div>
                  <div className="quantity mt-10">
                    <span className="text-accent font-bold">
                      Seleccioná la cantidad
                    </span>
                    <div className="formGroup mt-2">
                      <select className="py-2 px-14 text-md border border-neutral-400 rounded-full">
                        <option value="">100gr</option>
                        <option value="">200gr</option>
                        <option value="">300gr</option>
                        <option value="">400gr</option>
                        <option value="">500gr</option>
                      </select>
                    </div>
                  </div>
                  <div className="cta mt-10 lg:flex">
                    <Button
                      type="accent"
                      label="Agregar al carrito"
                      icon="cart"
                    />
                    <Button type="transparent" label="Comprar ahora" />
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
                    Con su característico tamaño más pequeño y su sabor suave,
                    nuestras Nueces Mariposa Extra Light son ideales para
                    aquellos que buscan un bocado ligero y sabroso. Su textura
                    crujiente y su perfil de sabor delicado las convierten en la
                    elección perfecta para aquellos que prefieren algo menos
                    intenso.
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
