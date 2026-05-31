import ManageFacilites from "@/componets/ManageFacilites";
import { auth } from "@/lib/auth";
import Link from "next/link";
import { headers } from "next/headers";
import { FaArrowRightLong } from "react-icons/fa6";

const ManageMyFacilities = async () => {
    const token = await auth.api.getToken({
        headers: await headers(),
    });

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const user = session?.user;

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ManageMyFacilities`, {
        headers: {
            authorization: `Bearer ${token?.token}`,
        },
        cache: "no-store",
    });

    const result = await res.json();

    const facilities = Array.isArray(result)
        ? result
        : Array.isArray(result?.data)
            ? result.data
            : [];
    const filterData = facilities;

    return (
        <div className="mt-5 max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl text-center font-bold p-5">
                Manage My Facilities
            </h1>

            <div className="flex flex-col gap-5 mb-10">
                {filterData.length > 0 ? (
                    filterData.map((item) => (
                        <ManageFacilites
                            key={item._id}
                            item={item}
                        />
                    ))
                ) : (
                    <div className="flex justify-center">
                        <div className="max-w-md w-full rounded-2xl border border-gray-200 bg-white shadow-lg p-8 text-center">
                            <div className="text-6xl mb-4">🏟️</div>

                            <h2 className="text-2xl font-bold text-gray-800">
                                No Facilities Found
                            </h2>

                            <p className="text-gray-500 mt-2">
                                You have not added any facilities yet.
                            </p>

                            <Link href="/addFacility">
                                <button className="group mt-6 text-[17px] font-bold border-none cursor-pointer rounded-[0.75em] bg-[#C5A358]">
                                    <span className="block border-2 border-[#C5A358] rounded-[0.75em] px-5 py-2 bg-white text-[#C5A358] -translate-y-1 transition-transform duration-100 ease-in hover:translate-y-[-0.33em] active:translate-y-0">
                                        <span className="flex items-center gap-2">
                                            Add Facility
                                            <FaArrowRightLong className="group-hover:translate-x-2 duration-300" />
                                        </span>
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ManageMyFacilities;