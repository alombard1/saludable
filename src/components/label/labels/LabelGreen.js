const LabelGreen = ({ label }) => {
  return (
    <div className="label mr-1">
      <span
        className={`py-1 px-4 bg-green-600 text-green-200 rounded-xl text-xs font-bold shadow-xl shadow-green-600/20`}
      >
        {label}
      </span>
    </div>
  );
};

export default LabelGreen;
