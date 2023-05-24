import { Label } from "../components";

export const formatPrice = (price, sale_price, type) => {
  if (sale_price) {
    return (
      <div className="md:flex md:items-start">
        <div className="price">
          <span
            className={`regular ${
              type === "small" ? "text-sm" : "text-xl"
            } line-through text-neutral-400`}
          >
            ${price}
          </span>
        </div>
        <div className="salePrice md:ml-2">
          <span
            className={`special ${
              type === "small" ? "text-`xl" : "text-3xl"
            } font-bold`}
          >
            ${sale_price}
          </span>
        </div>
      </div>
    );
  }

  return (
    <span
      className={`special ${
        type === "small" ? "text-`xl" : "text-3xl"
      } font-bold`}
    >
      ${price}
    </span>
  );
};

export const getLabels = (sale_price, stock, available, labels) => {
  return (
    <div className="labels flex flex-wrap mt-4">
      {sale_price && <Label type="lime" label="¡Oferta!" />}
      {stock && stock > 0 && available ? (
        <Label type="green" label="En stock" />
      ) : (
        <Label type="red" label="Sin stock" />
      )}
      {labels &&
        labels?.map((label) => {
          return (
            <Label key={label.label} type={label.type} label={label.name} />
          );
        })}
    </div>
  );
};
