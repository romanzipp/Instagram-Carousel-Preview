export default function Stories() {
  const stories = [
    { name: 'Your story' },
    { name: 'alex_photos' },
    { name: 'jane_doe' },
    { name: 'travel_life' },
    { name: 'foodie_gram' },
  ];

  return (
    <div className="flex gap-3 pl-4 py-3 overflow-x-hidden scrollbar-hide">
      {stories.map((story, index) => (
        <div key={index} className="flex flex-col items-center gap-1 min-w-fit">
          <div className="w-16 h-16 rounded-full p-0.5 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-gray-200" />
            </div>
          </div>
          <span className="text-xs text-gray-700 max-w-[70px] truncate">
            {story.name}
          </span>
        </div>
      ))}
    </div>
  );
}
