export default function ChatButton() {
  return (
    <div className="chat-fab">
      <button className="chat-btn" title="Chat with Aria">
        
        <div className="av-face">
          <svg viewBox="0 0 28 28" fill="none">
            <rect x="5" y="8" width="18" height="14" rx="5" fill="#1D4ED8"/>
            <line x1="14" y1="8" x2="14" y2="4" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="14" cy="3.5" r="1.5" fill="#FCD34D"/>
            <circle cx="10.5" cy="13" r="2" fill="white"/>
            <circle cx="17.5" cy="13" r="2" fill="white"/>
            <circle cx="11" cy="13" r="1" fill="#1D4ED8"/>
            <circle cx="18" cy="13" r="1" fill="#1D4ED8"/>
            <path d="M10.5 17.5 Q14 20 17.5 17.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          </svg>
        </div>

      </button>
    </div>
  );
}