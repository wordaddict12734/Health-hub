import React from "react";
import Navbar from "./components/Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="flex-grow">{children}</div>
    </>
  );
}

export default Layout;