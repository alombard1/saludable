import { ReactNode } from "react";

interface IContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<IContainerProps> = ({ children, className }) => {
  return <div className={`${className} container md:mx-auto`}>{children}</div>;
};

export default Container;
