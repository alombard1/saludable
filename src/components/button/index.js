import { ICONS } from "./ButtonIcons";
import { TYPES } from "./ButtonTypes";

const Button = ({ type, label, url, icon, className, onClick }) => {
  const ButtonType = TYPES[type];
  const IconComponent = ICONS[icon];

  return (
    <ButtonType
      label={label}
      url={url}
      icon={IconComponent}
      className={className}
      onClick={onClick}
    />
  );
};

export default Button;
