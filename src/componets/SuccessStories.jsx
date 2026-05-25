'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa6";
import { MdOutlineAutoStories } from "react-icons/md";

const SuccessStories = () => {

    const stories = [
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop",
            name: "Max & David",
            review:
                "Max found a forever home with David after being adopted from a local shelter, and they’ve been inseparable ever since.",
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=1200&auto=format&fit=crop",
            name: "Luna & Emma",
            review:
                "Luna brought endless joy and companionship to Emma’s family after being rescued and cared for with love.",
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200&auto=format&fit=crop",
            name: "Charlie & Mia",
            review:
                "Charlie’s playful spirit filled Mia’s home with happiness after being adopted from a rescue center.",
        }
    ];

    return (
        <section className="relative py-24 bg-gradient-to-b from-white to-yellow-50 overflow-hidden">

            {/* Background Blur */}
            <div className="absolute top-10 left-0 w-72 h-72 bg-amber-200/20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-200/20 blur-3xl rounded-full"></div>

            <div className="relative max-w-6xl mx-auto px-6">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto"
                >

                    <span className="inline-flex items-center gap-2 bg-amber-100 text-amber-600 px-5 py-2 rounded-full text-sm font-semibold shadow-sm">
                        <MdOutlineAutoStories />
                        Success Stories
                    </span>

                    <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mt-6 leading-tight">
                        Success
                        <span className="text-amber-400"> Stories </span>
                        From PetVerse
                    </h2>

                    <p className="text-slate-600 text-lg leading-8 mt-6">
                        Every adoption creates a beautiful story filled with love,
                        happiness, and unforgettable memories.
                    </p>

                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">

                    {stories.map((story, index) => (
                        <motion.div
                            key={story.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.2,
                            }}
                            viewport={{ once: true }}
                            whileHover={{ y: -6 }}
                            className="group bg-white border border-amber-100 hover:border-amber-300 rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300"
                        >

                            {/* Top */}
                            <div className="flex items-center gap-4">

                                {/* Image */}
                                <div className="relative overflow-hidden rounded-2xl shrink-0">
                                    <Image
                                        src={story.image}
                                        alt={story.name}
                                        width={110}
                                        height={110}
                                        className="w-28 h-28 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>

                                {/* Content */}
                                <div>

                                    {/* Badge */}
                                    <div className="inline-flex items-center gap-1 bg-amber-100 text-amber-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                                        <FaStar className="text-[10px]" />
                                        Happy Adoption
                                    </div>

                                    {/* Name */}
                                    <h3 className="text-xl font-bold text-slate-900">
                                        {story.name}
                                    </h3>

                                    {/* Quote */}
                                    <div className="flex items-start gap-2 mt-3">
                                        <FaQuoteLeft className="text-amber-400 mt-1 text-sm shrink-0" />

                                        <p className="text-slate-600 text-sm leading-6">
                                            {story.review}
                                        </p>
                                    </div>

                                </div>
                            </div>

                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default SuccessStories;


