import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const SportsCard = ({ data }) => {
    const { description, imageUrl, departureDate, duration, price, category, country, destinationName, _id } = data;
    return (
        <div className="group bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">

            {/* Image */}
            <div className="relative h-65 w-full overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={destinationName}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                />

                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-slate-800 text-sm font-bold px-3 py-1 rounded-full shadow-sm">
                    {category}
                </span>
            </div>

            {/* Content */}
            <div className="p-5 space-y-2">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                        {destinationName}
                    </h2>

                    <p className="text-gray-500 text-sm">{country}</p>
                </div>

                <p className="text-gray-600 line-clamp-3">
                    {description}
                </p>

                {/* Info */}
                <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
                    <div className="bg-gray-100 rounded-lg p-3">
                        <p className="font-semibold">Departure</p>
                        <p>{departureDate}</p>
                    </div>

                    <div className="bg-gray-100 rounded-lg p-3">
                        <p className="font-semibold">Duration</p>
                        <p>{duration} min</p>
                    </div>
                </div>

                {/* Price & Button */}
                <div className="flex items-center justify-between pt-2">
                    <div>
                        <p className="text-gray-500 text-sm">Starting Price </p>
                        <h3 className="text-2xl font-bold text-[#C5A358]">
                            ${price}
                        </h3>
                    </div>

                    <Link href={`/allFacilities/${_id}`} >
                        <Button variant="ghost" className={' mt-5 text-[#C5A358]'}> <FaExternalLinkAlt /> View Details</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SportsCard;