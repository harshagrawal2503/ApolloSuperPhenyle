import React from 'react';

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-white px-4 py-6 flex flex-col items-center">
      {/* Intro Text */}
      <div className="text-center max-w-3xl">
        <h1 className="text-2xl md:text-4xl font-bold text-green-800">
          Welcome to Apollo Super Phenyle
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed">
          We bring you the ultimate cleaning solution trusted by households and businesses alike.
          <br />
          <span className="font-semibold text-green-700">Apollo Super Phenyle</span> is known for its unmatched <strong>quality</strong>, long-lasting <strong>fragrance</strong>, and powerful <strong>germ-killing formula</strong>.
        </p>
      </div>

      {/* Highlight Section */}
      <div className="mt-8 bg-green-100 p-6 rounded-lg shadow-md max-w-4xl w-full text-center">
        <h2 className="text-xl md:text-2xl font-semibold text-green-900 mb-2">
          🧴 Best in Quality & Power
        </h2>
        <p className="text-gray-800 text-sm md:text-base">
          Apollo Super Phenyle keeps your surroundings <strong>clean</strong>, <strong>fresh</strong>, and <strong>free from insects</strong> like mosquitoes and flies.
          <br />
          Ideal for daily use in homes, hospitals, schools, offices, and more.
        </p>
      </div>

      {/* Banner Image - FULL SIZE BELOW CONTENT */}
      <div className="mt-10 w-full flex justify-center">
        <img
          src="/banner.jpg"
          alt="Apollo Super Phenyle Banner"
          className="w-full max-w-5xl h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Home;
