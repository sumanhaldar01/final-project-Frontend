import React from 'react';
import { Link } from 'react-router-dom';

const FirstCourse = () => {
  const courseData = {
    title: 'Introduction to Web Development',
    description: `This course provides a comprehensive introduction to web development, covering the fundamental concepts and technologies used to build dynamic websites. You will learn the building blocks of the web, including HTML for structure, CSS for styling, and JavaScript for interactivity. The course will also delve into responsive design, accessibility, and best practices for creating user-friendly web experiences. By the end of the course, you will have the skills to confidently develop your own websites and showcase your work to the world.

In this course, you will explore various front-end and back-end web development techniques. You will gain hands-on experience in creating responsive layouts, working with modern CSS frameworks, and implementing JavaScript functionality to create dynamic web pages. Additionally, you will learn how to utilize version control with Git and collaborate with others on web development projects.

The course will guide you through the process of building a complete web application from scratch. You will learn how to set up a development environment, design the user interface, implement server-side functionality, and deploy the application to a hosting platform. Along the way, you will encounter real-world challenges and develop problem-solving skills that are crucial for successful web development careers.`,
    routePath: '/videocontent', // Replace with the desired route path
  };

  return (
    <div className="container mx-auto p-4">
      <div className="my-4">
        <h1 className="text-2xl font-bold mb-2">{courseData.title}</h1>
        <p className="text-lg">{courseData.description}</p>
      </div>
      <div className="flex justify-center my-8">
        <Link to={courseData.routePath} className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md">
          Go to Course Details
        </Link>
      </div>
    </div>
  );
};

export default FirstCourse;
