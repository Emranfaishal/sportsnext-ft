import Link from "next/link";
import SportsCard from "./SportsCard";
import { Button } from "@heroui/react";


const SportsBannerPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/sportsPage`);
    const dataPage = await res.json();
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-5xl font-bold">Featured Facilities</h2>
                    <p className="text-gray-500 text-center mt-3">Discover our most popular and highly rated sports facilities</p>
                </div>
                <Link href={'/allFacilities'}>
                    <Button variant="" className={"bg-[#e5c682] hover:bg-[#b89344] text-[#0F172A] font-semibold px-8 py-3 rounded-xl transition duration-300"}>All Facilities</Button>
                </Link>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
                {
                    dataPage.map(data => <SportsCard key={data._id} data={data}></SportsCard>)
                }
            </div>
        </div>
    );
};

export default SportsBannerPage;