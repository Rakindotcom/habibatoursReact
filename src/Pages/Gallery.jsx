import React from "react";

// Correct glob path (relative to this file location)
const imageModules = import.meta.glob("../assets/HabibaTours/*.jpg", { eager: true });

const images = Object.values(imageModules).map((mod) => mod.default);

const Gallery = () => {
  return (
    <div className="py-7 px-4 md:px-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8 text-teal-800">
        Tour Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-300"
          >
            <img
              src={img}
              alt={`Tour ${index + 1}`}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;