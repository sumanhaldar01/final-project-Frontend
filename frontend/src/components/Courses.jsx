import React from 'react';
import { Link } from 'react-router-dom';


const Courses = () => {
  // Separate arrays for IDs and course data
  const cardIds = Array(12).fill().map((_, index) => index + 1);
  const courseData = [
    { title: 'Introduction to Computer Science', description: 'An overview of computer science fundamentals.' },
    { title: 'Data Structures and Algorithms', description: 'Learn about fundamental data structures and algorithms.' },
    { title: 'Database Systems', description: 'Explore concepts and techniques for managing databases.' },
    { title: 'Computer Networks', description: 'Learn about network protocols and communication.' },
    { title: 'Operating Systems', description: 'Study the principles and functions of operating systems.' },
    { title: 'Software Engineering', description: 'Learn software development methodologies and practices.' },
    { title: 'Artificial Intelligence', description: 'Explore the field of artificial intelligence and machine learning.' },
    { title: 'Web Development', description: 'Learn front-end and back-end web development technologies.' },
    { title: 'Computer Graphics', description: 'Study algorithms and techniques for computer graphics.' },
    { title: 'Cybersecurity', description: 'Explore techniques for protecting computer systems and networks.' },
    { title: 'Mobile App Development', description: 'Learn to develop applications for mobile devices.' },
    { title: 'Cloud Computing', description: 'Explore concepts and technologies for cloud-based systems.' },
  ];

  return (
    <div className="container mx-auto p-8 bg-emerald-300">
      <h1 className="text-2xl font-bold mb-4">Computer Science Courses</h1>
      <div className="grid grid-cols-3 gap-4">
        {cardIds.map((id, index) => (
          <div key={id} className="bg-white p-4 rounded-md shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-medium">{courseData[index].title}</h3>
              <p className="mt-2 text-sm">{courseData[index].description}</p>
            </div>
            <Link to="/" className="block bg-blue-500 text-white font-semibold px-4 py-2 rounded-md mt-4 text-center">
              Enroll
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
