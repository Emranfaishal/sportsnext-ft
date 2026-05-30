import { BookingDelete } from "@/componets/BookingDelete";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";

const MyBookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;
  console.log(user);

  const res = await fetch(`http://localhost:8000/bookings/${user?.id}`, {
    cache: "no-store",
  });

  const bookings = await res.json();
  

  return (
    <div className="max-w-7xl mx-auto px-5 py-10">
      <h2 className="text-5xl font-bold text-center mb-10">
        My Bookings
      </h2>

      {bookings.length === 0 ? (
        <div className="text-center text-gray-500 text-xl">
          No bookings found
        </div>
      ) : (
        <div className="space-y-8">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="bg-white border rounded-2xl shadow-lg p-5 flex flex-col md:flex-row-reverse gap-6 items-center"
            >
              {/* Image Right Side */}
              <div className="relative h-64 w-full md:w-88 shrink-0">
                <Image
                  src={booking?.imageUrl}
                  alt={booking?.destinationName}
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <div>
                {user.userName}
              </div>

              {/* Text Right Side */}

              <div className="flex flex-col  flex-1 space-y-3">
                <div className="space-y-2">
                  <p className="font-semibold text-gray-800">
                    UserName : {user?.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    UserEmail : {user?.email}
                  </p>
                </div>
                <h3 className="text-3xl font-bold text-gray-800">
                  {booking?.destinationName}
                </h3>

                <p className="text-gray-600">
                  <span className="font-semibold">Country:</span>{" "}
                  {booking?.country}
                </p>




                {/* <p className="text-gray-600">
                  <span className="font-semibold">Departure:</span>{" "}
                  {booking?.departureDate}
                </p> */}
                <p className="text-gray-600">
                 Date : {new Date(booking?.departureDate).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>



                <p className="text-gray-600">
                  <span className="font-semibold">Price:</span> $
                  {booking?.price}
                </p>

                <BookingDelete booking={booking._id}></BookingDelete>


              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookingPage;