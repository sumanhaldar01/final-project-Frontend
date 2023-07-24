import React from "react";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";

const Hero = () => {
  const { user } = useSelector((state) => state.user);

  console.log(user);
  return (
    <section className="hero relative py-64">
      <div className="hero-overlay absolute inset-0 bg-gradient-to-b from-teal-950 via-green-950-500 to-teal-950 opacity-90"></div>
      <div className="container mx-auto p-6 relative">
        <h1 className="text-8xl font-bold text-green-300 text-center mb-4">
          Train Your Brain
        </h1>
        <p className="text-6xl font-bold text-white text-center mb-8">
          Start lerning and gain knowledge
        </p>
        <form className="flex justify-center items-center">
          <input
            type="text"
            placeholder="Search"
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-s-xl py-2 px-4 block w-80 appearance-none leading-normal"
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-300 focus:outline-none focus:shadow-outline border border-gray-300 rounded-e-xl py-3 border-s-gray-300 px-4"
          >
            <FaSearch className="text-green-950" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
