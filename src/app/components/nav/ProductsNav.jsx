"use client";
import React from "react";
import Link from "next/link";

const linkStyle = "hover:text-[#FC2779] hover:border-b-2 border-[#FC2779] ";

const productLinks = [
  { to: "/blush", label: "Blush" },
  { to: "/bronzer", label: "Bronzer" },
  { to: "/eyebrow", label: "Eye brow" },
  { to: "/eyeliner", label: "Eye liner" },
  { to: "/eyeshadow", label: "Eye shadow" },
  { to: "/foundation", label: "Foundation" },
  { to: "/lipliner", label: "Lip Liner" },
  { to: "/lipstick", label: "Lip Stick" },
  { to: "/mascara", label: "Mascara" },
  { to: "/nailpolish", label: "Nail Polish" },
];

function ProductsNav() {
  return (
    <div className="flex py-4 gap-6 justify-center border-b-2 shadow-lg text-gray-500 bg-white">
      {productLinks.map((product) => (
        <a key={product.to} to={product.to} className={linkStyle}>
          {product.label}
        </a>
      ))}
    </div>
  );
}

export default ProductsNav;
