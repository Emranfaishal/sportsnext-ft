import { EditModelCard } from '@/componets/EditModelCard';
import { DeleteDetails } from '@/componets/DeleteDetails';
// import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaRegEdit } from "react-icons/fa";
import BookingCard from '@/componets/BookingCard';

const DetailsPage = async ({ params }) => {
    const { id } = await params;
    // console.log(id);
    const res = await fetch(`http://localhost:8000/spots/${id}`);
    const data = await res.json();
    // console.log(data);
    const { description, imageUrl, departureDate, duration, price, category, country, destinationName, _id } = data;
    return (
        <div className='mt-5 container mx-auto p-5'>
            <h1 className='text-4xl font-bold py-5'>Facility Details</h1>

            <div className="p-5 my-5 flex flex-col md:flex-row items-start gap-10 shadow-2xl border rounded-2xl">
                <div className="flex-1">
                    <Image
                        className="h-120 object-cover w-full rounded-2xl"
                        src={imageUrl}
                        alt={destinationName}
                        width={500}
                        height={500}
                    />
                </div>

                <div className="flex-1 space-y-5">
                    <h1 className="text-4xl font-bold tracking-tight">
                        {destinationName}
                    </h1>

                    <div className="flex flex-wrap items-center gap-4 text-gray-700">

                        <p className="flex items-center gap-1 text-lg font-medium">
                            <CiLocationOn className="text-red-500 text-xl" />
                            {country}
                        </p>

                        <span className="w-1 h-1 bg-gray-400 rounded-full"></span>

                        <p className="text-xl font-semibold text-[#C5A358]">
                            Time :
                            <span className="text-lg text-gray-500 font-normal"> {duration}</span>
                        </p>

                    </div>

                    <div className="grid grid-cols-2  gap-4 mt-6">

                        <div className="p-5 rounded-xl bg-gray-50 border hover:shadow-md transition">
                            <h2 className="text-sm text-gray-500">Facility Type</h2>
                            <p className="text-xl font-bold mt-1">{category}</p>
                        </div>

                        <div className="p-5 rounded-xl bg-gray-50 border hover:shadow-md transition">
                            <h2 className="text-sm text-gray-500">Available Slots Date</h2>
                            <p className="text-xl font-bold mt-1">{departureDate}</p>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-lg font-semibold mb-2">About this facility</h3>
                        <p className="text-gray-600 leading-relaxed">
                            {description}
                        </p>
                    </div>

                    <div className='flex gap-5'>
                        <EditModelCard data={data}></EditModelCard>
                        <DeleteDetails data={data}></DeleteDetails>
                    </div>
                    <div className='text-center mt-10'>
                        <BookingCard data={data}></BookingCard>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DetailsPage;