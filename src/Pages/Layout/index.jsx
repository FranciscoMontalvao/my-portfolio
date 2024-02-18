import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"

export const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
};

      