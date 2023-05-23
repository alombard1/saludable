import { TYPES } from "./LabelTypes";

const Button = ({ type, label }) => {
  const LabelType = TYPES[type];

  return <LabelType label={label} />;
};

export default Button;
