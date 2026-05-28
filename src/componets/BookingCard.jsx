"use client";

import { authClient } from "@/lib/auth-client";
import {
    DateField,
    Input,
    Label,
    Modal,
    Surface,
    TextField,
} from "@heroui/react";
import { useState } from "react";
import { MdOutlineBookmarkAdd } from "react-icons/md";

const BookingCard = ({ data }) => {
    const {
        imageUrl,
        departureDate,
        duration,
        price,
        category,
        country,
        destinationName,
        _id,
    } = data;

    const [departureDateData, setDepartureDateData] = useState(null);
    const [hours, setHours] = useState(1);

    const { data: session, isPending } = authClient.useSession();

    if (isPending) {
        return null;
    }

    const user = session?.user;

    const handleBooking = async (e) => {
        e.preventDefault();

        if (!user) {
            alert("Please login first");
            return;
        }

        const bookingData = {
            userId: user?.id,
            userImage: user?.image,
            userName: user?.name,
            destinationNameId: _id,
            destinationName,
            price,
            country,
            hours,
            departureDate: departureDateData
                ? new Date(departureDateData)
                : null,
        };

        // console.log("Booking Data:", bookingData);
        const res = await fetch('http://localhost:8000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
        const data = await res.json();
        console.log(data);
    };

    return (
        <div>
            <Modal>
                <Modal.Trigger>
                    <button className="w-full rounded-[0.75em] bg-black border-none cursor-pointer text-[17px] font-bold">
                        <span className="block border-2 border-black rounded-[0.75em] px-5 py-2 bg-[#C5A358] text-white translate-y-[-0.2em] transition-transform duration-100 ease-in hover:-translate-y-[0.33em] active:translate-y-0">
                            <span className="flex items-center gap-2">
                                <MdOutlineBookmarkAdd />
                                Book Now
                            </span>
                        </span>
                    </button>
                </Modal.Trigger>

                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-md mt-10">
                            <Modal.CloseTrigger />

                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <form
                                        onSubmit={handleBooking}
                                        className="flex flex-col gap-4"
                                    >
                                        <TextField
                                            defaultValue={destinationName}
                                            className="w-full"
                                            name="facilityName"
                                        >
                                            <Label>Facility Name</Label>
                                            <Input
                                                required
                                                placeholder="Enter facility name"
                                            />
                                        </TextField>

                                        <DateField
                                            onChange={setDepartureDateData}
                                            className="w-full"
                                            name="date"
                                        >
                                            <Label>Booking Date</Label>

                                            <DateField.Group>
                                                <DateField.Input>
                                                    {(segment) => (
                                                        <DateField.Segment segment={segment} />
                                                    )}
                                                </DateField.Input>
                                            </DateField.Group>
                                        </DateField>

                                        <TextField className="w-full" name="hours">
                                            <Label>Hours</Label>

                                            <Input
                                                required
                                                type="number"
                                                min="1"
                                                value={hours}
                                                onChange={(e) =>
                                                    setHours(Number(e.target.value))
                                                }
                                                placeholder="Enter hours"
                                            />
                                        </TextField>

                                        <div className="p-4 rounded-xl bg-gray-100 border">
                                            <p className="text-sm text-gray-500">Price</p>

                                            <h2 className="text-2xl font-bold text-green-600">
                                                ${price}
                                            </h2>
                                        </div>

                                        <Modal.Footer>
                                            <button
                                                type="submit"
                                                className="w-full rounded-[0.75em] bg-black border-none cursor-pointer text-[17px] font-bold"
                                            >
                                                <span className="block border-2 border-black rounded-[0.75em] px-5 py-2 bg-[#C5A358] text-white -translate-y-[0.2em] transition-transform duration-100 ease-in hover:-translate-y-[0.33em] active:translate-y-0">
                                                    Confirm Booking
                                                </span>
                                            </button>
                                        </Modal.Footer>
                                    </form>
                                </Surface>
                            </Modal.Body>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default BookingCard;