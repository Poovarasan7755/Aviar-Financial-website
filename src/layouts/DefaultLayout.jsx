import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../container/footer";

export default function DefaultLayout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}
