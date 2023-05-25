const ButtonLink = ({ label, url, icon, className, onClick }) => {
  return (
    <button
      className={`${className} bg-transparent text-accent flex items-center justify-center text-sm`}
      onClick={onClick}
    >
      {icon && icon}
      {label && <span className={`${icon && "ml-2"}`}>{label}</span>}
    </button>
  );
};

export default ButtonLink;
