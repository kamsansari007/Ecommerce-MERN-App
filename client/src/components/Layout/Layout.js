import React from "react";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <div>
        <Header />
        <main>
          <Toaster />
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

Layout.defaultProps = {
  title: "ECommerce-App | Shop-Now",
  description: "mern stack project",
  keywords: "mern, react,mongoDB, express",
  author: "Kamran",
};
export default Layout;
