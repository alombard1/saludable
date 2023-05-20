interface IButton {
  style?: string;
  label: string;
  url?: string;
  icon?: string;
}

const STYLES = {
  transparent: "transparent",
};

const renderAccent = (label: string, url?: string, icon?: string) => {
  return (
    <button className="group bg-accent flex items-center text-white py-3 px-12 rounded-full font-bold uppercase text-sm shadow-xl shadow-accent/20 hover:bg-white hover:text-dark hover:shadow-none transition">
      {icon && icon === "wheat" && (
        <div className="icon mr-2">
          <svg
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_4_20)">
              <path
                d="M16.5 13.75C16.5 11.562 15.6308 9.46354 14.0836 7.91637C12.5365 6.36919 10.438 5.5 8.25 5.5H4.125V8.25C4.125 10.438 4.99419 12.5365 6.54137 14.0836C8.08854 15.6308 10.187 16.5 12.375 16.5H16.5"
                stroke="white"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:stroke-black transition"
              />
              <path
                d="M16.5 19.25C16.5 17.062 17.3692 14.9635 18.9164 13.4164C20.4635 11.8692 22.562 11 24.75 11H28.875V12.375C28.875 14.563 28.0058 16.6615 26.4586 18.2086C24.9115 19.7558 22.813 20.625 20.625 20.625H16.5"
                stroke="white"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:stroke-black transition"
              />
              <path
                d="M16.5 27.5V13.75"
                stroke="white"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:stroke-black transition"
              />
            </g>
            <defs>
              <clipPath id="clip0_4_20">
                <rect width="33" height="33" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      )}
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

export const Button: React.FC<IButton> = ({ style, label, url, icon }) => {
  switch (style) {
    case STYLES.transparent:
      return renderTransparent(label, url, icon);
    default:
      return renderAccent(label, url, icon);
  }
};
