"use client";
import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const images = [
    "https://adventure.norrona.com/en/assets/image-cache/2065_Hiking_biking_and_kayaking_in_Fjord_Norway_2018_ThorHakonUlstad_30.2ff10b81.jpg",
    "https://www.ascentready.com/wp-content/uploads/2023/10/free-stock-photo-of-2020-wallpaper-4k-1024x683.jpeg",
    "https://wallpapercat.com/w/full/9/6/7/1926049-2048x1310-desktop-hd-cycling-mountain-bike-background-image.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // ⏱ Automatically change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval); // Cleanup timer
  }, [images.length]);

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="relative overflow-hidden">
      <div className="w-full h-[800px] md:h-[900px] bg-gray-900">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
        <img
          src={images[currentImageIndex]}
          alt="Hero Background"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 mb-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full bg-gray-400 cursor-pointer ${
              currentImageIndex === index && `bg-white`
            }`}
          ></button>
        ))}
      </div>
      <div className="absolute top-0 left-0 w-full h-[600px] md:h-[700px] border-t-8 border-amber-700"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Fly Free</h1>
        <p className="text-x1 md:text-2xl mb-10 font-bold">
          Discover what makes you want to go and fly
        </p>
        <button className="bg-amber-600 text-black px-6 py-3 rounded-full hover:bg-gray-300 transition duration-300 cursor-pointer">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
