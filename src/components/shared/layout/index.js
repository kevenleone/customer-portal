import Header from "./header";
import Footer from "./footer";

const Layout = ({ children, headerProps, footerProps }) => (
  <div className="border border-light card-content col-4 mt-5 mx-auto p-4 rounded shadow">
    <Header {...headerProps} />
    <main>{children}</main>
    <Footer {...footerProps} />
  </div>
);

export default Layout;
