"use client";
import React from "react";
import a from "next/link";
import { Bag, MagnifyingGlass } from "phosphor-react";
import Button from "../DaisyUI/Button";

function MainNav() {
  return (
    <div className="flex py-4 border-b-2 gap-12 items-center   justify-center bg-white ">
      <div className="flex gap-12 ">
        <a to="/">
          <h2 className="text-[#FC2779] font-bold">NYKAA</h2>
        </a>
        <a className="hover:text-[#FC2779]">Categories</a>
        <a className="hover:text-[#FC2779]">Brands</a>
        <a className="hover:text-[#FC2779]">Beauty Advice</a>
      </div>
      <div className="flex gap-6 items-center">
        <div className="bg-gray-100 flex gap-2 items-center  px-2 py-2 rounded-lg">
          <MagnifyingGlass size={24} />
          <input
            type="text"
            placeholder="Search on Nykaa"
            className=" bg-gray-100 outline-none"
          />
        </div>
        <Button
          className={
            "bg-[#E80071] font-bold text-white px-4 py-2 rounded-lg hover:bg-[#ff4da3]"
          }
        >
          Sign in
        </Button>
        <Bag size={24} className="ml-12" />
      </div>
    </div>
  );
}

export default MainNav;
