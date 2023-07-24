import React from "react";
import { Link } from 'react-router-dom';


const SmallCard = ({ title, description, price, buttonLabel, buttonUrl }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full p-4 my-4">
      <h3 className="font-medium text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm mt-1">{description}</p>
      <p className="text-gray-600 text-sm mt-1 mb-3">{`$${price}`}</p>
      <a
        href={buttonUrl}
        className="bg-teal-950 text-white font-bold py-2 px-4 rounded-3xl ml-6"
      >
        {buttonLabel}
      </a>
    </div>
  );
};

const Secondcard = () => {
  const cards = [
    {
      title: "Product 1",
      description: "This is a description of Product 1",
      price: 10.99,
      buttonLabel: "Enroll Now",
      buttonUrl: "/firstcourse",
    },
    {
      title: "Product 2",
      description: "This is a description of Product 2",
      price: 15.99,
      buttonLabel: "Enroll Now",
      buttonUrl: "#",
    },
    {
      title: "Product 3",
      description: "This is a description of Product 3",
      price: 19.99,
      buttonLabel: "Enroll Now",
      buttonUrl: "#",
    },
    {
      title: "Product 4",
      description: "This is a description of Product 4",
      price: 25.99,
      buttonLabel: "Enroll Now",
      buttonUrl: "#",
    },
    {
      title: "Product 5",
      description: "This is a description of Product 4",
      price: 25.99,
      buttonLabel: "Enroll Now",
      buttonUrl: "#",
    },
    {
      title: "Product 6",
      description: "This is a description of Product 4",
      price: 25.99,
      buttonLabel: "Enroll Now",
      buttonUrl: "#",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 mx-auto w-full pt-4 pb-2 sm:px-6 lg:px-8 bg-emerald-300">
      {cards.map((card, index) => (
        <div className="flex justify-center" key={index}>
          <SmallCard
            title={card.title}
            description={card.description}
            price={card.price}
            buttonLabel={card.buttonLabel}
            buttonUrl={card.buttonUrl}
          />
        </div>
      ))}
      <div className="text-center">
        <Link to="/courses" className="text-indigo-500 hover:text-indigo-600 font-bold text-lg">
          Explore More
        </Link>
      </div>
    </div>
  );
};

export default Secondcard;
