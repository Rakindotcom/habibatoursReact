import React from 'react'
import Hero from '../Components/Hero'
import { useState } from 'react'
import destination1 from '../assets/destination-1.webp';
import destination2 from '../assets/destination-2.webp';
import destination3 from '../assets/destination-3.webp';
import destination4 from '../assets/destination-4.webp';
import { Link } from 'react-router-dom';
import Visit from '../Components/Visit';

const destinations = [
  { img: destination1, title: 'Makkah', subtitle: 'Saudi Arabia' },
  { img: destination2, title: 'Madinah', subtitle: 'Saudi Arabia' },
  { img: destination3, title: 'Lauterbrunnen', subtitle: 'Switzerland' },
  { img: destination4, title: 'Zhangjiajie', subtitle: 'China' },
];

const Home = () => {
  return (
    <>
      <Hero />

      <section className="max-w-[1200px] mx-auto py-20 px-4 sm:px-6 lg:px-8">
        {/* Header Content */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0d213f] mb-3">
              Explore top destinations
            </h2>
            <p className="text-lg sm:text-lg text-[#0d213f] text-justify">
              Explore your suitable and dream places around the world. Here you can find your right destination.
            </p>
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg cursor-pointer group"
            >
              <img
                src={dest.img}
                alt={dest.title}
                className="rounded-lg w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute w-[calc(100%-2rem)] p-4 bottom-[-6rem] left-1/2 transform -translate-x-1/2 text-center text-white bg-white/10 backdrop-blur-sm rounded-lg transition-all duration-300 group-hover:bottom-4">
                <p className="text-sm mb-1">{dest.title}</p>
                <p className="text-base font-semibold">{dest.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        <Link to="/destinations"
          className="inline-block mt-6 bg-[#124186] text-white px-6 py-3 rounded-full font-medium hover:bg-[#092958] transition duration-300 text-center relative left-1/2 transform -translate-x-1/2"
        >
          View All Destinations
        </Link>
      </section>

    
      <Visit />

      <section className="bg-yellow-50 py-12 px-4 text-center">
  <div className="max-w-3xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-[#0d213f] mb-4">
      Explore Moments of Joy & Adventure
    </h2>
    <p className="text-lg text-gray-700 mb-6">
      Dive into our photo gallery and relive the memories from our exciting tours and travel packages.
    </p>
    <a
      href="/gallery"
      className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold text-lg py-3 px-8 rounded-full shadow-lg transition duration-300"
    >
      Visit Our Gallery
    </a>
  </div>
</section>

    </>
  )
}

export default Home