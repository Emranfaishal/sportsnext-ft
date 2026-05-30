'use client'
import { Card, FieldError, Input, Label, TextField, Select, ListBox, TextArea, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";


const AddFacility = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const fromData = new FormData(e.currentTarget);
        const facility = Object.fromEntries(fromData.entries());
        console.log(facility);
        const res = await fetch('http://localhost:8000/spots', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(facility)
        });
        const data = await res.json();
        toast.success('New Facility Added SuccessFully')
        redirect('/allFacilities');
    }

    return (
        <div className="max-w-7xl mx-auto p-4">
            <h2 className="font-bold text-5xl text-center p-5">Add A New Facility</h2>
            <Card >

                <form
                    onSubmit={onSubmit}
                    className="p-5 space-y-8"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Destination Name */}
                        <div className="md:col-span-2">
                            <TextField name="destinationName" isRequired>
                                <Label>Name</Label>
                                <Input placeholder="Enter Facility Name" className="rounded-xl" />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Country */}
                        <TextField name="country" isRequired>
                            <Label>Country</Label>
                            <Input placeholder="country" className="rounded-xl" />
                            <FieldError />
                        </TextField>

                        {/* Category - Updated Select Component */}
                        <div>
                            <Select
                                name="category"
                                isRequired
                                className="w-full"
                                placeholder="Select Facility type"
                            >
                                <Label>Facility Type</Label>
                                <Select.Trigger className="rounded-xl">
                                    <Select.Value />
                                    <Select.Indicator />
                                </Select.Trigger>
                                <Select.Popover>
                                    <ListBox>
                                        <ListBox.Item id="Football" textValue="Football">
                                            Football
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Cricket" textValue="Cricket">
                                            Cricket
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Tennis" textValue="Tennis">
                                            Tennis
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Badmitnton" textValue="Badmitnton">
                                            Badmitnton
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Basketball" textValue="Basketball">
                                            Basketball
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Volleyball" textValue="Volleyball">
                                            Volleyball
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Other" textValue="Other">
                                            Other
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                        </div>

                        {/* Price */}
                        <TextField name="price" type="number" isRequired>
                            <Label>Price</Label>
                            <Input
                                type="number"
                                placeholder="$900"
                                className="rounded-2xl"
                            />
                            <FieldError />
                        </TextField>

                        {/* Duration */}
                        <TextField name="duration" isRequired>
                            <Label>Duration Time</Label>
                            <Input
                                placeholder="5 min"
                                className="rounded-xl"
                            />
                            <FieldError />
                        </TextField>

                        {/* Departure Date */}
                        <div className="md:col-span-2">
                            <TextField name="departureDate" type="date" isRequired>
                                <Label>Departure Date</Label>
                                <Input type="date" className="rounded-xl" />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Image URL - Removed preview */}
                        <div className="md:col-span-2">
                            <TextField name="imageUrl" isRequired>
                                <Label>Image URL</Label>
                                <Input
                                    type="url"
                                    placeholder="https://example.com/bali-paradise.jpg"
                                    className="rounded-xl"
                                />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Description */}
                        <div className="md:col-span-2">
                            <TextField name="description" isRequired>
                                <Label>Description</Label>
                                <TextArea
                                    placeholder="Describe the travel experience..."
                                    className="rounded-xl"
                                />
                                <FieldError />
                            </TextField>
                        </div>
                    </div>

                    {/* Buttons */}

                    <Button
                        type="submit"
                        variant="outline"
                        className=" rounded-lg w-full bg-[#C5A358] text-white"
                    >
                        Add Facility
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default AddFacility;