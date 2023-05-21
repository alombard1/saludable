import IconWheat from "./icons/wheat";

interface IButton {
  style?: string;
  label: string;
  url?: string;
  icon?: string;
}

const STYLES = {
  transparent: "transparent",
};

const ICONS = {
  wheat: "wheat",
};

export const Button: React.FC<IButton> = ({ style, label, url, icon }) => {
  switch (style) {
    case STYLES.transparent:
      return renderTransparent(label, url, icon);
    default:
      return renderAccent(label, url, icon);
  }
};

const setIcon = (icon: string) => {
  switch (icon) {
    case ICONS.wheat:
      return <IconWheat />;

    default:
      break;
  }
};

const renderAccent = (label: string, url?: string, icon?: string) => {
  return (
    <button className="group bg-accent flex items-center text-white py-3 px-12 rounded-full font-bold uppercase text-sm shadow-xl shadow-accent/20 hover:bg-white hover:text-dark hover:shadow-none transition">
      {icon && <div className="icon mr-2">{setIcon(icon)}</div>}
      {label}
    </button>
  );
};

const renderTransparent = (label: string, url?: string, icon?: string) => {
  return (
    <button className="bg-transparent text-accent py-3 px-12 rounded-full font-bold uppercase text-sm ">
      {label}
    </button>
  );
};
