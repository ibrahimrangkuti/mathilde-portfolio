import Header from "@/components/General/Header";
import Footer from "@/components/General/Footer";

const MainLayout = ({ children }) => (
  <>
    <Header />
    <main className="container px-2 mx-auto p-5">{children}</main>
    <Footer />
  </>
);

export default MainLayout;
