import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const cards = [
  {
    image: "https://via.placeholder.com/600x400?text=Card+1",
    title: "Card 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    buttonUrl: "/verticalmenu",
    buttonLabel: "Learn More",
  },
  {
    image: "https://via.placeholder.com/600x400?text=Card+2",
    title: "Card 2",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonUrl: "/verticalmenu",
    buttonLabel: "Learn More",
  },
  {
    image: "https://via.placeholder.com/600x400?text=Card+3",
    title: "Card 3",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    buttonUrl: "/verticalmenu",
    buttonLabel: "Learn More",
  },
  {
    image: "https://via.placeholder.com/600x400?text=Card+4",
    title: "Card 4",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    buttonUrl: "/verticalmenu",
    buttonLabel: "Learn More",
  },
  {
    image: "https://via.placeholder.com/600x400?text=Card+5",
    title: "Card 5",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    buttonUrl: "/verticalmenu",
    buttonLabel: "Learn More",
  },
  {
    image: "https://via.placeholder.com/600x400?text=Card+1",
    title: "Card 6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    buttonUrl: "/verticalmenu",
    buttonLabel: "Learn More",
  },
];

const Card = ({ image, title, description, buttonLabel, buttonUrl }) => {
  return (
    <div className="p-4">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg">
        <img src={image} alt={title} className="h-48 w-full object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-700 text-base mb-4">{description}</p>
          <a
            href={buttonUrl}
            className="bg-teal-950 text-white font-bold py-2 px-4 rounded-3xl ml-6"
          >{buttonLabel}</a>
        </div>
      </div>
    </div>
  );
};

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-auto max-w-screen-lg py-4">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </Slider>
      <style>
        {`.slick-prev:before, .slick-next:before {
          color: black;
        }`}
      </style>
    </div>
  );
};

export default Carousel;
