interface ITopbarProps {
  text: string;
}

const Topbar: React.FC<ITopbarProps> = ({ text }) => {
  return (
    <div className="bg-teal-400 p-3 text-sm text-center font-bold">{text}</div>
  );
};

export default Topbar;
