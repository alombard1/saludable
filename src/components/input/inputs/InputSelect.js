const InputSelect = ({ data }) => {
  return (
    <select className="h-10 py-2 px-14 text-md border border-neutral-400 rounded-full">
      {data &&
        data.map((item) => {
          {
            return (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            );
          }
        })}
    </select>
  );
};

export default InputSelect;
