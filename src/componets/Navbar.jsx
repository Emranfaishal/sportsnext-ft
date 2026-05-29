"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { MdOutlineLogin } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiHome } from "react-icons/bi";
import { TbCategory } from "react-icons/tb";
import { Avatar, Button, Dropdown, Label } from "@heroui/react";
import { TbPlayFootball } from "react-icons/tb";
import { TbBrandBooking } from "react-icons/tb";
import { CiSquarePlus } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { MdLogout } from "react-icons/md";

const NavbarPage = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const { data: session, isPending } = authClient.useSession();

    if (isPending) {
        return null;
    }

    const user = session?.user;

    const logout = async () => {
        await authClient.signOut();
    };

    return (
        <nav className="bg-white shadow-md w-full">
            <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4">

                {/* Logo */}
                <div className="flex">
                    <h2 className="flex items-center gap-2 text-2xl font-bold text-[#C5A358]">
                        <TbPlayFootball /> SportsNest
                    </h2>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8">
                    <li>
                        <Link
                            href={"/"}
                            className="flex items-center font-bold gap-1 text-gray-700 hover:text-gray-500 hover:underline"
                        >
                            <BiHome />
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link
                            href={"/allFacilities"}
                            className="flex items-center font-bold gap-1 text-gray-700 hover:text-gray-500 hover:underline"
                        >
                            <TbCategory /> All Facilities
                        </Link>
                    </li>

                    {
                        user && (
                            <li>
                                <Link
                                    href={"/myBookings"}
                                    className="flex items-center gap-1 font-bold text-gray-700 hover:text-gray-500 hover:underline"
                                >
                                    <TbBrandBooking /> My Bookings
                                </Link>
                            </li>
                        )
                    }
                </ul>

                {/* Right Side */}
                <div className="hidden md:flex items-center gap-4">

                    {
                        user ? (
                            <Dropdown>
                                <Button
                                    variant="secondary"
                                    className="px-4 py-2 rounded-lg"
                                >
                                    <Avatar size="sm">
                                        <Avatar.Image
                                            src={user?.image}
                                            alt={user?.name}
                                            referrerPolicy="no-referrer"
                                        />
                                        <Avatar.Fallback>
                                            {user?.name?.[0]}
                                        </Avatar.Fallback>
                                    </Avatar>

                                    <span className="text-black">
                                        {user?.name}
                                    </span>

                                    <RiArrowDropDownLine className="text-2xl text-black" />
                                </Button>

                                <Dropdown.Popover>
                                    <Dropdown.Menu>

                                        <Dropdown.Item textValue="user">
                                            <Label>
                                                <p className="text-muted">
                                                    Signed in with
                                                </p>
                                                <p>{user?.email}</p>
                                            </Label>
                                        </Dropdown.Item>



                                        <Dropdown.Item textValue="Add Facility">
                                            <Link
                                                href={"/addFacility"}
                                                className="flex items-center gap-2 w-full"
                                            >
                                                <CiSquarePlus />  Add Facility
                                            </Link>
                                        </Dropdown.Item>

                                        <Dropdown.Item textValue="Profile">
                                            <Link
                                                href={"/profile"}
                                                className="flex items-center gap-2 w-full"
                                            >
                                                <CgProfile /> Profile
                                            </Link>
                                        </Dropdown.Item>

                                        <Dropdown.Item
                                            onClick={logout}
                                            variant="danger"
                                            textValue="Logout"
                                            className="flex items-center text-red-500"
                                        >
                                            <MdLogout /> Logout
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown.Popover>
                            </Dropdown>
                        ) : (
                            <>
                                <Link href={"/login"}>
                                    <button className="text-[17px] font-bold rounded-[0.75em] bg-green-800 hover:scale-105 duration-300">
                                        <span className="block border-2  rounded-[0.75em] px-5 py-2 bg-white duration-100">
                                            <span className="flex items-center gap-1">
                                                <MdOutlineLogin />
                                                Login
                                            </span>
                                        </span>
                                    </button>
                                </Link>
                                <Link href={"/singUp"}>
                                    <button className="text-[17px] font-bold rounded-[0.75em] bg-green-800 hover:scale-105 duration-300">
                                        <span className="block border-2  rounded-[0.75em] px-5 py-2 bg-white duration-100">
                                            <span className="flex items-center gap-1">
                                                <MdOutlineLogin />
                                                Sign Up
                                            </span>
                                        </span>
                                    </button>
                                </Link>
                            </>
                        )
                    }
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-3xl text-gray-800"
                >
                    {menuOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </div>

            {/* Mobile Menu */}
            {
                menuOpen && (
                    <div className="md:hidden flex flex-col gap-4 px-6 pb-5">

                        <Link
                            href={"/"}
                            className="text-gray-700 font-medium hover:text-green-800"
                        >
                            Home
                        </Link>

                        <Link
                            href={"/allFacilities"}
                            className="text-gray-700 font-medium hover:text-green-800"
                        >
                            All Facilities
                        </Link>

                        {
                            user ? (
                                <>
                                    <Link
                                        href={"/myBookings"}
                                        className="text-gray-700 font-medium hover:text-green-800"
                                    >
                                        My Bookings
                                    </Link>

                                    <Link
                                        href={"/addFacility"}
                                        className="text-gray-700 font-medium hover:text-green-800"
                                    >
                                        Add Facility
                                    </Link>

                                    <Link
                                        href={"/profile"}
                                        className="text-gray-700 font-medium hover:text-green-800"
                                    >
                                        Profile
                                    </Link>

                                    <button
                                        onClick={logout}
                                        className="text-left text-red-500 font-medium"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <div className="flex items-center gap-4">
                                    <Link href={"/login"}>
                                        <button className="text-[17px] font-bold rounded-[0.75em] bg-green-800">
                                            <span className="block border-2 border-green-800 rounded-[0.75em] px-5 py-2 bg-white text-green-800">
                                                <span className="flex items-center gap-1">
                                                    <MdOutlineLogin />
                                                    Login
                                                </span>
                                            </span>
                                        </button>
                                    </Link>

                                    <Link
                                        href={"/singUp"}
                                        className="font-medium text-green-800"
                                    >
                                        Sign Up
                                    </Link>
                                </div>
                            )
                        }
                    </div>
                )
            }
        </nav>
    );
};

export default NavbarPage;