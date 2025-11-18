export default function Navigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 flex items-center justify-around px-4 py-2 bg-white border-t border-gray-200">
      <div className="w-6 h-6">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z" />
        </svg>
      </div>

      <div className="w-6 h-6">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="7" height="12" rx="1" />
          <rect x="13" y="8" width="7" height="12" rx="1" />
        </svg>
      </div>

      <div className="w-6 h-6">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      </div>

      <div className="w-6 h-6">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </div>

      <div className="w-6 h-6">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="10" r="3" />
          <path d="M6.168 18.849A4 4 0 0 1 10 16h4a4 4 0 0 1 3.834 2.855" />
        </svg>
      </div>
    </nav>
  );
}
