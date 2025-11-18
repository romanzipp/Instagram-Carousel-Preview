interface PostHeaderProps {
  username?: string;
  profileImage?: string;
}

export default function PostHeader({ username = 'your_account', profileImage = '/users/user_1.jpeg' }: PostHeaderProps) {
  return (
    <div className="flex items-center justify-between px-3 py-2">
      <div className="flex items-center gap-2">
        <img
          src={profileImage}
          alt={username}
          className="w-8 h-8 rounded-full object-cover"
        />
        <span className="text-sm font-semibold">{username}</span>
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
