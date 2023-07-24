import React from "react";

const cards = [
  {
    id: 1,
    title: "Card 1",
    content: "This is the content for Card 1.",
    imageSrc: "https://source.unsplash.com/random/400x400/?nature",
    buttonLabel: "Learn More",
    buttonUrl: "/verticalmenu",
  },
  {
    id: 2,
    title: "Card 2",
    content: "This is the content for Card 2.",
    imageSrc: "https://source.unsplash.com/random/400x400/?water",
    buttonLabel: "Learn More",
    buttonUrl: "/verticalmenu",
  },
  {
    id: 3,
    title: "Card 3",
    content: "This is the content for Card 3.",
    imageSrc: "https://source.unsplash.com/random/400x400/?mountain",
    buttonLabel: "Learn More",
    buttonUrl: "/verticalmenu",
  },
  {
    id: 3,
    title: "Card 3",
    content: "This is the content for Card 3.",
    imageSrc: "https://source.unsplash.com/random/400x400/?mountain",
    buttonLabel: "Learn More",
    buttonUrl: "/verticalmenu",
  },
];

const DynamicCard = ({ title, content, imageSrc, buttonLabel, buttonUrl }) => {
  return (
    <div className="bg-white rounded-md pb-4 shadow-md text-cyan-500 transition duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
      <img
        src={imageSrc}
        alt={title}
        className="mb-1 w-full h-40p object-cover rounded-t-md"
      />
      <h2 className="text-lg font-semibold mb-2 text-center text-gray-800">
        {title}
      </h2>
      <p className="mb-4 text-center text-gray-800">{content}</p>
      <a
        href={buttonUrl}
        className="bg-teal-950 text-white font-bold py-2 px-4 rounded-3xl ml-6"
      >
        {buttonLabel}
      </a>
    </div>
  );
};

const Firstcard = () => {
  return (
    <div className="bg-emerald-300 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div key={card.id}>
              <DynamicCard
                title={card.title}
                content={card.content}
                imageSrc={card.imageSrc}
                buttonLabel={card.buttonLabel}
                buttonUrl={card.buttonUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Firstcard;
