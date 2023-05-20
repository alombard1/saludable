interface IButton {
  style?: string;
  label: string;
  url?: string;
}

const STYLES = {
  transparent: "transparent",
};

const renderAccent = (label: string, url?: string) => {
  return (
    <button className="bg-accent text-white py-3 px-12 rounded-full font-bold uppercase text-sm hover:bg-white hover:text-dark transition">
      {label}
    </button>
  );
};

const renderTransparent = (label: string, url?: string) => {
  return (
    <button className="bg-transparent text-accent py-3 px-12 rounded-full font-bold uppercase text-sm ">
      {label}
    </button>
  );
};

export const Button: React.FC<IButton> = ({ style, label, url }) => {
  switch (style) {
    case STYLES.transparent:
      return renderTransparent(label, url);
    default:
      return renderAccent(label, url);
  }
};
