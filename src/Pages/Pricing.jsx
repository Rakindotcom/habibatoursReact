import React from 'react';

const Pricing = () => {
  return (
    <div className="bg-white text-gray-900 py-10 px-4 sm:px-6 md:px-10 lg:px-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-teal-800 mb-10 bangla">
        উমরাহ প্যাকেজ <span className="font-bold text-teal-800">২০২৫</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
        {/* সাধারণ প্যাকেজ */}
        <div className="bg-blue-100 p-5 sm:p-6 rounded-2xl shadow-lg border-2 flex flex-col justify-between">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-4 bangla">
              সাধারণ প্যাকেজ <span className="font-bold text-teal-800">১,২০,০০০/-</span>
            </h3>
            <p className="mb-2 bangla text-sm sm:text-base">
              প্যাকেজ সময় (যাতায়াতসহ) <span className="font-bold text-teal-800">১৫</span> দিন
            </p>
            <ul className="list-disc list-inside text-sm space-y-1 bangla mb-4">
              <li>এয়ার টিকেট (ডাইরেক্ট ফ্লাইট)</li>
              <li>ভিসা প্রসেসিং</li>
              <li>মক্কা-হোটেল (কাবা শরিফ থেকে <span className="font-bold text-teal-800">৬০০</span> মিটার দূরত্ব)</li>
              <li>মদিনা-হোটেল (নবীজির দরবার থেকে <span className="font-bold text-teal-800">৫০০</span> মিটার দূরত্ব)</li>
              <li>ত্রিপল বেডের রুম</li>
              <li>দৈনিক <span className="font-bold text-teal-800">৩</span> বেলা খাবার</li>
              <li>জিয়ারত প্রোগ্রাম</li>
              <li>গাইড সহ সহায়তা</li>
            </ul>
          </div>
          <button className="mt-auto bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-blue-900 transition bangla">
            রেজিস্ট্রেশন করুন
          </button>
        </div>

        {/* স্ট্যান্ডার্ড প্যাকেজ */}
        <div className="bg-purple-100 p-5 sm:p-6 rounded-2xl shadow-lg border-2 flex flex-col justify-between">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-purple-800 mb-4 bangla">
              স্ট্যান্ডার্ড প্যাকেজ <span className="font-bold text-teal-800">১,৩৫,০০০/-</span>
            </h3>
            <p className="mb-2 bangla text-sm sm:text-base">
              প্যাকেজ সময় (যাতায়াতসহ) <span className="font-bold text-teal-800">১৫</span> দিন
            </p>
            <ul className="list-disc list-inside text-sm space-y-1 bangla mb-4">
              <li>এয়ার টিকেট (ডাইরেক্ট ফ্লাইট)</li>
              <li>ভিসা প্রসেসিং</li>
              <li>মক্কা-হোটেল (কাবা শরিফ থেকে <span className="font-bold text-teal-800">৪০০</span> মিটার দূরত্ব)</li>
              <li>মদিনা-হোটেল (নবীজির দরবার থেকে <span className="font-bold text-teal-800">৩০০</span> মিটার দূরত্ব)</li>
              <li>ত্রিপল বেডের রুম</li>
              <li>দৈনিক <span className="font-bold text-teal-800">৩</span> বেলা খাবার</li>
              <li>জিয়ারত প্রোগ্রাম</li>
              <li>গাইড সহ সহায়তা</li>
            </ul>
          </div>
          <button className="mt-auto bg-purple-800 text-white py-2 px-4 rounded-lg hover:bg-purple-900 transition bangla">
            রেজিস্ট্রেশন করুন
          </button>
        </div>

        {/* ফ্লাইট তারিখ */}
        <div className="bg-orange-100 p-5 sm:p-6 rounded-2xl shadow-lg border-2 font-medium flex flex-col justify-between">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-orange-800 mb-4 bangla">
              ফ্লাইট তারিখ
            </h3>
            <ul className="list-disc list-inside text-sm space-y-1 bangla mb-4">
              <li><span className="font-bold text-teal-800">৭</span> নভেম্বর স্ট্যান্ডার্ড প্যাকেজ <span className="font-bold text-teal-800">১৩৫০০০/-</span> (ডাইরেক্ট ফ্লাইট)</li>
              <li><span className="font-bold text-teal-800">১০</span> নভেম্বর সাধারণ প্যাকেজ <span className="font-bold text-teal-800">১২০০০০/-</span> (ডাইরেক্ট ফ্লাইট)</li>
              <li><span className="font-bold text-teal-800">১৬</span> নভেম্বর স্ট্যান্ডার্ড প্যাকেজ <span className="font-bold text-teal-800">১৩৫০০০/-</span> (ডাইরেক্ট ফ্লাইট)</li>
              <li>রেজিস্ট্রেশন শেষ দিন <span className="font-bold text-teal-800">বাইশে</span> অক্টোবর পর্যন্ত</li>
            </ul>
          </div>
          <button className="mt-auto bg-orange-800 text-white py-2 px-4 rounded-lg hover:bg-orange-900 transition bangla">
            রেজিস্ট্রেশন করুন
          </button>
        </div>
      </div>

      <p className="text-sm text-center text-gray-600 max-w-3xl mx-auto mb-4 bangla">
        বি: দ্র: টিকিটের মূল্য, ভিসার মূল্য ভ্যারিয়েবল হওয়ার কারণে প্যাকেজের মূল্য কম বেশি হতে পারে।
        <span className="font-bold text-[maroon]">৫★</span> (কাবার কাছাকাছি) মানের হোটেলের প্যাকেজ আলাদাভাবে আলোচনা সাপেক্ষে করা হয়ে থাকে।
      </p>

      <p className="text-center text-teal-800 font-extrabold mt-6 bangla text-3xl">
        “আমরা আল্লাহর মেহমানদের খাদেম”
      </p>
    </div>
  );
};

export default Pricing;