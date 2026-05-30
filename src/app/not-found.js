import React from "react";
import Link from "next/link";
import { MdOutlineErrorOutline } from "react-icons/md";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100 px-4 p-10">
      <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-md w-full border">

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <MdOutlineErrorOutline className="text-[#C5A358] text-6xl" />
        </div>

        <h1 className="text-6xl font-bold text-[#C5A358]">404</h1>

        <h2 className="mt-3 text-xl font-semibold text-gray-800">
          Page Not Found
        </h2>

        <p className="mt-2 text-gray-500">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-block mt-6 px-5 py-2 bg-[#C5A358] text-white rounded-lg hover:bg-[#C5A358] transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;