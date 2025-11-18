export default function PostDetails() {
  return (
    <div className="px-3 py-2">
      <div className="flex items-center gap-1 mb-2 text-sm">
        <span className="font-semibold">1,234</span>
        <span className="text-gray-700">likes</span>
      </div>
      <div className="text-sm mb-2">
        <span className="font-semibold mr-2">your_account</span>
        <span className="text-gray-900">Check out this carousel preview!</span>
      </div>
      <div className="text-sm text-gray-500 mb-1">
        View all 42 comments
      </div>
      <div className="text-xs text-gray-400 uppercase">
        2 hours ago
      </div>
    </div>
  );
}
