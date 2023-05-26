import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Button, Container, Footer, Navbar, WhatsApp } from "../../components";
import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "../../utils/products";
import { goTo } from "../../utils/location";

export default function Cart() {
  const { getCart, getCartLength, getCartTotal, removeFromCart, emptyCart } =
    useContext(CartContext);
  const cart = getCart();

  const cartEmpty = () => {
    return (
      <>
        <div className="flex items-center justify-center">
          <div className="text-center py-14">
            <h2 className="text-2xl">Tu carrito está vacío</h2>
            <h4 className="mt-2">
              Te invitamos a recorrer la tienda encontrar lo que estás buscando
            </h4>
            <div className="mt-8">
              <Button
                type="accent"
                label="Ver productos"
                className="mx-auto"
                onClick={() => goTo("/")}
              />
            </div>
          </div>
        </div>
      </>
    );
  };

  const cartWithItems = () => {
    return (
      <>
        {cart &&
          cart.map((product) => {
            return (
              <article
                key={product.id}
                className="flex flex-wrap items-center justify-between py-4"
              >
                <div className="image w-1/5">
                  {product.images?.length > 0 && (
                    <Image
                      src={product.images[0]?.url}
                      alt={product.images[0]?.alt}
                      width={100}
                      height={100}
                    />
                  )}
                </div>
                <div className="font-semibold w-4/5 pl-4 lg:w-3/5">
                  {product.name}
                </div>
                <div className="w-1/2 flex justify-end lg:w-1/5">
                  {product.quantity}
                </div>
                <div className="w-1/2 flex justify-end lg:w-1/5">
                  {formatPrice(product.price, product.sale_price, "small")}
                </div>
                <div className="w-full">
                  <Button
                    type="link"
                    label="Eliminar"
                    className="text-xs"
                    onClick={() => removeFromCart(product.id)}
                  />
                </div>
              </article>
            );
          })}
        <div className="flex items-center justify-between py-10">
          <div>
            <Button
              type="link"
              label="Vaciar carrito"
              onClick={() => emptyCart()}
            />
          </div>
          <div className="text-2xl font-semibold">Total ${getCartTotal()}</div>
        </div>
        <div className="pt-10">
          <Link href="/checkout">
            <Button
              type="accent"
              label="Finalizar compra"
              className="mr-0 ml-auto"
            />
          </Link>
        </div>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div id="cart" className="bg-slate-100 text-neutral-900 lg:py-10">
        <Container>
          <div className="bg-white p-4 divide-y lg:p-10">
            {getCartLength() > 0 ? cartWithItems() : cartEmpty()}
          </div>
        </Container>
      </div>
      <WhatsApp />
      <Footer />
    </>
  );
}
