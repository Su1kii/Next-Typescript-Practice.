import React from "react";
import { FaArrowRight } from "react-icons/fa";

const NewLetter = () => {
  return (
    <section className="bg-gray-400 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-300 mb-6">
              Stay updated with the latest trends and offers.
            </p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-100 text-black px-4 py-2 border rounded-lg focus:outline-none focus:ring"
            />
            <button className="bg-black text-white px-6 py-2 rounded-r-lg hover:bg-amber-500 transition duration-300 flex items-center">
              <span className="mr-2">Subscribe</span>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewLetter;
