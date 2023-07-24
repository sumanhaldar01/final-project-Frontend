import React, { useState } from "react";
import { Link } from "react-router-dom";

const topics = [
  {
    id: 1,
    title: "Topic 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis enim sed tortor faucibus suscipit. Nullam nec nulla a mauris aliquet sodales. Proin vel interdum tellus. Duis eu felis at lectus dignissim fringilla. Integer quis quam sed nulla sagittis ultrices eu ac enim. Ut bibendum risus nec leo congue ullamcorper. Pellentesque euismod non mi non bibendum. Aenean dignissim libero vel arcu dictum, at rutrum dolor suscipit. Nullam vitae blandit orci, sed vulputate ex. Nulla facilisi."
  },
  {
    id: 2,
    title: "Topic 2",
    content:
      "Suspendisse tincidunt orci a sem sagittis bibendum. Sed convallis, sem vel suscipit vulputate, justo sapien convallis enim, eget luctus metus lacus ut est. In vel dui ac dolor vulputate tincidunt. Sed luctus in nibh eu ultrices. Praesent malesuada vitae nisi at scelerisque. Sed sagittis mi sit amet aliquet dapibus. Sed suscipit magna vitae tellus pretium ultrices. Fusce at felis arcu."
  },
  {
    id: 3,
    title: "Topic 3",
    content:
      "Vestibulum at congue erat. Quisque malesuada odio id libero feugiat suscipit. Pellentesque et odio ut metus malesuada molestie. Integer blandit quam ut felis ultrices euismod. Donec lacinia erat ut ante gravida efficitur. Maecenas varius metus non sapien cursus dignissim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst. Sed tincidunt libero et turpis congue, id elementum neque hendrerit."
  }
];

const VerticalMenu = () => {
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
  };

  return (
    <div className="flex flex-row w-full h-screen">
      <div className="flex flex-col w-1/4 bg-gray-100 border-r border-gray-200">
        <h1 className="font-bold text-2xl p-4">Topics</h1>
        <ul className="flex flex-col">
          {topics.map((topic) => (
            <li
              key={topic.id}
              className={`p-4 cursor-pointer ${
                selectedTopic.id === topic.id ? "bg-gray-300" : ""
              }`}
              onClick={() => handleTopicSelect(topic)}
            >
              {topic.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col w-3/4 p-4">
        <h1 className="font-bold text-2xl">{selectedTopic.title}</h1>
        <p className="mt-4">{selectedTopic.content}</p>
        <Link to="/compiler"
        className="bg-teal-950 text-white text-center font-bold py-2 px-4 rounded-3xl ml-6 w-56 mt-6">
        Use Compiler
      </Link>
      </div>
    </div>
  );
};

export default VerticalMenu;
