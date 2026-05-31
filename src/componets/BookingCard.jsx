"use client";

import { authClient } from "@/lib/auth-client";
import toast from 'react-hot-toast';
import {
    Button,
    DateField,
    Input,
    Label,
    Modal,
    Surface,
    TextField,
} from "@heroui/react";
import { useState } from "react";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import { redirect } from "next/navigation";

const BookingCard = ({ data }) => {
    const {
        imageUrl,
        price,
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
            imageUrl,
            price,
            country,
            hours,
            departureDate: departureDateData
                ? new Date(departureDateData)
                : null,
        };
        const { data: tokenData } = await authClient.token();
        console.log(tokenData)
        // console.log("Booking Data:", bookingData);
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(bookingData)
        });
        const data = await res.json();
        if (data) {
            toast.success('your booked success');
            redirect('/allFacilities');
        }
        else {
            toast.error('no booked success');
        }
    };

    return (
        <div>
            <Modal>
                <Modal.Trigger>
                    <Button variant="ghost" className={'rounded-lg text-[#C5A358]'}> <FaExternalLinkAlt /> Booking Now
                    </Button>
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
                                            isRequired
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
                                                min="10"
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
                                            <Button type="submit" variant="ghost" className={'rounded-lg w-full bg-gray-200 text-[#C5A358]'}> <FaExternalLinkAlt /> Confirm Booking
                                            </Button>
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