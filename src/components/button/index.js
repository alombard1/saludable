import { ICONS } from "./ButtonIcons";
import { TYPES } from "./ButtonTypes";

const Button = ({ type, label, url, icon }) => {
  const ButtonType = TYPES[type];
  const IconComponent = ICONS[icon];

  return <ButtonType label={label} url={url} icon={IconComponent} />;
};

export default Button;
