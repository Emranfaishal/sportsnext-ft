'use client'

import { redirect } from "next/navigation";
import React from "react";
import { MdErrorOutline } from "react-icons/md";

const ErrorPage = () => {
    const handleReload = () => {
        redirect('/allFacilities')
        window.location.reload();
    };

    return (
        <div className="flex items-center justify-center bg-gray-100 px-4 p-10">
            <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-md w-full border">

                {/* Icon */}
                <div className="flex justify-center mb-4">
                    <MdErrorOutline className="text-[#C5A358] text-6xl" />
                </div>

                <h1 className="text-3xl font-bold text-[#C5A358]">
                    Something went wrong
                </h1>

                <p className="mt-3 text-gray-500">
                    An unexpected error has occurred. Please try again.
                </p>

                {/* Retry Button */}
                <button
                    onClick={handleReload}
                    className="mt-6 px-5 py-2 bg-[#C5A358] text-white rounded-lg hover:bg-[#f5d897] transition"
                >
                    Try Again
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;