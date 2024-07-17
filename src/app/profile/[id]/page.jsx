"use client";
import { usePathname } from "next/navigation";
import React from "react";

export default function Profile({ params }) {
  return (
    <>
      <header className="bg-blue-500 text-white py-4">
        <h1 className="text-3xl font-semibold text-center">Profile</h1>
      </header>
      <div className="container mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
        <div className="flex flex-col items-center">
          <img
            src="https://picsum.photos/200/?random=1"
            alt="Profile Picture"
            className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg mb-4"
          />
          <h1 className="text-3xl font-bold text-gray-800">John Doe</h1>
          <p className="text-xl text-gray-600">Software Engineer</p>
          <p className="text-md text-gray-500 mt-2">{params.id}</p>
        </div>
      </div>
    </>
  );
}
