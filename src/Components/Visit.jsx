import React from 'react';
import travelImage from '../assets/HabibaTours/5.jpg';

const Visit = () => {
    return (
        <section className="bg-[#fafcff] py-24 relative overflow-hidden">
            {/* Decorative background shapes */}
            <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] bg-teal-100 rounded-full opacity-30 z-0"></div>
            <div className="absolute bottom-[-60px] left-[-60px] w-[250px] h-[250px] bg-yellow-100 rounded-full opacity-20 z-0"></div>

            <div className="relative z-10 max-w-[1200px] mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                {/* Text content */}
                <div className="text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0d213f] leading-tight mb-6">
                        Discover Your <span className="text-teal-600">Perfect Trip</span> Package
                    </h2>
                    <p className="text-lg text-[#0d213f] mb-8 text-justify">
                        Explore breathtaking destinations tailored to your dreams. Whether you’re seeking adventure, peace, or romance—we’ve got the ideal package just for you.
                    </p>
                    <a
                        href="/pricing"
                        className="inline-block bg-teal-600 text-white text-lg font-semibold py-3 px-8 rounded-full hover:bg-teal-700 transition duration-300 shadow-md"
                    >
                        Explore Packages
                    </a>
                </div>

                {/* Image section */}
                <div className="flex justify-center">
                    <img
                        src={travelImage}
                        alt="Dream destination"
                        className="rounded-2xl shadow-xl w-2/3 max-w-sm object-cover border-2 border-teal-800"
                    />
                </div>
            </div>
        </section>
    );
};

export default Visit;