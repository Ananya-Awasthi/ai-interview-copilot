import React, { useState } from "react";
import Chatbot from "./Chatbot";

function App() {

  const [showChat, setShowChat] = useState(false);

  return (
    <div style={{ padding: "20px" }}>

      <h1>AI Interview Copilot</h1>

      <button onClick={() => setShowChat(!showChat)}>
        {showChat ? "Close Chatbot" : "Open Chatbot"}
      </button>

      {showChat && <Chatbot />}

    </div>
  );
}

export default App;
