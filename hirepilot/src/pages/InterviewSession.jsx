import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:8000";

export default function InterviewSession() {
  const [question, setQuestion] = useState("");
  const [role, setRole] = useState("");
  const [resumeText, setResumeText] = useState("");
  const [timeLeft, setTimeLeft] = useState(300);

  // LOAD DATA
  useEffect(() => {
    const r = localStorage.getItem("role") || "";
    const rt = localStorage.getItem("resumeText") || "";

    setRole(r);
    setResumeText(rt);

    fetchQuestion(r, rt);
  }, []);

  // TIMER
  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const fetchQuestion = async (r, rt) => {
    const res = await fetch(
      `${BASE_URL}/interview/start?role=${encodeURIComponent(
        r
      )}&resume_text=${encodeURIComponent(rt)}`,
      { method: "POST" }
    );

    const data = await res.json();
    setQuestion(data.question);
  };

  const nextQuestion = () => {
    fetchQuestion(role, resumeText);
  };

  const formatTime = () => {
    const m = Math.floor(timeLeft / 60);
    const s = timeLeft % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  return (
    <div className="page">

      {/* NAV */}
      <nav>
        <a href="/" className="nav-logo">
          <div className="logo-mark">
            <svg viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="3" fill="white"/>
              <path d="M7 10 C4.5 9,1.5 9.5,0.5 10 C1.5 10.5,4.5 11,7 10Z" fill="white" opacity=".75"/>
              <path d="M13 10 C15.5 9,18.5 9.5,19.5 10 C18.5 10.5,15.5 11,13 10Z" fill="white" opacity=".75"/>
              <line x1="10" y1="7" x2="10" y2="3" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="10" cy="2.2" r="1.5" fill="#FCD34D"/>
            </svg>
          </div>
          HirePilot
        </a>

        <div className="nav-center">
          <div className="nav-session-badge">
            <div className="rec-dot"></div>
            Session Live
          </div>
          <div className="nav-timer">{formatTime()}</div>
        </div>

        <div className="nav-right">
          <button className="nav-end">⏹ End Session</button>
        </div>
      </nav>

      {/* HEADER */}
      <div className="interviewer-bar">
        <div className="ia-left">
          <div className="ia-avatar">
            <svg viewBox="0 0 28 28" fill="none">
              <rect x="5" y="8" width="18" height="14" rx="5" fill="rgba(255,255,255,0.92)"/>
              <line x1="14" y1="8" x2="14" y2="4" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="14" cy="3.5" r="1.5" fill="#FCD34D"/>
              <circle cx="10.5" cy="13" r="2" fill="#1D4ED8"/>
              <circle cx="17.5" cy="13" r="2" fill="#1D4ED8"/>
              <circle cx="11" cy="13" r="1" fill="white"/>
              <circle cx="18" cy="13" r="1" fill="white"/>
              <path d="M10.5 17.5 Q14 20 17.5 17.5" stroke="#1D4ED8" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            </svg>
          </div>

          <div>
            <div className="ia-name">Aria — AI Interviewer</div>
            <div className="ia-role">
              Conducting:{" "}
              <span style={{ color: "#3B82F6", fontWeight: "700" }}>
                {role}
              </span>
            </div>
          </div>
        </div>

        <div className="ia-right">
          <div className="live-badge">
            <div className="live-dot-g"></div> Live
          </div>
          <div className="q-counter-badge">Q 1 / 6</div>
        </div>
      </div>

      {/* PROGRESS */}
      <div className="progress-wrap">
        <div className="progress-track">
          <div className="progress-fill" style={{ width: "17%" }}></div>
        </div>
        <div className="progress-labels">
          <span>Question 1 of 6</span>
          <span>17% complete</span>
        </div>
      </div>

      {/* AUDIO */}
      
      {/* QUESTION CARD */}
      <div className="question-card">

        <div className="qc-top">
          <div className="qc-top-left">
            <span className="qc-num">QUESTION 01</span>
            <div className="qc-tags">
              <span className="qtag qt-type">Behavioral</span>
              <span className="qtag qt-diff-med">Medium</span>
            </div>
          </div>
        </div>

        <div className="qc-body">

          <div className="think-row">
            <span className="think-label">Thinking time</span>
            <span className="think-timer">{formatTime()}</span>
          </div>

          <div className="question-text">
            {question || "Loading..."}
          </div>

          <div className="star-tip">
            <div className="star-tip-icon">⭐</div>
            <div className="star-tip-text">
              <strong>Use the STAR Method</strong>
              <p>
                Structure your answer as a short story — Situation, Task, Action, Result.
              </p>
              <div className="star-pills">
                <span className="star-pill">Situation</span>
                <span className="star-pill">Task</span>
                <span className="star-pill">Action</span>
                <span className="star-pill">Result</span>
              </div>
            </div>
          </div>

          <div className="action-row">
            <button className="btn-next" onClick={nextQuestion}>
              Next Question →
            </button>
            <button className="btn-hint">💡 Hint</button>
            <button className="btn-skip">Skip</button>
          </div>

        </div>
      </div>

      {/* METRICS */}
      <div className="metrics-row">
        <div className="metric-card">
          <div className="m-icon">🎙️</div>
          <div>
            <div className="m-val">87%</div>
            <div className="m-lbl">Clarity</div>
          </div>
        </div>

        <div className="metric-card">
          <div className="m-icon">💪</div>
          <div>
            <div className="m-val">89%</div>
            <div className="m-lbl">Confidence</div>
          </div>
        </div>

        <div className="metric-card">
          <div className="m-icon">⚡</div>
          <div>
            <div className="m-val">85%</div>
            <div className="m-lbl">Pace</div>
          </div>
        </div>
      </div>

      {/* CHAT BOT */}
      <div className="chat-fab">
        <button className="chat-btn">
          🤖
        </button>
      </div>

    </div>
  );
}