import Header from "./components/header";
import Footer from "./components/footer";

const Layout = ({ children, headerProps, footerProps }) => (
  <div className="border border-light card-content col-4 d-flex flex-column mt-5 mx-auto rounded shadow p-0">
    <Header {...headerProps} />
    <main className="flex-grow-1">{children}</main>
    <Footer {...footerProps} />
  </div>
);

export default Layout;
