import { TYPES } from "./InputTypes";

const Input = ({ type, label, data, quantity, maxQuantity, onChange }) => {
  const InputType = TYPES[type];

  return (
    <>
      <label className="text-accent font-bold w-full block mb-2">{label}</label>
      <InputType
        type={type}
        data={data}
        quantity={quantity}
        maxQuantity={maxQuantity}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
