import { useState } from "react";

function VideoContent() {
  const [topics] = useState([
    {
      id: 1,
      title: "Topic 1",
      videos: [
        {
          id: 1,
          title: "Video 1",
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
        {
          id: 2,
          title: "Video 2",
          url: "https://www.youtube.com/embed/oHg5SJYRHA0",
        },
      ],
    },
    {
      id: 2,
      title: "Topic 2",
      videos: [
        {
          id: 3,
          title: "Video 3",
          url: "https://www.youtube.com/embed/6Dh-RL__uN4",
        },
        {
          id: 4,
          title: "Video 4",
          url: "https://www.youtube.com/embed/otCpCn0l4Wo",
        },
      ],
    },
  ]);
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
    setSelectedVideo(null);
  };

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const handleBackClick = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="flex h-screen">
      {/* Left sidebar */}
      <div className="flex-none w-64 bg-gray-100">
        <div className="p-4 font-bold">Topics</div>
        <ul className="py-4">
          {topics.map((topic) => (
            <li
              key={topic.id}
              className="pl-4 pr-2 py-2 cursor-pointer hover:bg-gray-200"
              onClick={() => handleTopicClick(topic)}
            >
              {topic.title}
            </li>
          ))}
        </ul>
      </div>
      {/* Main content area */}
      <div className="flex-1">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">{selectedTopic.title}</h2>
          {selectedVideo ? (
            <div className="flex flex-col items-center">
              <div className="w-full aspect-w-16 aspect-h-16">
                <iframe
                  title={selectedVideo.title}
                  src={selectedVideo.url}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <button
                className="bg-gray-300 px-4 py-2 rounded-md mt-4"
                onClick={handleBackClick}
              >
                Back
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {selectedTopic.videos.map((video) => (
                <div
                  key={video.id}
                  className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleVideoClick(video)}
                >
                  <div className="text-lg font-bold">{video.title}</div>
                  <div className="text-gray-700">Click to watch</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default VideoContent;
