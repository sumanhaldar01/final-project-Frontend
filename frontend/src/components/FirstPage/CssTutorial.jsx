import React from "react";

const CssTutorial = () => {
  return (
    <div className="bg-gray-100 py-8 px-24 mx-auto">
      <div className="container px-4 mx-auto sm:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              HTML Tutorial
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-5 sm:text-2xl">
              Learn HTML with compiler
            </p>
            <div className="mt-8 space-x-3 sm:mt-10">
              <a
                href="/"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
              >
                Learn More
              </a>
            </div>
          </div>
          <div>
          <img src="https://source.unsplash.com/random/800x600" alt="/" className="object-cover w-full h-full rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CssTutorial;
