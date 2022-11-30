import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../container/footer";
import { Sidebar } from "../Pages";
export default function FormsLayout() {
  return (
    <>
      <Sidebar />
      <Outlet />
      <div className="loan-footer">
        <Footer />
      </div>
    </>
  );
}
