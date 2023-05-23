const ButtonAccent = ({ label, url, icon }) => {
  return (
    <button className="group bg-accent text-white py-3 px-12 rounded-full flex items-center justify-center font-bold uppercase text-sm shadow-xl shadow-accent/20 hover:bg-white hover:text-dark hover:shadow-none transition">
      {icon && icon}
      {label && <span className={`${icon && "ml-2"}`}>{label}</span>}
    </button>
  );
};

export default ButtonAccent;
