import React from 'react';

const Aboutus = () => {
  return (
    <div className="container mx-auto py-8 px-6">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec
            placerat nisl magna, et faucibus arcu condimentum sed.
          </p>
          <p className="text-lg mb-6">
            Nullam ac libero porta, mollis eros eu, ullamcorper ipsum. Sed vel mi a neque suscipit blandit ut vel justo.
            Suspendisse potenti. Vestibulum vel semper nibh, nec consectetur mauris.
          </p>
          <a
            href="#team"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Meet Our Team
          </a>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0">
          <div className="w-full h-64 bg-gray-400 rounded-lg shadow"></div>
        </div>
      </div>

      <div id="team" className="mt-12">
        <h2 className="text-3xl font-bold mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="w-full h-48 bg-gray-400 rounded-lg mb-4 shadow"></div>
            <h3 className="text-xl font-bold mb-2">John Doe</h3>
            <p className="text-gray-700">Co-Founder</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="w-full h-48 bg-gray-400 rounded-lg mb-4 shadow"></div>
            <h3 className="text-xl font-bold mb-2">Jane Smith</h3>
            <p className="text-gray-700">Lead Instructor</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="w-full h-48 bg-gray-400 rounded-lg mb-4 shadow"></div>
            <h3 className="text-xl font-bold mb-2">Alex Johnson</h3>
            <p className="text-gray-700">Content Developer</p>
          </div>

          {/* Add more team members as needed */}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside">
          <li className="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li className="text-lg mb-4">Aliquam at porttitor sem. Aliquam erat volutpat.</li>
          <li className="text-lg mb-4">Donec placerat nisl magna, et faucibus arcu condimentum sed.</li>
          <li className="text-lg mb-4">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</li>
          <li className="text-lg mb-4">In ac ultrices mi. Sed maximus ligula vitae ultrices dignissim.</li>
        </ul>
      </div>
    </div>
  );
};

export default Aboutus;
