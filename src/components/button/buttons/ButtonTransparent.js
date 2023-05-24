const ButtonTransparent = ({ label, url, icon, className }) => {
  return (
    <button
      className={`${className} bg-transparent text-accent py-3 px-12 rounded-full flex items-center justify-center font-bold uppercase text-sm`}
    >
      {icon && icon}
      {label && <span className={`${icon && "ml-2"}`}>{label}</span>}
    </button>
  );
};

export default ButtonTransparent;
