export default function PostHeader() {
  return (
    <div className="flex items-center justify-between px-3 py-2">
      <div className="flex items-center gap-2">
        <img
          src="/users/user_1.jpeg"
          alt="your_account"
          className="w-8 h-8 rounded-full object-cover"
        />
        <span className="text-sm font-semibold">your_account</span>
      </div>
      <button>
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="5" cy="12" r="1.5" />
          <circle cx="12" cy="12" r="1.5" />
          <circle cx="19" cy="12" r="1.5" />
        </svg>
      </button>
    </div>
  );
}
