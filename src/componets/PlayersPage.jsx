'use client'
import { motion } from "framer-motion";
import { Avatar } from "@heroui/react";
import Marquee from "react-fast-marquee";

const testimonials = [
    {
        text: "Super smooth booking experience.",
        name: "Oliver Smith",
        sport: "Football",
        image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=1",
    },
    {
        text: "Amazing facilities and friendly support.",
        name: "Sophia Lee",
        sport: "Tennis",
        image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=2",
    },
    {
        text: "Booking a ground has never been easier.",
        name: "James Brown",
        sport: "Cricket",
        image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=3",
    },
    {
        text: "Loved the seamless user interface.",
        name: "Emma Wilson",
        sport: "Basketball",
        image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=4",
    },
    {
        text: "Very reliable and quick booking process.",
        name: "Noah Davis",
        sport: "Badminton",
        image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=5",
    },
    {
        text: "The best platform for sports enthusiasts.",
        name: "Liam Johnson",
        sport: "Football",
        image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=6",
    },
    {
        text: "Easy payment and instant confirmation.",
        name: "Ava Martinez",
        sport: "Volleyball",
        image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=7",
    },
    {
        text: "I found my favorite sports venue here.",
        name: "Ethan Clark",
        sport: "Cricket",
        image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=8",
    },
    {
        text: "Everything works perfectly every time.",
        name: "Mia Anderson",
        sport: "Swimming",
        image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=9",
    },
    {
        text: "Very smooth and professional service.",
        name: "Lucas Walker",
        sport: "Tennis",
        image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=10",
    },
    {
        text: "Highly recommended for sports lovers.",
        name: "Charlotte Hall",
        sport: "Hockey",
        image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=11",
    },
    {
        text: "Fast booking with zero hassle.",
        name: "Benjamin Allen",
        sport: "Football",
        image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=12",
    },
    {
        text: "The design and experience are excellent.",
        name: "Amelia Young",
        sport: "Basketball",
        image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=13",
    },
    {
        text: "Customer support was extremely helpful.",
        name: "Henry King",
        sport: "Cricket",
        image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=14",
    },
    {
        text: "Great sports facilities at affordable prices.",
        name: "Evelyn Scott",
        sport: "Badminton",
        image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=15",
    },
    {
        text: "I book all my matches from this platform now.",
        name: "Alexander Green",
        sport: "Football",
        image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=16",
    },
    {
        text: "Very clean UI and easy navigation.",
        name: "Harper Adams",
        sport: "Tennis",
        image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=17",
    },
    {
        text: "Excellent service and trusted platform.",
        name: "Daniel Baker",
        sport: "Swimming",
        image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=18",
    },
    {
        text: "Perfect for organizing sports events.",
        name: "Ella Nelson",
        sport: "Volleyball",
        image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=19",
    },
    {
        text: "Simple, fast, and very convenient.",
        name: "Michael Carter",
        sport: "Cricket",
        image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=20",
    },
];

const playersPage = () => {
    return (

        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-10 mb-10"
        >
            <section className="relative flex items-center overflow-hidden">
                <div className="container mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-bold">
                            What <span className="text-[#C5A358]">Players Say</span>
                        </h2>
                        <p className="text-gray-500 mt-2">
                            Real feedback from SportNest users
                        </p>
                    </div>

                    <Marquee pauseOnHover speed={50} gradient={false}>
                        {testimonials.map((t, i) => (
                            <div
                                key={i}
                                className="mx-4 w-70 h-50 bg-[#F7F3ED] shadow-md rounded-xl p-5 border"
                            >
                                <Avatar>
                                    <Avatar.Image alt="John Doe" src={t.image} />
                                    <Avatar.Fallback>JD</Avatar.Fallback>
                                </Avatar>
                                <p className="text-gray-600 italic">“{t.text}”</p>

                                <div className="mt-4">
                                    <p className="font-semibold text-gray-800">{t.name}</p>
                                    <p className="text-sm text-gray-500">{t.sport}</p>
                                </div>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </section>
        </motion.div>
    );
};

export default playersPage;