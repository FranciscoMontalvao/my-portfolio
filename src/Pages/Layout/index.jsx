import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"

export const Layout = ({ children, setPage }) => {
  return (
    <div className="flex flex-col min-h-screen w-screen px-5">
      <Header setPage={setPage} />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
};

      