export default function Stories() {
  const stories = [
    { name: 'Your story', color: 'bg-gradient-to-br from-purple-500 to-pink-500' },
    { name: 'alex_photos', color: 'bg-gradient-to-br from-yellow-400 to-red-500' },
    { name: 'jane_doe', color: 'bg-gradient-to-br from-purple-600 to-blue-500' },
    { name: 'travel_life', color: 'bg-gradient-to-br from-pink-500 to-orange-500' },
    { name: 'foodie_gram', color: 'bg-gradient-to-br from-green-400 to-blue-500' },
    { name: 'art_daily', color: 'bg-gradient-to-br from-red-500 to-pink-500' },
    { name: 'music_vibes', color: 'bg-gradient-to-br from-indigo-500 to-purple-500' },
    { name: 'fit_journey', color: 'bg-gradient-to-br from-orange-500 to-red-500' },
  ];

  return (
    <div className="flex gap-3 px-4 py-3 overflow-x-auto border-b border-gray-200 scrollbar-hide">
      {stories.map((story, index) => (
        <div key={index} className="flex flex-col items-center gap-1 min-w-fit">
          <div className={`w-16 h-16 rounded-full p-0.5 ${story.color}`}>
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
