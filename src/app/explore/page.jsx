"use client";
import React from "react";

export default function Explore() {
  const imageElements = [];
  for (let i = 0; i < 9; i++) {
    imageElements.push(
      <img
        key={i}
        src={`https://picsum.photos/2160/?random=${i + 1}`}
        alt={`Image ${i + 1}`}
        className="w-full h-full object-cover"
      />
    );
  }

  return (
    <>
      <header className="bg-blue-500 text-white py-4">
        <h1 className="text-3xl font-semibold text-center">Explore</h1>
      </header>
      <div className="container mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
        <div className="grid grid-cols-3 gap-4">{imageElements}</div>
      </div>
    </>
  );
}
