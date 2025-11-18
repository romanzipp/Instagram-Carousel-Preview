interface PostDetailsProps {
  username?: string;
}

export default function PostDetails({ username = 'your_account' }: PostDetailsProps) {
  return (
    <div className="px-3 pb-3">
      <div className="text-sm mb-1">
        <span className="font-semibold mr-1">{username}</span>
        <span>Check out this carousel preview!</span>
      </div>
      <div className="text-[10px] text-gray-400">
        2 hours ago
      </div>
    </div>
  );
}
