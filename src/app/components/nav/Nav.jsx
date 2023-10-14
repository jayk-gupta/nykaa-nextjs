"use client";
import React from "react";
import MainNav from "./MainNav";
import ProductsNav from "./ProductsNav";

function Nav() {
  return (
    <div className="sticky top-0 z-50">
      <MainNav />
      <ProductsNav />
    </div>
  );
}

export default Nav;
