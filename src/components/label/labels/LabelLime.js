const LabelLime = ({ label }) => {
  return (
    <div className="label mr-1">
      <span
        className={`py-1 px-4 bg-lime-600 text-lime-200 rounded-xl text-xs font-bold shadow-xl shadow-lime-600/20`}
      >
        {label}
      </span>
    </div>
  );
};

export default LabelLime;
