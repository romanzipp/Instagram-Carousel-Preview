export default function Stories() {
  const stories = [
    { name: 'Your story', image: '/users/user_1.jpeg' },
    { name: 'alex_photos', image: '/users/user_2.jpeg' },
    { name: 'jane_doe', image: '/users/user_3.jpeg' },
    { name: 'travel_life', image: '/users/user_4.jpeg' },
  ];

  return (
    <div className="flex gap-4 pl-4 py-3 overflow-x-hidden scrollbar-hide">
      {stories.map((story, index) => (
        <div key={index} className="flex flex-col items-center gap-1 min-w-fit">
          <div className="w-20 h-20 shrink-0 rounded-full p-[3px] bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
            <div className="w-full h-full rounded-full bg-white p-[3px]">
              <img
                src={story.image}
                alt={story.name}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          <span className="text-xs text-gray-700 max-w-[80px] truncate">
            {story.name}
          </span>
        </div>
      ))}
    </div>
  );
}
