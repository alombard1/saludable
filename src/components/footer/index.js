import { Container } from "../index";

const Footer = () => {
  return (
    <footer className="bg-slate-900 px-4 py-10">
      <Container>
        <div className="lg:flex lg:justify-between">
          <div className="w-full lg:w-1/4">
            <p className="text-xs text-slate-500">
              Copyright Saludable ® - 2023
            </p>
          </div>
          <div className="w-full lg:w-1/4">
            <span className="text-accent font-bold">Políticas</span>
          </div>
          <div className="w-full lg:w-1/4">
            <span className="text-accent font-bold">Nosotros</span>
          </div>
          <div className="w-full lg:w-1/4">
            <span className="text-accent font-bold">Contáctanos</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
