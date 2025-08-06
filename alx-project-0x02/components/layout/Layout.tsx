import Header from "./Header";
import "../../styles/globals.css";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
    </>
  );
};

export default Layout;
