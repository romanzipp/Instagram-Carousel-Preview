interface NavigationProps {
  profileImage?: string;
}

export default function Navigation({ profileImage = '/users/user_1.jpeg' }: NavigationProps) {
  return (
    <nav className="flex items-center justify-around px-4 py-3 bg-white border-t border-gray-200">
      <div className="w-6 h-6">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z" />
        </svg>
      </div>

      <div className="w-6 h-6">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none" />
        </svg>
      </div>

      <div className="w-6 h-6">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 2L11 13" />
          <path d="M22 2l-7 20-4-9-9-4 20-7z" />
        </svg>
      </div>

      <div className="w-6 h-6">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      </div>

      <img
        src={profileImage}
        alt="Profile"
        className="w-6 h-6 rounded-full object-cover"
      />
    </nav>
  );
}
