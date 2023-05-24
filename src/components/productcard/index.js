import Link from "next/link";
import Image from "next/image";
import { formatPrice, getLabels } from "../../utils/products";

const ProductCard = ({ product }) => {
  const {
    slug,
    id,
    images,
    price,
    sale_price,
    name,
    stock,
    available,
    labels,
  } = product;

  return (
    <Link
      href={`/product/${slug}`}
      key={id}
      className="group w-[50%] mb-1 p-2 lg:w-[20%]"
    >
      <article
        className={`bg-white rounded-xl px-2 py-10 transition hover:drop-shadow-2xl`}
      >
        <div className="image">
          {images && (
            <Image
              src={images[0].url}
              alt={images[0].altText}
              width={150}
              height={250}
              className="mx-auto"
            />
          )}
        </div>
        <div className="p-4 text-neutral-900">
          <div className="price">
            <h4 className="text-2xl">
              {formatPrice(price, sale_price, "small")}
            </h4>
          </div>
          <div className="title">
            <h3 className="text-sm">{name}</h3>
          </div>
          {getLabels(sale_price, stock, available, labels)}
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;