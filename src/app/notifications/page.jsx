"use client";
import React from "react";

export default function Notifications() {
  return (
    <>
      <header className="bg-blue-500 text-white py-4">
        <h1 className="text-3xl font-semibold text-center">Explore</h1>
      </header>

      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-4">
          <img
            src="https://picsum.photos/200/?random=1"
            alt="Notification Icon"
            className="w-8 h-8"
          />
          <div className="flex-grow">
            <h2 className="text-lg font-semibold">New Message</h2>
            <p className="text-gray-500">
              You have a new message from John Doe.
            </p>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            View
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <img
            src="https://picsum.photos/200?random=2"
            alt="Notification Icon"
            className="w-8 h-8"
          />
          <div className="flex-grow">
            <h2 className="text-lg font-semibold">New Comment</h2>
            <p className="text-gray-500">John Doe commented on your post.</p>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            View
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <img
            src="https://picsum.photos/200?random=3"
            alt="Notification Icon"
            className="w-8 h-8"
          />
          <div className="flex-grow">
            <h2 className="text-lg font-semibold">New Like</h2>
            <p className="text-gray-500">Jane Doe liked your photo.</p>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            View
          </button>
        </div>
      </div>
    </>
  );
}
