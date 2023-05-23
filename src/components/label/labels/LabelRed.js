const LabelRed = ({ label }) => {
  return (
    <div className="label mr-1">
      <span
        className={`py-1 px-4 bg-red-600 text-red-200 rounded-xl text-xs font-bold shadow-xl shadow-red-600/20`}
      >
        {label}
      </span>
    </div>
  );
};

export default LabelRed;
