import { TYPES } from "./InputTypes";

const Input = ({ type, label, data }) => {
  const InputType = TYPES[type];

  return (
    <>
      <label className="text-accent font-bold w-full block mb-2">{label}</label>
      <InputType type={type} data={data} />
    </>
  );
};

export default Input;
