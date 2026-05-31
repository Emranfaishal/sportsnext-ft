import Image from "next/image";
import { MdSportsVolleyball } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { EditModelCard } from "./EditModelCard";
import { DeleteDetails } from "./DeleteDetails";

const ManageFacilites = ({ item }) => {
    console.log('item', item);
    const { category, country, departureDate, description, destinationName, duration, imageUrl, price, _id } = item;

    return (
        <div className="px-5">

            <div className="shadow-xl border flex flex-col md:flex-row gap-10 p-5 rounded-xl">
                <div>
                    <Image
                        className="object-cover rounded-xl h-50 w-50"
                        src={imageUrl}
                        alt={destinationName}
                        width={200}
                        height={200}
                    />
                </div>

                <div className="flex-1 space-y-2">
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold">{destinationName}</h1>
                        <div className="flex gap-2">
                            <EditModelCard data={item}></EditModelCard>
                            <DeleteDetails data={item}></DeleteDetails>
                        </div>

                    </div>
                    <h1 className="flex gap-1 items-center"> <span className="flex gap-1 text-muted items-center" ><MdSportsVolleyball /> Facility Type: </span>   <span className="font-semibold">{country}</span></h1>
                    <h1 className=" flex gap-1 items-center"> <span className="flex gap-1 text-muted items-center"><CiLocationOn /> Location:</span> <span className="font-semibold">{country}</span></h1>
                    <h1 className=""> <span className="text-muted">Price Per Hour:</span>  <span className="font-semibold">${price}</span></h1>
                   
                </div>
            </div>

        </div>
    );
};

export default ManageFacilites;