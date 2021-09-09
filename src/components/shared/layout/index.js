import Header from "./header";
import Footer from "./footer";

const Layout = ({ children, headerProps, footerProps }) => (
  <div className="border border-light card-content col-4 d-flex flex-column mt-5 mx-auto rounded shadow p-0">
    <Header {...headerProps} />
    <main className="flex-grow-1 px-4">{children}</main>
    <Footer {...footerProps} />
  </div>
);

export default Layout;
