// Hero.jsx
import React from 'react';
import { RiPlayFill } from 'react-icons/ri';
import header1 from '../assets/header-1.webp';
import header2 from '../assets/header-2.webp';
import story from '../assets/story.png';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <header className="bg-[#fafcff] pt-2 px-3 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto py-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex items-center justify-center opacity-0 animate-[slideFromLeft_2s_ease_forwards]">
          <div className="w-full max-w-[400px] grid gap-4">
            <p className="bangla text-[maroon] text-2xl font-bold text-center">
              স্বাগতম
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0d213f] bangla text-center leading-tight">
              হাবিবা ট্যুরস এন্ড ট্রাভেলস
            </h1>
            <p className="text-center text-teal-800 font-extrabold mt-6 bangla text-xl">
              “আমরা আল্লাহর মেহমানদের খাদেম”
            </p>
            <p className="bangla text-base font-medium text-[#0d213f] justifycenter">
              আমাদের সাথে আপনার ভ্রমণ আরও উপভোগ্য করুন। আমরা সেরা ট্রাভেল এজেন্সি হিসেবে
              ট্যুরস, টিকেটিং এবং হজ্ব এজেন্সির সেরা সেবা প্রদান করছি, যাতে আপনার প্রতিটি
              যাত্রা হয় আরামদায়ক ও স্মরণীয়।
            </p>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mt-4">
              {/* Plan a Trip Button */}
              <Link
                to="/pricing"
                className="py-3 px-8 bg-[#124186] text-white rounded-full text-sm font-medium transition duration-300 hover:bg-[#092958] cursor-pointer flex items-center gap-4"
              >
                Plan a Trip
              </Link>

              {/* Watch our story - Now linked to YouTube Shorts */}
              <a
                href="https://www.youtube.com/@humaounkabirmath9175/shorts"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={story}
                    alt="story"
                    className="w-16 h-16 rounded-full shadow-lg"
                  />
                  <span className="absolute top-1/2 left-full transform -translate-x-1/2 -translate-y-1/2 bg-white text-red-500 p-2 rounded-full shadow-lg border border-dark">
                    <RiPlayFill />
                  </span>
                </div>
                <span className="text-base font-semibold text-[#0d213f] whitespace-nowrap pl-1">
                  Watch our story
                </span>
              </a>
            </div>

          </div>
        </div>

        {/* Header Images */}
        <div className="relative flex justify-center items-center min-h-[300px] sm:min-h-[400px]">
          <img
            src={header1}
            alt="header"
            className="absolute top-1/2 left-1/2 transform -translate-x-[75%] -translate-y-1/2 max-w-[250px] sm:max-w-[350px] border-6 border-white rounded-2xl shadow-lg"
          />
          <img
            src={header2}
            alt="header"
            className="absolute top-1/2 left-1/2 transform -translate-y-[25%] max-w-[180px] sm:max-w-[250px] rounded-3xl border-6 border-white"
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;